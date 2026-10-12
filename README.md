# Sales and prospecting Skills

Turn a narrow ideal-customer profile into evidence-backed accounts and verified
professional contacts without buying another prospecting subscription or
accepting a black-box lead list.

This package is for RevOps consultants, specialist agencies and lean
demand-generation, GTM or revenue teams that need a small, reviewable research
deliverable. Scrollport supplies current metered tools through one connection
and wallet; the Skill keeps company fit, contact evidence, spend and uncertainty
inspectable.

## Start with the outcome

| If you need to... | Use | Finished artifact |
| --- | --- | --- |
| Get a fast list of decision-makers and verified work emails from a one-sentence profile | [`lead-list`](skills/lead-list/SKILL.md) | CSV of companies, one decision-maker each and a verified work email, with the bill per call |
| Move from ICP to companies, relevant people and verified work emails | [`sales-qualified-accounts`](skills/sales-qualified-accounts/SKILL.md) | Ranked, human-review-ready account-and-contact list |
| Research and mutate existing CRM contacts | `sales-prospecting-to-crm` is a withheld draft and is not installable | None until the write path is verified |

The repository deliberately does not imply autonomous outreach, buying intent,
sales qualification, CRM governance or broad revenue operations.

## Inspect the proof before installing

- **Lead List**, [12 October 2026 live run](skills/lead-list/evidence/2026-10-12-verification.md):
  - 100 UK fintech companies, 30 people and 3 decision-makers.
  - 3 of 3 work emails found and verified.
  - $0.082900 for 10 paid calls.
  - Fit is judged from discovery data only.
- **Qualified Accounts to Contact**, [12 October 2026 reverification](skills/sales-qualified-accounts/evidence/2026-10-12-reverification.md):
  - A UK dental-group brief returned one contact-ready account, two research-qualified accounts with contacts incomplete, and one rejection.
  - $0.468600, including diagnosis of a contact-route gap that 5.1.0 fixes.
  - [The earlier five-prospect excerpt](examples/qualified-accounts-verified-excerpt.md) shows the full report format.

Neither run proves reply quality, pipeline, revenue or Customer-proven status.

## Why this package is different

- **Evidence before volume:** every hard fit claim retains a source; weak rows
  remain incomplete or rejected.
- **Relevant people, not email dumps:** one current approved buyer role and one
  verified professional work email are selected per accepted company.
- **Caller-controlled scale and spend:** the target, batch plan, candidate limit
  and maximum are approved before execution.
- **Safe recovery:** agents checkpoint run ids, deduplicate globally and reuse
  successful paid results.
- **Research only:** no send, CRM write or consequential claim about a person is
  hidden inside the workflow.

## Install

Give your agent the package setup prompt from Scrollport to install every
published outcome Skill.

Or add the repository as a Claude Code marketplace and install the package:

```text
/plugin marketplace add Scrollport/sales-prospecting-skills
/plugin install sales-prospecting-skills@scrollport-sales-prospecting
```

For commit-pinned installation, readiness checks and approval boundaries, read
[INSTALL.md](INSTALL.md).

## Bundle decisions

[ICP and jobs](docs/ICP-AND-JOBS.md) records the customer, job ranking, current
coverage and evidence gates that determine what belongs here. Supplied-account
research, list repair, signal briefs and CRM writes remain separate candidates
until each has its own valuable artifact and accepted complete rehearsal.

## Contribute

Published Skills live under `skills/`; unverified work stays under
`candidates/`. Read [the authoring contract](docs/AUTHORING.md),
[contribution guide](CONTRIBUTING.md) and [security policy](SECURITY.md).
