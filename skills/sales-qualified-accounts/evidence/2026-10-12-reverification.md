# Qualified Accounts to Contact 5.1.0 — review and reverification

12 October 2026. The 7 October review was overdue, so the Skill was rehearsed
again before any release. Verified for bounded account research and
professional-contact checking; not Customer-proven, and not evidence of
purchase intent.

## Brief

A public, synthetic brief: an accounts-payable automation offer for multi-site
operators, looking for UK dental practice groups with 5 to 50 practices. Buyer
roles in order: Finance Director or CFO, Head of Finance, then COO or
Operations Director. Target two accepted accounts. No demonstrated-pain gate.
Run through one authorised Scrollport connection on production build
`11f2051`.

## What the first pass found

The 5.0.1 route examined four groups from a 100-candidate discovery pool:

- **Group 1 rejected.** Its own website states more than 60 practices, above
  the size limit.
- **Groups 2, 3 and 4 research-qualified.**
  - Group 2's own team page states about 16 practices; group 3's states 15;
    group 4's states more than 30.
  - Groups 2 and 3 have active UK companies at Companies House.
- **None contact-ready.** At all three groups, Hunter domain search returned
  only finance staff (management accountants) or executives outside the buyer
  roles (marketing, chairman, a generic director). An untitled people list from
  another provider did not reach leadership either: these groups have large
  clinical staff.
- **The gap.** Group 2's own leadership page names its Financial Director, but
  the Skill had no step to find that person's work address. Group 4's Finance
  Director is mentioned only in public posts.

## Fix in 5.1.0

When no source names a current approved-role person, run one title-filtered
people search at the domain. When domain search lacks the confirmed person's
address, look the person up once by name and domain with a person email finder,
with one fallback finder. Verify with a lower-cost checker. Inferring an
address from a pattern remains prohibited.

## Result with the fix

The retained fit evidence was reused and only the contact steps were run.

| Group | Decision |
| --- | --- |
| 1 | Rejected: above the size limit |
| 2 | **Contact-ready.** The Financial Director is named on the group's own leadership page. The first email finder had no match; the fallback returned an address on the company domain; independent verification returned `ok`, quality `good` |
| 3 | Research-qualified, contact incomplete. Two title-filtered searches returned nobody holding a buyer role |
| 4 | Research-qualified, contact incomplete. The title-filtered search returned a director of a recruitment arm, not a buyer role, and it was not accepted |

One of the two requested accounts is contact-ready. The Skill returned fewer
rows rather than accepting a non-buyer executive or a guessed address.

## Receipt

Settled cost **$0.468600**, including the diagnosis calls. One title-filtered
search was run twice: a local client timeout killed the waiting process after
the run had started, and the retry was not deduplicated. The duplicate
($0.027800) is listed.

| Purpose | Tool | Run ID | USD |
| --- | --- | --- | ---: |
| Finite candidate pool | `hunter.discover` | 1761c4e1-d6df-4df5-89b3-cf1fce950648 | 0.002500 |
| Size check, group 1 | `serper.google-search` | eba1ed8a-997d-4874-bdd4-00d90adc2e80 | 0.002500 |
| Fit and buyer search, group 2 | `serper.google-search` | b2d21634-98e8-413a-8a6c-00d18ff6e75d | 0.002500 |
| First-party leadership page, group 2 | `brightdata.web-scrape` | cfabdf85-1f22-4920-a465-4030ccd1a304 | 0.003300 |
| UK legal identity, group 2 | `companies-house.company-search` | a59ecffb-c497-4c6d-96ed-bd8ad29e4bd6 | 0.005000 |
| Domain search, finance department, group 2 | `hunter.domain-email-search-flex` | 44665abb-b85d-446d-b117-6293ac5c2f29 | 0.033500 |
| Domain search, executives, group 2 | `hunter.domain-email-search-flex` | 5aee0c45-c8f0-4c11-badf-3c53dcdb3c97 | 0.033500 |
| Fit and buyer search, group 3 | `serper.google-search` | c3fe3688-a9c2-4d61-82e6-d88f05bd055c | 0.002500 |
| First-party size evidence, group 3 | `brightdata.web-scrape` | 9c35f78f-df17-47b9-b2f0-2a49c429d55c | 0.003300 |
| Domain search, finance department, group 3 (empty) | `hunter.domain-email-search-flex` | e3274feb-2910-4952-94de-7d9cc6a28b6e | 0.033500 |
| UK legal identity, group 3 | `companies-house.company-search` | 5509ad82-142c-4053-97a6-1afae799f7fc | 0.005000 |
| Domain search, executives, group 3 | `hunter.domain-email-search-flex` | 44c54c94-4a63-4fae-a450-dd7d071783cd | 0.033500 |
| Fit and buyer search, group 4 | `serper.google-search` | effd026e-d123-4fa2-909a-37b4cf0f4d5a | 0.002500 |
| First-party size evidence, group 4 | `brightdata.web-scrape` | 41d61863-f368-43f0-9975-1c093218a7d7 | 0.003300 |
| Domain search, finance department, group 4 | `hunter.domain-email-search-flex` | 16104009-5687-4670-8697-f32d351e226d | 0.033500 |
| Domain search, approved titles, group 4 (empty) | `hunter.domain-email-search-flex` | 32fcf3d1-8a4f-44b9-b47a-dd49204ddd5d | 0.033500 |
| Search for a further candidate (not pursued) | `serper.google-search` | 7adfbff9-013e-480a-985b-eb7bdf73d566 | 0.002500 |
| Untitled people list, group 2 (diagnosis) | `leadmagic.employee-finder` | 57fce93d-77d9-45af-b8d1-b25e64724149 | 0.035000 |
| Untitled people list, group 3 (diagnosis) | `leadmagic.employee-finder` | d2e8563e-5938-401c-9cc4-b227c88cdc5d | 0.035000 |
| Untitled people list, group 4 (diagnosis) | `leadmagic.employee-finder` | f5220886-c08a-4e3a-ac3e-ccabd5c846e3 | 0.035000 |
| Person email finder, group 2 (no match) | `quickenrich.people-email-find` | 3b2708dd-4aee-471b-bbf0-e947bcaf3a03 | 0.006800 |
| Fallback email finder, group 2 | `leadmagic.people-email-find` | 8c4f20d7-834e-4204-b73b-faf5b9bb8588 | 0.035000 |
| Verification, group 2 | `millionverifier.people-email-verify` | 04020dd9-38f7-4e4d-a187-5e28986a171a | 0.002500 |
| Title-filtered people search, group 4 | `findymail.search-employees` | b4fd2c86-cf28-4f6e-baee-9156ac6e98b2 | 0.027800 |
| Title-filtered people search, group 3 (empty) | `findymail.search-employees` | 190fb09e-c0ad-417f-b245-3e2d896f929f | 0.027800 |
| Duplicate of the previous call after a local client timeout (empty) | `findymail.search-employees` | ade02df5-826e-45a1-ba35-a94fed84d613 | 0.027800 |
| **Total** | | | **0.468600** |

Company names, people's names and addresses are kept in the private run
results and excluded from this public note.

## Limits

- One vertical and four accounts. Contact coverage for finance leaders at
  clinical groups is thin across the providers tried; yield in other verticals
  is not measured.
- A verified address is deliverable today. It does not prove consent, current
  role or buying authority.
