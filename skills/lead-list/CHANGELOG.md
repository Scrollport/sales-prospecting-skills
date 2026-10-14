# Changelog

## 2.1.0 — 2026-10-14

Fixes from the paid verification run of 2.0.0 on "UK accounting firms with 10
to 50 staff", which returned only 7 of 25 ready contacts for $2.32: Hunter's
title search found no Founder, CEO or Managing Director at 35 of 42 fitting
firms and charged for every empty search, while the firms' staff lists showed
Partner, Managing Partner, Director and Owner.

- Default titles now follow the kind and size of company and appear in the
  plan: Managing Partner, Partner, Director or Owner at accountants, law firms,
  agencies and consultancies; Owner, Founder or Director up to 10 staff;
  Founder, CEO or Managing Director up to 50; the Head or VP of the relevant
  team above that.
- Cheaper route: list the staff first (LeadMagic, 10 people, or 20 above 50
  staff), pick the best title match locally, then look up and check the email
  for the chosen person only. Hunter's title search runs only when the list has
  no match and Hunter knows named people at the company. A miss moves on to the
  next company; the second email lookup is kept for when fitting companies run
  out.
- Stop-loss: after the first 10 companies, a run with fewer than 3 ready
  contacts pauses, shows what has been spent and the titles the staff lists
  showed, and offers other titles or a smaller batch.
- A free check of where each website redirects leaves out merged or acquired
  firms before any money is spent on them.
- Source URLs are the page the fact came from, never a search-results link.
- When fewer than 10 contacts are ready, the hand-off to Research My Accounts
  passes all of them.
- At prices inspected on 14 October 2026, 25 contacts cost at most $1.76 and
  the 10-contact trial at most $0.71. A contact found on the first try costs
  $0.0335; at an 85% staff-list match and 70% email find per lookup a run
  averages about $0.054 per ready contact, about $1.35 for 25.

## 2.0.0 — 2026-10-14

Renamed **Find Leads**: describe your customer; get 25 decision-makers with
verified work emails and why each company fits.

- Three questions with defaults: who you sell to, which titles (Founder or CEO
  at companies of up to 50 staff, otherwise the Head or VP of the team that
  would use what you sell) and how many contacts (10, 25, 50 or 100; default
  25, one per company), plus an optional skip list. The spend-ceiling question
  is gone: the Skill works out the maximum from the prices it inspects and asks
  for approval once.
- Company fit comes from company data (industry, staff count, location and
  description), not names, with a one-line "why it matched" for every company.
- People search switches route at once when a provider is unavailable: Hunter
  by title first, then LeadMagic with titles filtered by the agent, then
  Findymail whenever it answers. Retry-after times are honoured, a provider
  that refuses twice in a row rests for 10 minutes, and anyone whose company
  domain doesn't match is rejected.
- One retry rule replaces the old preamble: recover a lost response with
  `get_run`, or by rerunning the identical command without `--new`; use
  `--new` only for an intentional repeat.
- Results open with a summary line, then a table and a CRM-ready CSV with new
  columns. Failures come with a priced retry; run IDs and per-call costs move
  to a Details section at the end. Catch-all addresses carry a "test first"
  label, a short note covers email rules in the US, UK, EU and Germany, and the
  result offers to research the top 10 with Research My Accounts.
- Breaking: new title, inputs, CSV columns and route. At prices inspected on
  14 October 2026, 25 contacts cost at most $2.38 and the 10-contact trial at
  most $0.96. The 12 October evidence for 1.0.0 stands until the next
  verification run.

## 1.1.0 — 2026-10-13

- A people search refused because the provider is overloaded or down is retried
  once, then replaced by a title-filtered fallback (`findymail.search-employees`,
  count 1). A refused call is never recorded as "no matching decision-maker".
- The quote counts the dearer people search per company, since a refused call
  is not charged.

## 1.0.0 — 2026-10-12

- First release: profile to companies, one title-matched decision-maker per
  company and a verified work email, with a per-call receipt.
- Cheapest useful step first: one discovery call, people by domain, a cheap
  email finder with a single fallback, then verification.
- Verified on a live run of three UK fintech companies at $0.082900; customer
  proof remains false.
