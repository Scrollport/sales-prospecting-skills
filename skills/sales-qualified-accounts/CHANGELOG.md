# Changelog

## 6.1.1 — 2026-10-18

Wording only: the summary no longer names an audience. It starts "Start from
a list of target companies". The workflow, tools, prices and the 14 October
verification are unchanged.

## 6.1.0 — 2026-10-14

Clarifications from the live verification of 6.0.0 on 14 October 2026, and the
new shared people route.

- Company data from a same-day Find Leads hand-off is reused and counts as the
  first of the three sources.
- When the news search shows a relative date such as "3 months ago", the agent
  opens the item to read the exact date.
- An award counts as a why-now only if it is from the last 90 days and relates
  to what the user sells; anniversaries and general rankings don't.
- The quote allows one paid page read per company in case a site blocks the
  agent's own reader.
- A Not yet company with no why-now gets an opening question based on fit.
- A website that now redirects to another company makes the verdict Skip:
  merged or acquired.
- Shares Find Leads 2.1.0's people route: staff list first with titles
  filtered locally, Hunter's title search only when the list has no match,
  then the email for the chosen person only. Default titles follow the kind and
  size of company, and links are the page itself, never a search-results link.
- At prices inspected on 14 October 2026, 10 companies from a longer list cost
  at most $1.60 and the 5-company trial at most $0.83.

## 6.0.0 — 2026-10-14

Renamed **Research My Accounts**: paste companies; learn which to contact now,
why (with dated sources) and whom.

- Researches lists the user supplies only. Finding companies moves to Find
  Leads, and each Skill offers the other as the next step.
- Five plain questions: what you sell, which companies, who buys,
  deal-breakers and how many to research (default 10). The questions about how
  many candidates to examine and how old evidence may be are gone: companies
  skipped early are replaced from the list, up to twice the number asked for,
  and why-now evidence must come from the last 90 days.
- One card per company: Contact now, Not yet or Skip; why now with its date
  and link; fit with a link; who to contact with email status and the date
  checked; and an opening question. A summary line comes first, and the CSV
  uses the Find Leads columns plus Why now, Why-now date, Why-now URL and
  Verdict.
- Fixes the retry guidance. The old preamble said both that no idempotency key
  is accepted and that keys should be kept for retries, which likely led to the
  duplicate paid people search after a client timeout on 12 October. One rule
  replaces it: read a saved run with `get_run`, or rerun the identical command
  without `--new`; use `--new` only for an intentional repeat.
- Faster: up to three companies in parallel with at most three sources each
  (company data, news from the last 90 days and one page of the company's own
  site), about 10 companies in 10 minutes and at most $1.53 at prices inspected
  on 14 October 2026.
- Shares the people, email and check route with Find Leads, including route
  switching when a provider is unavailable. Drops company discovery, the UK
  company register and the second email checker; adds company data, a website
  lookup for names and a role check.
- Breaking: new title, inputs, output and dependencies. The 12 October
  evidence for 5.1.0 stands until the next verification run.

## 5.1.0 — 2026-10-12

- Reach the confirmed buyer when domain search does not: one title-filtered
  people search when sources name nobody, then a person email finder by name
  and domain with one fallback, and a lower-cost verifier. Pattern-guessed
  addresses remain prohibited.
- Reverified after the overdue 7 October review on a UK dental-group brief:
  one contact-ready account, two research-qualified with contacts incomplete
  and one rejected, at $0.468600 including diagnosis.

## 5.0.1 — 2026-09-15

- Point the existing workflow at the preferred published catalog route after duplicate consolidation; preserve its method, budgets and verification dates.

## 4.0.0 — 2026-09-07

- Separate company fit, observed pain/trigger, current decision-maker and contactability.
- Support supplied accounts, parent/buyer resolution, exclusions and useful incomplete results.
- Preserve an explicit demonstrated-pain gate and bounded paid recovery.
- Rehearse on a public payments-business brief; keep customer proof false.

## 3.1.0 — 2026-08-31

- Add context-first ICP intake and discriminating activation phrases.
- Add a reusable account-and-contact artifact template and handoff quality
  checks.
- Keep the verified discovery route, five-prospect cost ceiling and rehearsal
  evidence unchanged.

## 3.0.0 — 2026-08-31

- Move the canonical package into the Sales and prospecting category
  repository.
- Rename the Skill id to `sales-qualified-accounts` and retain the former
  public ids as aliases.
- Keep the verified research workflow, five-prospect starter and approval
  boundaries unchanged.

> Historical through 28 August 2026. The manifest version, Git history and
> GitHub releases are the canonical change record.

## 2.0.0 — 2026-08-28

- Rename the Skill from Qualified Accounts to Contact This Week to Qualified
  Accounts to Contact and retain the former id as an install alias.
- Replace the five-prospect product ceiling with caller-approved target and
  spend inputs, resumable batching and globally deduplicated discovery segments.
- Keep five prospects for $0.50 as the verified trial-safe starter and planning
  example rather than a limit or guaranteed yield.

## 1.0.0 — 2026-08-28

- Promote the candidate after a five-prospect public synthetic rehearsal.
- Add relevant-person and verified-work-email discovery.
- Replace mandatory deep enrichment with bounded public evidence, conditional
  verification and optional official UK identity checks.
- Cap trial-safe research at $0.50 and return fewer results rather than weaken
  evidence or exceed the ceiling.

## 0.1.1 — 2026-08-28

- Adopt the shared Scrollport outcome category and capability-to-tool contract.

## 0.1.0 — 2026-08-27

- Add the Qualified Accounts Weekly candidate and explicit outcome boundary.
- Withhold publication because the discovery route is not reliably bounded or
  relevant enough for the promised shortlist.
