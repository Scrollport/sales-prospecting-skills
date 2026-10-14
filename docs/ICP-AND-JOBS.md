# ICP and jobs for Sales and prospecting Skills

Status: maintainer decision record; updated 7 September 2026 for the authorized
launch release, 12 October 2026 for the Lead List Skill and 14 October 2026,
when Lead List became Find Leads and Qualified Accounts to Contact became
Research My Accounts.

## Primary customer

The primary customer is a founder or small team selling to other businesses,
alongside the RevOps consultants and specialist agencies who do this work for
them. They:

- regularly need a short list of people to contact, or need to decide which of
  their target companies to approach first;
- can describe their customer in a sentence, name the job titles that buy and
  say what rules a company out;
- value a checked work email, a dated reason to reach out and a clear price
  more than a large unchecked export;
- have irregular or campaign-sized demand that makes another annual data
  subscription unattractive; and
- can trial one real, non-sensitive segment without procurement.

The package is not for high-volume sales-development organisations that need
always-on orchestration, proprietary intent, sequencing, CRM governance,
routing, attribution or forecasting.

## Jobs ranked by value and current evidence

| Rank | Customer job | Result the customer gets | Coverage | Evidence |
| --- | --- | --- | --- | --- |
| 1 | Turn a description of my customer into people to contact | One decision-maker per company with a work email checked the same day and why the company fits, as a table and a CRM-ready CSV | Verified: `lead-list` (Find Leads) | 12 Oct 2026 run of Lead List 1.0.0: 3 of 3 decision-makers with verified emails at $0.082900. The 14 Oct run of 2.0.0 failed with 7 of 25 ready at $2.32, because its default titles did not fit accounting firms; verification of 2.1.0 is pending |
| 2 | Decide which of my target companies to contact now, why and whom | One card per company: Contact now, Not yet or Skip, dated why-now, fit, contact and opening question, plus the same CSV | Verified: `sales-qualified-accounts` (Research My Accounts) | 14 Oct 2026 verification of 6.0.0 on seven firms handed over by Find Leads: 1 Contact now, 5 Not yet and 1 Skip at $0.020800. Its people and email steps were last checked live on 12 Oct 2026 (5.1.0) |
| 3 | Refresh or repair an existing contact list | Current role and deliverability check with accepted, incomplete and invalid rows | Not packaged | Needs privacy-minimised inputs, verification rules and a complete rehearsal |
| 4 | Watch accounts for reasons to reach out | Dated public events per account, repeated on a schedule | Partly covered by the why-now step of Research My Accounts | Needs direct demand and a repeatable decision use |
| 5 | Apply approved research to a CRM | Exact preflight diff and verified destination state | Withheld draft: `sales-prospecting-to-crm` | Every dependency and the complete write route must pass against a dedicated test destination |

## Current bundle decision

The package contains two Verified outcome Skills and no router. Find Leads
(`lead-list`) starts from a one-sentence description and returns
decision-makers with checked work emails and why each company fits. Research My
Accounts (`sales-qualified-accounts`) starts from companies the user supplies
and returns which to contact now, why, with dated sources, and whom.

On 14 October 2026 finding companies moved entirely to Find Leads: Research My
Accounts no longer discovers companies, and each Skill offers the other as the
next step. Both share one people, email and check route and one CSV column set,
so a contact found by one is reused by the other rather than paid for twice.
They remain separate Skills because their intake (a description versus a list),
their result (contacts versus verdicts) and the decision they support differ.

Do not split company discovery, fit research and contact checking into thin
endpoint wrappers merely to increase the Skill count. Add a new Skill only when
the customer can use its result on its own and it has a different intake,
approval, consumer or cadence.

## Acquisition hypothesis

- **Job promise:** Find Leads: describe your customer; get 25 decision-makers
  with verified work emails and why each company fits. Research My Accounts:
  paste companies; learn which to contact now, why (with dated sources) and
  whom.
- **Proof:** a why-it-matched line for every company, dated and linked why-now
  evidence, same-day email checks and the exact amount spent; the requested
  number is not guaranteed.
- **Low-friction trial:** 10 Find Leads contacts for at most $0.71, or 5
  Research My Accounts companies for at most $0.83, at prices inspected on
  14 October 2026.
- **Honest boundary:** a checked email and a reason to reach out now are not
  buying intent or sent outreach.

The campaign may begin only after the public repository, Skill page and proof
route all present the same result and boundary. The first useful external
signal is an independent user completing and accepting a list; a star, visit,
install, prompt copy or connection is not outcome proof.

## Reference patterns adopted

The packaging review used `coreyhaines31/marketingskills` as a structural
reference, especially its prospecting Skill's context-first ICP, motion
selection, evidence requirements, confidence labels, output formats, quality
checks and downstream cold-email boundary.

Scrollport deliberately keeps the launch promise narrower and more executable:
the route names exact verified tools, prices every paid step, checkpoints state,
records the cost of every call and has accepted end-to-end evidence. Repository
popularity is distribution evidence, not proof that a workflow produced a
valuable customer result.
