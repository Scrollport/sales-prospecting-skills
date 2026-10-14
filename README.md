# Sales and prospecting Skills

Two Skills for founders and small teams who sell to other businesses. Your
agent runs them through one Scrollport connection and one prepaid wallet: you
approve one maximum price before anything is spent, and you pay only for calls
that complete.

| Skill | What you get | Default run |
| --- | --- | --- |
| [Find Leads](skills/lead-list/SKILL.md) | Describe your customer; get 25 decision-makers with verified work emails and why each company fits. | 25 contacts, at most $2.38 at 14 October 2026 prices, about 10 minutes |
| [Research My Accounts](skills/sales-qualified-accounts/SKILL.md) | Paste companies; learn which to contact now, why (with dated sources) and whom. | 10 companies, at most $1.53, about 10 minutes |

Find Leads ends by offering to research its best 10 with Research My Accounts,
and Research My Accounts offers Find Leads when you want more companies like
your best fits. Both use the same route to find people, look up work emails and
check them, and both write the same CRM-ready CSV columns. A third workflow,
updating existing CRM contacts (`sales-prospecting-to-crm`), is an unpublished
draft and can't be installed.

## What you get back

Every result starts with a short summary, then the list:

```text
23 of 25 ready · 19 verified · 4 catch-all · $1.41 · 9 min
Founders and CEOs at UK accounting firms with 10 to 50 staff, one per firm.
CRM-ready file: find-leads-2026-10-14.csv (23 rows).
2 firms had no Founder or CEO on record.
```

After the summary comes a table (Find Leads) or one card per company (Research
My Accounts), the CSV, anything that couldn't be done with a priced retry, and
a short note on email rules in the US, UK, EU and Germany. Run IDs and the cost
of every call sit in a Details section at the end.

## Proof so far

- **Find Leads** was last verified on 12 October 2026 as Lead List 1.0.0. From
  "UK fintech companies with 11 to 50 employees" it found 3 of 3
  decision-makers with verified work emails for $0.0829
  ([run notes](skills/lead-list/evidence/2026-10-12-verification.md)).
- **Research My Accounts** was last verified on 12 October 2026 as Qualified
  Accounts to Contact 5.1.0. Of four UK dental groups, one was ready to
  contact, two fitted but had no reachable buyer yet and one didn't fit, for
  $0.4686
  ([run notes](skills/sales-qualified-accounts/evidence/2026-10-12-reverification.md);
  [an earlier sample report](examples/qualified-accounts-verified-excerpt.md)).
- Find Leads 2.0.0 and Research My Accounts 6.0.0 change the method, so new
  verification runs are pending.

Neither run shows replies, meetings or revenue, and neither Skill is
Customer-proven yet.

## What these Skills never do

- Send emails or messages, or add anyone to your CRM or a sequence.
- Guess email addresses or use personal ones.
- Spend more than the maximum you approved. A call a provider can't serve is
  not charged.

## Install

Give your agent the package setup prompt from Scrollport to install every
published Skill.

Or add the repository as a Claude Code marketplace and install the package:

```text
/plugin marketplace add Scrollport/sales-prospecting-skills
/plugin install sales-prospecting-skills@scrollport-sales-prospecting
```

For commit-pinned installation, readiness checks and approval boundaries, read
[INSTALL.md](INSTALL.md).

## Bundle decisions

[ICP and jobs](docs/ICP-AND-JOBS.md) records who these Skills are for, which
jobs they cover and what evidence each needs. List repair, standalone signal
briefs and CRM writes stay separate candidates until each has its own useful
result and a complete accepted run.

## Contribute

Published Skills live under `skills/`; unverified work stays under
`candidates/`. Read [the authoring contract](docs/AUTHORING.md),
[contribution guide](CONTRIBUTING.md) and [security policy](SECURITY.md).
