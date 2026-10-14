# Research My Accounts 6.1.0 — review and reverification

14 October 2026. 6.1.0 keeps the method verified on 6.0.0 earlier the same day
and changes how people are found: the staff list comes first and the title
search runs only when the list has no match. This run tested that route on a
plain list with no contacts. Verified for account research and
professional-contact checking; not Customer-proven, and not evidence of
purchase intent.

## Brief

Three UK accounting firms, given as names and websites only. All three fit but
had no ready contact in the earlier Find Leads 2.0.0 run, and none was touched
by the Find Leads 2.1.0 run. Offer: bookkeeping automation for small
accounting firms; deal-breaker "fewer than 10 staff"; the default titles for
accountants (Managing Partner, Partner, Director or Owner); research 3. Quoted
maximum $0.43. Run through one authorised Scrollport connection with CLI 0.5.3.

## Result

Summary line: `0 of 3 ready · 3 not yet · 0 skipped · $0.13 · 2 min`.

| Firm | Verdict | People route |
| --- | --- | --- |
| 1 | Not yet | The staff list had no wanted title, so the title search ran and found a Director with the address and the firm's own page; check `ok` |
| 2 | Not yet | Audit Partner from the staff list; email found on the first lookup; check `ok` |
| 3 | Not yet | Audit Partner from the staff list; email found on the first lookup; check `ok` |

All three fit (22 to 40 staff, UK) and none redirects to another firm. None had
dated news in the last 90 days: the news search found nothing for two and one
item from 2016 for the third, and their own pages showed advice articles only.
Firm 1's company data described it as a creative services company; its own
site says chartered accountants, and fit was judged from the site.

## Checks

| Check | Result |
| --- | --- |
| No company uses more than three sources | Pass: company data, one news search and one own-site page each |
| Each Contact now card has a dated, linked why-now naming the company, or the verdict is correctly Not yet or Skip | Pass: no dated event in the last 90 days, so all three are Not yet with a fit-based question |
| People found staff list first, with emails verified or a stated reason | Pass: two from the staff list, one from the title search after an empty list; three `ok` |
| CSV has the 18 documented columns; summary first | Pass |
| Duplicate paid runs | None: 15 runs, 15 distinct run IDs |

## Receipt

Settled cost **$0.134700** for 15 paid calls across 5 providers.

| Purpose | Tool | Run ID | USD |
| --- | --- | --- | ---: |
| Company data, firm 1 | `hunter.companies-enrich` | c143ce8a-2163-409e-8d72-5f257852bf3e | 0.006700 |
| News, firm 1 | `serper.google-search` | df7fcd54-a989-4731-878e-cac2c9fcc7a4 | 0.002500 |
| Company data, firm 2 | `hunter.companies-enrich` | c69a493e-0423-4bd3-85bb-d3288e490445 | 0.006700 |
| News, firm 2 | `serper.google-search` | 5f5bab98-abd3-4296-a78f-bc5a875aa382 | 0.002500 |
| Company data, firm 3 | `hunter.companies-enrich` | 91959702-2930-47ec-a9cc-aaf7501bb385 | 0.006700 |
| News, firm 3 | `serper.google-search` | 8340543c-8fc6-4cc0-817f-6fa38f7cdaa9 | 0.002500 |
| Staff list, firm 2 | `leadmagic.employee-finder` | 37c63226-96da-4d21-aa13-f8f85f73c46b | 0.017500 |
| Staff list, firm 1 | `leadmagic.employee-finder` | 4ac487eb-b35a-4e93-9940-3470a063880b | 0.017500 |
| Staff list, firm 3 | `leadmagic.employee-finder` | 73cea486-0130-4791-8022-a1ee1e7965e7 | 0.017500 |
| Email lookup, firm 2 | `quickenrich.people-email-find` | 0c95d615-ebee-4a84-a2b1-a346508e5690 | 0.006800 |
| Title search, firm 1 | `hunter.domain-email-search-flex` | 0d173f76-7410-492d-a809-abcc204d9978 | 0.033500 |
| Email lookup, firm 3 | `quickenrich.people-email-find` | 2c314016-8de1-41d1-a4a4-8d399431fca3 | 0.006800 |
| Email check, firm 2 | `millionverifier.people-email-verify` | b25976e1-2db5-4596-835e-8cff42129894 | 0.002500 |
| Email check, firm 1 | `millionverifier.people-email-verify` | 210ffd16-675c-4fde-ab34-c55e008a061e | 0.002500 |
| Email check, firm 3 | `millionverifier.people-email-verify` | d3069003-c045-4b09-a2de-ca3a9aaabdd8 | 0.002500 |
| **Total** | | | **0.134700** |

Company names, people's names and addresses are kept in the private run
results and are excluded from this public note.

## Limits

- Three firms. No firm reached Contact now, so the why-now step was exercised
  only in the 6.0.0 run earlier the same day (one Contact now with a dated
  article that names the firm).
- The news search ran with the firm's website in the query because the city
  was not known until company data returned. That found little; the city may
  find more.
- A verified address is deliverable today. It does not prove consent, current
  role or buying authority.
