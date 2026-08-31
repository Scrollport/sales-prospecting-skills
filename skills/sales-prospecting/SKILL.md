---
name: sales-prospecting
description: Route a sales or prospecting request to the verified Scrollport Skill for evidence-backed accounts and verified professional contacts. Use for "build a prospect list," "find ICP-fit companies," "find decision-makers," "verify work emails," "account research," or broad GTM and RevOps requests that need an honest scope check.
license: MIT
metadata:
  scrollport-status: verified
---

# Sales and prospecting

Route the request by its deliverable, not by broad GTM vocabulary. This router
does not execute research itself and does not turn a research request into
permission to contact anyone or mutate a CRM.

Before routing, use any supplied product, positioning, ICP or suppression
brief. If `.agents/product-marketing.md` exists, read it as context; it does not
prove company fit, role currency or buying intent.

## Route the request

- Use [Sales Qualified Accounts](../sales-qualified-accounts/SKILL.md) when the
  user needs companies matching a narrow ideal-customer profile, one relevant
  current person per accepted company, verified professional work emails and a
  reviewable research receipt.
- A supplied-account research pack, existing-list audit or contact-only repair
  is not a verified V1 route. State that boundary instead of forcing it through
  ICP discovery or paying for unnecessary work.
- The package does not yet have a verified CRM-write function. If the user asks
  to create or update CRM records, complete only the separately requested
  research portion when useful, state that `sales-prospecting-to-crm` remains a
  withheld draft, and stop before any write.
- Outreach copy, sending, campaign sequencing, CRM governance, routing,
attribution and forecasting are separate outcomes and are not implied by the
category name.

Return the selected Skill, its exact artifact and the boundary that remains
human-owned. Do not make the user choose between provider names.

After choosing the verified function, read its complete `SKILL.md` and follow
its qualification rule, count and spend ceiling, evidence requirements,
approvals, recovery state and acceptance criteria. If it is not present in the
current installation, ask before installing it from this repository and pin
the source revision.
