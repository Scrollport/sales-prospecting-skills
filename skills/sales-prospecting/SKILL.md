---
name: sales-prospecting
description: Route a sales-prospecting request to the smallest verified Scrollport Skill for evidence-backed account and contact research.
license: MIT
metadata:
  scrollport-status: verified
---

# Sales and prospecting

Route the request by its deliverable, not by broad GTM vocabulary. This router
does not execute research itself and does not turn a research request into
permission to contact anyone or mutate a CRM.

## Route the request

- Use [Sales Qualified Accounts](../sales-qualified-accounts/SKILL.md) when the
  user needs companies matching a narrow ideal-customer profile, one relevant
  current person per accepted company, verified professional work emails and a
  reviewable research receipt.
- The package does not yet have a verified CRM-write function. If the user asks
  to create or update CRM records, complete only the separately requested
  research portion when useful, state that `sales-prospecting-to-crm` remains a
  withheld draft, and stop before any write.
- Outreach copy, sending, campaign sequencing, CRM governance, routing,
  attribution and forecasting are separate outcomes and are not implied by the
  category name.

After choosing the verified function, read its complete `SKILL.md` and follow
its qualification rule, count and spend ceiling, evidence requirements,
approvals, recovery state and acceptance criteria. If it is not present in the
current installation, ask before installing it from this repository and pin
the source revision.
