# ICP and jobs for Sales and prospecting Skills

Status: maintainer decision record; updated 7 September 2026 for the authorized launch release and 12 October 2026 for the Lead List Skill.

## Primary customer

The initial customer is a RevOps consultant, specialist agency operator or lean
demand-generation, GTM or revenue-team lead who:

- periodically turns an ICP into a small account-and-contact list or audits the
  quality of prospect research;
- can define hard fit criteria, exclusions and an ordered buyer-role list;
- values public evidence, current work-email verification and a reviewable
  receipt more than a large unqualified export;
- has irregular or campaign-sized demand that makes another annual data
  subscription unattractive; and
- can trial one real, non-sensitive segment without procurement.

The initial package is not for high-volume sales-development organisations that
need always-on orchestration, proprietary intent, sequencing, CRM governance,
routing, attribution or forecasting.

## Jobs ranked by value and current evidence

| Rank | Customer job | Required artifact | Coverage | Evidence gate |
| --- | --- | --- | --- | --- |
| 1 | Turn an ICP into accounts and people worth human review | Ranked account-and-contact list with hard-fit evidence, relevant role, verified work email and receipt | Verified: `sales-qualified-accounts` | Latest internal rehearsal: one contactable research lead plus incomplete/rejected records at $0.295100; zero demonstrated-pain buying opportunities |
| 1b | Get a fast list of decision-makers to contact from a one-sentence profile | CSV of companies, one title-matched person each, verified work email and per-call receipt | Verified: `lead-list` | 12 Oct 2026 live run: 3 of 3 decision-makers with verified emails at $0.082900; fit judged from discovery data only |
| 2 | Research a supplied target-account list | Evidence-backed account briefs with current fit and signal observations | Input mode in `sales-qualified-accounts` | Reuse supplied evidence; independent offline holdout checked exclusions, pain and contact-readiness gates |
| 3 | Refresh or repair an existing contact list | Current-role and deliverability audit with accepted, incomplete and invalid rows | Not packaged | Needs privacy-minimised inputs, verification rules and complete rehearsal |
| 4 | Produce a bounded account signal brief | Dated public observations and explicit non-intent language | Not packaged | Needs direct demand and a repeatable decision use |
| 5 | Apply approved research to a CRM | Exact preflight diff and verified destination state | Withheld draft: `sales-prospecting-to-crm` | Every dependency and the complete write route must pass against a dedicated test destination |

## Current bundle decision

The package contains two Verified outcome Skills and no router.
`sales-qualified-accounts` is the evidence-backed path: one request can start
with a supplied list or narrow ICP and end with a review-ready list of
evidence-backed companies, relevant people and verified professional work
emails. `lead-list` is the fast path added on 12 October 2026: a one-sentence
profile, no fit research, one decision-maker per company and a verified work
email with a per-call bill. It qualifies as a separate Skill because its
intake (a profile, not an offer and hard criteria), approval boundary (a small
ceiling, no research spend) and consumer (someone who wants contacts to review
now) differ; each points to the other when the user needs the other job.

Do not split account discovery, fit research and contact verification into thin
endpoint wrappers merely to increase the Skill count. Add a new function only
when the customer can use its artifact independently and it has a different
intake, approval boundary, consumer or cadence.

## Acquisition hypothesis

- **Job promise:** from ICP to evidence-backed accounts and verified contacts.
- **Proof:** source-backed decisions, explicit rejection reasons, current role and contact checks, and exact observed spend; the requested yield is not guaranteed.
- **Low-friction trial:** five requested prospects inside a $0.500000 inspected
  maximum, returning fewer rather than weakening evidence or overspending.
- **Honest boundary:** contact-ready for human review is not buying intent,
  sales qualification or sent outreach.

The campaign may begin only after the public repository, Skill page and proof
route all present the same artifact and boundary. The first useful external
signal is an independent user completing and accepting the list; a star, visit,
install, prompt copy or connection is not outcome proof.

## Reference patterns adopted

The packaging review used `coreyhaines31/marketingskills` as a structural
reference, especially its prospecting Skill's context-first ICP, motion
selection, evidence requirements, confidence labels, output formats, quality
checks and downstream cold-email boundary.

Scrollport deliberately keeps the launch promise narrower and more executable:
the route names exact verified tools, prices every paid step, checkpoints state,
records receipts and has accepted end-to-end evidence. Repository popularity is
distribution evidence, not proof that a workflow produced a valuable customer
result.
