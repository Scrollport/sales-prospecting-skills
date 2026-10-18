import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { checkRepository, validateRepository } from "../scripts/validate.mjs";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");
const readJson = (path) => JSON.parse(read(path));
const flat = (text) => text.replace(/\s+/g, " ");

const SKILLS = ["lead-list", "sales-qualified-accounts"];
const RESULT_TEMPLATES = {
  "lead-list": "assets/lead-list-result-template.md",
  "sales-qualified-accounts": "assets/qualified-accounts-template.md",
};
const LEAD_COLUMNS = ["First name", "Last name", "Title", "Company", "Company domain", "Why it matched", "Industry", "Size", "City", "Country", "Email", "Email status", "Verified on", "Source URL"];
const ACCOUNT_COLUMNS = [...LEAD_COLUMNS, "Why now", "Why-now date", "Why-now URL", "Verdict"];
const CONTACT_ROUTE = [
  "hunter.domain-email-search-flex",
  "leadmagic.employee-finder",
  "findymail.search-employees",
  "exa.people-search",
  "quickenrich.people-email-find",
  "leadmagic.people-email-find",
  "millionverifier.people-email-verify",
];

// RFC 4180 fields: a quoted field may hold commas and doubled quotes.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") field += char;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function fixture({ frontmatter = true, secret = false, undeclared = false, mutateManifest } = {}) {
  const dir = mkdtempSync(join(tmpdir(), "scrollport-skill-test-"));
  const skillDir = join(dir, "skills", "fixture-skill");
  mkdirSync(skillDir, { recursive: true });
  const credential = secret ? `sp_${"live"}_${"A".repeat(24)}` : "ordinary-state";
  const dependencyLine = undeclared ? "Use `other.lookup`." : "Use `demo.lookup`.";
  writeFileSync(join(dir, "registry.json"), JSON.stringify({ schema_version: 2, repository: "https://github.com/Scrollport/web-research-extraction-skills", skills: [{ id: "fixture-skill", path: "skills/fixture-skill", status: "verified", customer_proven: false }] }));
  const manifest = {
    schema_version: 2,
    id: "fixture-skill",
    title: "Fixture Skill",
    version: "1.0.0",
    status: "verified",
    customer_proven: false,
    summary: "Fixture",
    outcome: "Fixture outcome",
    boundary: "Fixture boundary",
    category: "web-research-extraction",
    capabilities: [{ id: "web-search", tool_ids: ["demo.lookup"] }],
    license: "MIT",
    instruction_path: "SKILL.md",
    changelog_path: "CHANGELOG.md",
    dependencies: {
      scrollport_control_tools: ["search_tools", "inspect_tool", "run_tool", "get_run", "list_apps", "get_wallet"],
      catalog_tools: [{ tool_id: "demo.lookup", required: true, purpose: "Fixture lookup" }],
      connected_apps: [],
    },
    inputs: ["Input"],
    outputs: ["Output"],
    cost: { currency: "USD", model: "Per call", trial_safe_max_usd: "0.010000", notes: "Fixture" },
    approvals: ["Approve cost"],
    compatibility: ["Agent Skills host"],
    evidence: { verified_at: new Date().toISOString().slice(0, 10), review_due_at: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10), summary_path: "EVIDENCE.md", customer_proof_path: null },
  };
  mutateManifest?.(manifest);
  writeFileSync(join(skillDir, "skill.json"), JSON.stringify(manifest));
  const yaml = frontmatter ? "---\nname: fixture-skill\ndescription: Run a fixture lookup when testing independent Skill installation.\nlicense: MIT\n---\n" : "";
  writeFileSync(join(skillDir, "SKILL.md"), `${yaml}# Fixture\n\nCall search_tools, inspect_tool, run_tool, get_run, list_apps and get_wallet. ${dependencyLine}\n\nState: ${credential}\n`);
  writeFileSync(join(skillDir, "CHANGELOG.md"), "# Changelog\n");
  writeFileSync(join(skillDir, "EVIDENCE.md"), "# Evidence\n");
  return dir;
}

test("the canonical repository satisfies its publication contract", () => {
  assert.deepEqual(validateRepository(root), []);
});

test("the generated export includes the shared installation guide", () => {
  const install = readFileSync(join(root, "INSTALL.md"), "utf8");
  assert(install.includes("https://scrollport.com/start"));
  assert(install.includes("select every"));
  assert(readFileSync(join(root, "scripts", "build-exports.mjs"), "utf8").includes('join(out, "INSTALL.md")'));
});

test("runtime Skills use GitHub manifests as their only version authority", () => {
  const source = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"));
  for (const entry of source.skills) {
    const instruction = readFileSync(join(root, entry.path, entry.status === "verified" ? "SKILL.md" : "DRAFT.md"), "utf8");
    assert(!instruction.includes("scrollport-version:"), `${entry.id} repeats its canonical version`);
    assert(!instruction.includes("AUTHORING.md"), `${entry.id} loads maintainer-only authoring guidance`);
  }
});

test("generated runtime packages exclude maintainer provenance", () => {
  const build = readFileSync(join(root, "scripts", "build-exports.mjs"), "utf8");
  assert(!build.includes('join(out, "AUTHORING.md")'));
  assert(!build.includes("cpSync(sourceDir, targetDir, { recursive: true })"));
  assert(build.includes('for (const runtimeDirectory of ["assets", "references", "scripts"])'));
});

test("a complete fixture Skill validates independently", () => {
  assert.deepEqual(validateRepository(fixture()), []);
});

test("malformed frontmatter is rejected", () => {
  assert(validateRepository(fixture({ frontmatter: false })).some((error) => error.includes("YAML frontmatter")));
});

test("secret-bearing instructions are rejected", () => {
  assert(validateRepository(fixture({ secret: true })).some((error) => error.includes("Scrollport credential")));
});

test("undeclared catalog dependencies are rejected", () => {
  assert(validateRepository(fixture({ undeclared: true })).some((error) => error.includes("undeclared catalog tool other.lookup")));
});

test("non-canonical Skill categories are rejected", () => {
  assert(validateRepository(fixture({ mutateManifest: (manifest) => { manifest.category = "miscellaneous"; } })).some((error) => error.includes("canonical Scrollport category")));
});

test("capabilities cannot reference undeclared catalog tools", () => {
  assert(validateRepository(fixture({ mutateManifest: (manifest) => { manifest.capabilities[0].tool_ids = ["other.lookup"]; } })).some((error) => error.includes("references undeclared catalog tool other.lookup")));
});

test("every catalog dependency must have a capability association", () => {
  assert(validateRepository(fixture({ mutateManifest: (manifest) => { manifest.capabilities[0].tool_ids = ["demo.lookup"]; manifest.dependencies.catalog_tools.push({ tool_id: "extra.lookup", required: false, purpose: "Extra lookup" }); } })).some((error) => error.includes("catalog dependency extra.lookup has no capability association")));
});

test("duplicate capability declarations are rejected", () => {
  assert(validateRepository(fixture({ mutateManifest: (manifest) => { manifest.capabilities.push({ id: "web-search", tool_ids: ["demo.lookup"] }); } })).some((error) => error.includes("duplicate capability web-search")));
});

test("build output excludes candidates", () => {
  const source = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"));
  assert(source.skills.some((entry) => entry.status === "draft"));
  assert(!source.skills.filter((entry) => entry.status === "verified").some((entry) => entry.path.startsWith("candidates/")));
});

test("the Sales outcome Skills and withheld CRM candidate are canonical without a package router", () => {
  const source = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"));
  assert.deepEqual(
    source.skills.map(({ id, status, customer_proven }) => ({ id, status, customer_proven })),
    [
      { id: "lead-list", status: "verified", customer_proven: false },
      { id: "sales-qualified-accounts", status: "verified", customer_proven: false },
      { id: "sales-prospecting-to-crm", status: "draft", customer_proven: false },
    ],
  );
});

test("Research My Accounts keeps its id and former ids and asks five plain questions", () => {
  const manifest = readJson("skills/sales-qualified-accounts/skill.json");
  const instructions = flat(read("skills/sales-qualified-accounts/SKILL.md"));
  assert.equal(manifest.title, "Research My Accounts");
  assert.equal(manifest.version, "6.1.1");
  assert.equal(manifest.outcome, "Paste companies; learn which to contact now, why (with dated sources) and whom.");
  for (const alias of ["scrollport-qualified-accounts", "scrollport-qualified-accounts-weekly", "qualified-accounts-to-contact", "research-my-accounts"]) {
    assert(manifest.aliases.includes(alias), alias);
  }
  assert.equal(manifest.inputs.length, 5);
  assert(manifest.inputs[0].startsWith("What you sell"));
  assert(manifest.inputs.some((input) => input.includes("default 10")));
  assert(manifest.outputs.length <= 5);
  // The spend input became one computed maximum that the user approves; the trial is five
  // companies, priced for an agent that cannot read web pages itself.
  assert(manifest.approvals.some((approval) => approval.includes("one maximum price")));
  assert.equal(manifest.cost.trial_safe_max_usd, "0.830000");
  // The former examination and freshness inputs became defaults.
  assert(instructions.includes("up to twice the number asked for in all"));
  assert(instructions.includes("Anything older than 90 days does not count"));
  // Lists the user supplies only: finding companies belongs to Find Leads.
  assert(instructions.includes("hand over to Find Leads (`lead-list`)"));
  assert(!manifest.dependencies.catalog_tools.some((tool) => tool.tool_id === "hunter.discover"));
  // Research runs in parallel with at most three sources per company.
  assert(instructions.includes("Read three sources, no more"));
  assert(instructions.includes("Work on up to three companies at once"));
});

test("Research My Accounts applies the fixes from its 14 October verification", () => {
  const instructions = flat(read("skills/sales-qualified-accounts/SKILL.md"));
  // Company data from a same-day Find Leads hand-off is reused as the first source.
  assert(instructions.includes("If Find Leads handed these companies over today, reuse its company data: it counts as the first of the three sources"));
  // A relative news date is read from the item itself.
  assert(instructions.includes("open the item and read its exact date"));
  // An award is a why-now only when recent and relevant to the offer.
  assert(instructions.includes("An award counts only if it is from the last 90 days and relates to what the user sells"));
  // The quote allows a paid page read when a site blocks the agent's own reader.
  assert(instructions.includes("one page read, in case a site blocks your own reader"));
  // Not yet without a why-now gets an opening question based on fit.
  assert(instructions.includes("For Not yet with no why now, base the question on fit instead"));
  // A website that redirects to another company means merged or acquired.
  assert(instructions.includes("If their website now redirects to another company's site, the verdict is Skip"));
});

test("Find Leads promises 25 verified decision-makers and offers research on the top 10", () => {
  const manifest = readJson("skills/lead-list/skill.json");
  const instructions = flat(read("skills/lead-list/SKILL.md"));
  assert.equal(manifest.title, "Find Leads");
  assert.equal(manifest.version, "2.1.1");
  assert.equal(manifest.outcome, "Describe your customer; get 25 decision-makers with verified work emails and why each company fits.");
  assert.equal(manifest.customer_proven, false);
  // The trial is the smallest choice, 10 contacts, priced from the 14 October 2026 inspection.
  assert.equal(manifest.cost.trial_safe_max_usd, "0.710000");
  assert(manifest.inputs.length <= 5 && manifest.outputs.length <= 5);
  assert(manifest.inputs.some((input) => input.includes("default 25, one per company")));
  assert(manifest.aliases.includes("find-leads"));
  assert(instructions.includes("Never decide fit from the name alone"));
  assert(instructions.includes("Research the top 10"));
  // With fewer than 10 ready, every ready contact is handed over.
  assert(instructions.includes("or all of them when fewer than 10 are ready"));
  assert(instructions.includes("`sales-qualified-accounts`"));
  assert(instructions.includes("Never guess an address from a pattern"));
  assert(instructions.includes("test first: send at most 50, keep going only if bounces stay under 1%"));
  assert(instructions.includes("GDPR Article 14"));
});

test("Find Leads applies the fixes from its failed 14 October run", () => {
  const instructions = flat(read("skills/lead-list/SKILL.md"));
  // Default titles follow the kind and size of company, and the plan shows them.
  assert(instructions.includes("| Accountants, law firms, agencies and consultancies | Managing Partner, Partner, Director, Owner |"));
  assert(instructions.includes("| Any other company with up to 10 staff | Owner, Founder, Director |"));
  assert(instructions.includes("show the ones you will use in the plan"));
  // Hunter's paid title search runs only after the staff list misses, and only where Hunter knows people.
  assert(instructions.includes("only when the list has no match** and the company search showed Hunter knows named people there"));
  // A poor hit rate pauses the run early.
  assert(instructions.includes("After the first 10 companies you searched for people, count how many gave a ready contact. If fewer than 3 did, pause"));
  // A free redirect check catches merged or acquired firms before money is spent on them.
  assert(instructions.includes("Check the website first (free)"));
  assert(instructions.includes("where it ends up after redirects"));
  // Source URLs are the page the fact came from.
  assert(instructions.includes("never a search-results link such as google.com/search"));
  // The quote follows the new route.
  assert(instructions.includes("$1.76 for 25"));
});

test("both Skills share one people, email and check route, staff list first", () => {
  const titleTable = (text) => text.slice(text.indexOf("| Company | Default titles |"), text.indexOf("If the last row applies"));
  const tables = [];
  for (const id of SKILLS) {
    const manifest = readJson(`skills/${id}/skill.json`);
    const tools = new Map(manifest.dependencies.catalog_tools.map((tool) => [tool.tool_id, tool]));
    for (const toolId of CONTACT_ROUTE) assert(tools.has(toolId), `${id} lacks ${toolId}`);
    // Hunter and LeadMagic are relied on; Findymail rejoins whenever it answers, so it never blocks readiness.
    assert.equal(tools.get("hunter.domain-email-search-flex").required, true);
    assert.equal(tools.get("leadmagic.employee-finder").required, true);
    assert.equal(tools.get("findymail.search-employees").required, false);
    const raw = read(`skills/${id}/SKILL.md`);
    const instructions = flat(raw);
    // The staff list comes first; a paid title search only when it has no match; Findymail last.
    const list = instructions.indexOf("**List the staff (LeadMagic).**");
    const search = instructions.indexOf("**Search by title (Hunter), only when the list has no match");
    const findymail = instructions.indexOf("**Findymail by title, only while it answers,**");
    assert(list > 0 && list < search && search < findymail, `${id} route order`);
    assert(instructions.includes("Find the email for the chosen person only."));
    assert(instructions.includes("A refused call costs nothing: go to the next step at once."));
    assert(instructions.includes("a retry-after time"));
    assert(instructions.includes("Reject anyone whose company domain doesn't match the target company"));
    assert(instructions.includes("the provider is unavailable right now; you were not charged"));
    tables.push(titleTable(raw));
  }
  assert(tables[0].includes("Managing Partner"));
  assert.equal(tables[1], tables[0]);
  const route = (id) => readJson(`skills/${id}/skill.json`).dependencies.catalog_tools.filter((tool) => CONTACT_ROUTE.includes(tool.tool_id));
  assert.deepEqual(route("sales-qualified-accounts"), route("lead-list"));
  assert.equal(route("lead-list")[0].tool_id, "leadmagic.employee-finder");
});

test("both Skills write one CRM-ready column set without tool names", () => {
  const leads = parseCsv(read("skills/lead-list/assets/lead-list-template.csv"));
  const accounts = parseCsv(read("skills/sales-qualified-accounts/assets/qualified-accounts-template.csv"));
  assert.deepEqual(leads[0], LEAD_COLUMNS);
  assert.deepEqual(accounts[0], ACCOUNT_COLUMNS);
  for (const rows of [leads, accounts]) {
    assert(rows.length > 1);
    for (const row of rows) assert.equal(row.length, rows[0].length, row.join(","));
  }
  assert(!/tool|provider/i.test(ACCOUNT_COLUMNS.join(",")));
  assert(flat(read("skills/lead-list/SKILL.md")).includes(`exactly these columns, in this order: ${LEAD_COLUMNS.join(", ")}.`));
  assert(flat(read("skills/sales-qualified-accounts/SKILL.md")).includes(`(${LEAD_COLUMNS.join(", ")}) followed by Why now, Why-now date, Why-now URL and Verdict`));
});

test("one retry rule recovers a lost response without paying twice", () => {
  for (const id of SKILLS) {
    const instructions = flat(read(`skills/${id}/SKILL.md`));
    assert(instructions.includes("read the saved run with `get_run <run_id>`"));
    assert(instructions.includes("rerun the identical command without `--new` (MCP or HTTP: send the same idempotency_key)"));
    assert(instructions.includes("`run_tool ... --new` (MCP or HTTP: a fresh idempotency_key)"));
    assert(instructions.includes("Never start a replacement while a saved run is queued or running"));
    // The contradiction behind the 12 October duplicate charge must not return.
    assert(!instructions.includes("no idempotency key is accepted"));
  }
});

test("results open with a summary and keep run IDs and costs in Details", () => {
  const summaries = {
    "lead-list": "23 of 25 ready · 19 verified · 4 catch-all · $1.41 · 9 min",
    "sales-qualified-accounts": "4 of 10 ready · 3 not yet · 3 skipped · $0.82 · 8 min",
  };
  for (const id of SKILLS) {
    assert(read(`skills/${id}/SKILL.md`).includes(summaries[id]));
    const template = read(`skills/${id}/${RESULT_TEMPLATES[id]}`);
    const details = template.indexOf("\n## Details\n");
    assert(details > 0, `${id} template has no Details section`);
    const firstScreen = template.slice(0, details);
    const lines = firstScreen.split("\n").filter((line) => line.trim() && !line.startsWith("#"));
    // After the short fill-in note, the result starts with its summary line.
    const summary = lines.findIndex((line) => / ready · /.test(line));
    assert(summary >= 0 && summary <= 3, `${id} does not open with its summary`);
    assert(!/run id|receipt|ledger/i.test(firstScreen), `${id} shows bookkeeping before Details`);
    assert(template.slice(details).includes("Run ID"));
  }
});

test("customer-facing text uses plain words and keeps provider details private", () => {
  const files = ["README.md", ".claude-plugin/plugin.json", ".claude-plugin/marketplace.json", "examples/qualified-accounts-verified-excerpt.md"];
  for (const id of SKILLS) {
    files.push(`skills/${id}/SKILL.md`, `skills/${id}/skill.json`);
    for (const asset of readdirSync(join(root, "skills", id, "assets"))) files.push(`skills/${id}/assets/${asset}`);
  }
  const banned = [/examination limit/i, /freshness window/i, /\bbounded\b/i, /evidence-led/i, /qualification proof/i, /\btreg\b/i, /\bquota\b/i, /\bcredits?\b/i];
  for (const file of files) {
    const text = read(file);
    for (const pattern of banned) assert(!pattern.test(text), `${file} uses ${pattern}`);
    // "ledger" may appear only inside a Details appendix.
    const details = text.indexOf("## Details");
    assert(!/\bledger\b/i.test(details >= 0 ? text.slice(0, details) : text), `${file} says "ledger" outside Details`);
  }
  for (const file of ["README.md", ...SKILLS.map((id) => `skills/${id}/skill.json`)]) {
    assert(!/\breceipts?\b/i.test(read(file)), `${file} mentions a receipt on a first screen`);
  }
});

test("the public package includes proof, a template and a Claude marketplace", () => {
  const plugin = readJson(".claude-plugin/plugin.json");
  const marketplace = readJson(".claude-plugin/marketplace.json");
  assert.equal(plugin.name, "sales-prospecting-skills");
  assert.equal(plugin.version, marketplace.plugins[0].version);
  assert.equal(plugin.version, readJson("package.json").version);
  assert.equal(marketplace.plugins[0].source, "./");
  const readme = flat(read("README.md"));
  for (const id of SKILLS) {
    const manifest = readJson(`skills/${id}/skill.json`);
    assert(plugin.description.includes(manifest.title));
    assert(marketplace.plugins[0].description.includes(manifest.title));
    assert(readme.includes(manifest.outcome), `README lacks the ${manifest.title} promise`);
    assert(read(`skills/${id}/${RESULT_TEMPLATES[id]}`).includes("Nothing was sent and nothing was added to your CRM"));
  }
  assert(/not\s+Customer-proven/.test(read("examples/qualified-accounts-verified-excerpt.md")));
});

// The Skills serve anyone who sells to businesses, so their customer-facing text names no audience (18 Oct 2026).
test("summaries name no audience", () => {
  for (const id of SKILLS) {
    const manifest = readJson(`skills/${id}/skill.json`);
    assert(!/founders and small teams/i.test([manifest.summary, manifest.outcome].join(" ")), `${id} names an audience`);
  }
  assert(!/founders and small teams/i.test(read("README.md")), "README names an audience");
});

// A due date remains current through the end of that UTC day.
test("publication rejects invalid and future verification and withholds an overdue review", () => {
  const now = new Date("2026-09-07T23:59:59Z");
  for (const [verified_at, review_due_at, valid, withheld] of [
    ["2026-09-01", "2026-09-07", true, false],
    ["2026-09-01", "2026-09-06", true, true],
    ["2026-09-08", "2026-10-08", false, false],
    ["2026-09-07", "2026-09-01", false, false],
    ["2026-02-30", "2026-10-01", false, false],
  ]) {
    const dir = fixture({ mutateManifest: (manifest) => { manifest.evidence = { verified_at, review_due_at }; } });
    const result = checkRepository(dir, { now });
    assert.equal(result.errors.length === 0, valid, `${verified_at} / ${review_due_at}`);
    assert.equal(result.withheld.some((skill) => skill.id === "fixture-skill" && skill.reason === "review_overdue"), withheld, `withheld ${verified_at} / ${review_due_at}`);
  }
  const aligned = fixture({ mutateManifest: (manifest) => { manifest.category = "search-seo"; } });
  const registry = JSON.parse(readFileSync(join(aligned, "registry.json"), "utf8"));
  registry.repository = "https://github.com/Scrollport/search-seo-skills";
  writeFileSync(join(aligned, "registry.json"), JSON.stringify(registry));
  assert.deepEqual(validateRepository(aligned), []);
  registry.repository = "https://github.com/Scrollport/media-creation-skills";
  writeFileSync(join(aligned, "registry.json"), JSON.stringify(registry));
  assert(validateRepository(aligned).some((error) => error.includes("must match its owning repository")));
  assert(validateRepository(fixture({ mutateManifest: (manifest) => { manifest.category = "seo-search"; } })).length > 0);
});
