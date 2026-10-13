# Changelog

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
