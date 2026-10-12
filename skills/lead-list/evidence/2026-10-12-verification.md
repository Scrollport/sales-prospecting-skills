# Lead List 1.0.0 — live verification

12 October 2026. Verified for a fast, priced lead list. Not Customer-proven, and
not evidence that any listed person needs, wants or can buy anything.

## Brief

Profile "UK fintech companies with 11 to 50 employees"; titles CEO, Founder,
Managing Director, then COO; three companies; $0.25 ceiling. Run through one
authorised Scrollport connection on production build `11f2051`.

## Result

| Step | Result |
| --- | --- |
| Companies discovered | 100 in one call |
| Shortlisted | 3: an insurance-placing platform, an online mortgage broker and a specialist lender |
| People found | 30 (10 per company, with titles) |
| Decision-makers matched | 3: two chief executives and one managing director |
| Work emails found | 3 of 3, on the first, cheaper finder; the fallback was not needed |
| Emails verified | 3 of 3 returned `ok` with `good` quality, each on the company's own domain |
| Settled cost | **$0.082900** for 10 paid calls across 4 providers |

The discovery pool was broad. Alongside fintech and lenders it included trade
associations, charities, publishers, PR agencies and accountants, which is why
the Skill shortlists without paying and says that fit was judged from names
and discovery data.

## Receipt

| Step | Tool | Run ID | USD |
| --- | --- | --- | ---: |
| Find companies | `hunter.discover` | a4eef38b-8359-4b84-97c1-6dd8866905fc | 0.002500 |
| People, company 1 | `leadmagic.employee-finder` | 94f9935e-ed1f-42c3-b93b-da5286f2757d | 0.017500 |
| People, company 2 | `leadmagic.employee-finder` | 24a46b6f-a467-4a71-a7df-55fe1bb88cd7 | 0.017500 |
| People, company 3 | `leadmagic.employee-finder` | eebe02c6-86fb-4a08-a6e7-1a7a95445167 | 0.017500 |
| Work email, company 1 | `quickenrich.people-email-find` | c52522f2-47ac-443d-b41c-21cb16ae057f | 0.006800 |
| Work email, company 2 | `quickenrich.people-email-find` | 3656d438-19d7-4feb-8c6b-265fd7461ebc | 0.006800 |
| Work email, company 3 | `quickenrich.people-email-find` | 727285da-4d55-401a-ab6f-5c3195596491 | 0.006800 |
| Verify, company 1 | `millionverifier.people-email-verify` | 1b7c0e35-6130-45c2-837b-80d6d6908f96 | 0.002500 |
| Verify, company 2 | `millionverifier.people-email-verify` | 4948f437-3c9f-48ff-9e3c-0f647077fd66 | 0.002500 |
| Verify, company 3 | `millionverifier.people-email-verify` | 1ddbc454-a59f-4e25-9147-5c5ce391e2ea | 0.002500 |
| **Total** | | | **0.082900** |

Company names, people's names and email addresses are kept in the private
run results and are excluded from this public note.

## Limits

- One profile and three companies. Yield on other profiles, regions and titles
  is not measured; small companies may have no matching decision-maker.
- A verified address is deliverable today. It does not prove consent, current
  role or that a message will be read.
- An earlier run on 8 October 2026 for a similar profile needed the fallback
  finder for its only matched person: the cheaper finder returned no email and
  the fallback found one, which the fallback reported as valid. That is why the Skill keeps a single
  fallback.
