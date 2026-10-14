# Find Leads 2.1.0 — live verification

14 October 2026. Verified for a 25-contact list built from one sentence:
decision-makers at matching firms, each with a work email checked the same day
and a reason the firm fits. Not Customer-proven, and not evidence that any
listed person needs, wants or can buy anything.

## Brief

The brief that 2.0.0 failed earlier the same day (7 of 25 ready for $2.32):
bookkeeping automation software sold to "UK accounting firms with 10 to 50
staff"; the default titles for accountants, Managing Partner, Partner,
Director or Owner; 25 contacts; no skip list. Quoted maximum $1.76. Run as a
fresh customer's agent would, through one authorised Scrollport connection
with CLI 0.5.3; the company search and 31 company checks repeated identical
calls from the 2.0.0 run, so they were sent as intentional new runs.

## Result

| Step | Result |
| --- | --- |
| Companies discovered | 100 in one search, the same pool as the 2.0.0 run |
| Website check (free) | 4 of the 39 firms checked had moved to a new domain of the same firm and were checked there; the firm that now redirects to another firm was never reached |
| Fit | 39 checked, 32 fit; 7 left out for size, location, being a professional body or being an insolvency or recovery practice |
| Stop-loss after 10 firms searched | 7 ready, so the run did not pause |
| People | 30 firms searched; wanted titles at 28; 16 contacts came from the staff list and 9 from the title search used where the list had no match |
| Ready | **25 of 25**, all `ok` with quality `good`, each on the firm's own domain |
| Sources | Profile pages for staff-list contacts and the firm's own or other pages for title-search contacts; none is a search-results link |
| Settled cost | **$1.418500** for 128 paid calls across 4 providers, against a maximum of $1.76 |
| Time | 9 minutes from the first paid call to the hand-over |

Summary line: `25 of 25 ready · 25 verified · 0 catch-all · $1.42 · 9 min`.

## Checks

| Check | Result |
| --- | --- |
| At least 20 of 25 ready | Pass: 25 |
| Total spend at most $1.50 | Pass: $1.418500 |
| No Source URL is a search-results link | Pass |
| No firm whose website redirects to another firm | Pass. Two included firms moved to a new domain of the same firm; their addresses are on the old domains, which still forward to the firm |
| Every row has a wanted title, an email on the firm's domain, a check dated today, a source and a why-it-matched line from company data | Pass. Two titles are functional directors (Client Service Director, Director of Business Development) |
| No firm twice; no paid run duplicated | Pass: 128 runs, 128 distinct run IDs |
| Summary counts match the rows; run IDs only in Details | Pass |

## Receipt

| Step | Tool | Run ID | USD |
| --- | --- | --- | ---: |
| Find companies (repeat of 2.0.0 run) | `hunter.discover` | 87f21d53-3be1-42df-9828-c468be2d4a82 | 0.002500 |
| Company data, firm 1 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 462cee25-7225-4fef-ba43-e6638ff24b30 | 0.006700 |
| Company data, firm 2 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 0339ca68-783e-449e-a19a-7aa710a445cd | 0.006700 |
| Company data, firm 3 (repeat of 2.0.0 run) | `hunter.companies-enrich` | ec03f500-09e8-464c-b4e5-5a9fe18073d3 | 0.006700 |
| Company data, firm 4 (repeat of 2.0.0 run) | `hunter.companies-enrich` | d48e1b62-7d1d-4585-99aa-c2ff34ab0ae7 | 0.006700 |
| Company data, firm 5 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 2c0f1f4f-d666-4afc-b3da-6b8f046aaf7b | 0.006700 |
| Staff list, firm 3 | `leadmagic.employee-finder` | 0d748d9d-c75c-4589-9d34-e921856d432b | 0.017500 |
| Staff list, firm 5 | `leadmagic.employee-finder` | 07e3b6bc-e682-4d0d-bd90-f720a35f1c59 | 0.017500 |
| Company data, firm 6 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 27211ab0-bf91-4ffc-b15c-586671d13d41 | 0.006700 |
| Staff list, firm 1 | `leadmagic.employee-finder` | 3fccc4ba-4991-401d-9f41-40633ba6b742 | 0.017500 |
| Staff list, firm 4 | `leadmagic.employee-finder` | 9eaa9e2f-ec41-47a3-aa74-03094979f7f1 | 0.017500 |
| Email lookup, firm 3 | `quickenrich.people-email-find` | d65ab270-bd7e-4b8f-978c-78db50e28c64 | 0.006800 |
| Title search, firm 5 | `hunter.domain-email-search-flex` | 180204b1-76f1-4401-965d-41fd667e6e26 | 0.033500 |
| Title search, firm 1 | `hunter.domain-email-search-flex` | e7ef2a1d-bcb3-4a78-9da6-1cbb9511010b | 0.033500 |
| Staff list, firm 6 | `leadmagic.employee-finder` | b02a7348-6b36-447e-97ba-5991d57ecea0 | 0.017500 |
| Email lookup, firm 3 | `quickenrich.people-email-find` | d115697c-7247-4f12-b597-040d8a926a6f | 0.006800 |
| Email lookup, firm 4 | `quickenrich.people-email-find` | f997af8e-2e58-4567-a8c5-4669c17c9994 | 0.006800 |
| Email check, firm 5 | `millionverifier.people-email-verify` | f954ed40-1344-4b44-9098-814e8ace8bfa | 0.002500 |
| Email check, firm 1 | `millionverifier.people-email-verify` | f120994c-dbee-4be1-b988-ed6e0328c0b1 | 0.002500 |
| Company data, firm 7 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 0e933cc6-c71f-4649-afd9-c7a780edf4a3 | 0.006700 |
| Title search, firm 6 | `hunter.domain-email-search-flex` | 2b727007-03e6-449c-9ae5-2642637d5763 | 0.033500 |
| Email check, firm 4 | `millionverifier.people-email-verify` | e3b030c1-678a-4731-9565-2e00004ab2dc | 0.002500 |
| Company data, firm 8 (repeat of 2.0.0 run) | `hunter.companies-enrich` | eedfcccf-32b2-4f50-a86b-a46040f363e8 | 0.006700 |
| Company data, firm 9 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 8c21b37a-6b69-4392-b1a5-dffd5ca6cf97 | 0.006700 |
| Staff list, firm 7 | `leadmagic.employee-finder` | 12a93cbf-9d56-4012-846b-7de92a35d865 | 0.017500 |
| Email check, firm 6 | `millionverifier.people-email-verify` | 09b0ba94-0fdd-48b4-8520-5b5a1e255deb | 0.002500 |
| Staff list, firm 8 | `leadmagic.employee-finder` | a7095d37-3af9-4128-bf3c-b1ed17bc3dde | 0.017500 |
| Company data, firm 10 | `hunter.companies-enrich` | 089ee7f9-bbf3-4228-9a52-03c458a1e876 | 0.006700 |
| Email lookup, firm 7 | `quickenrich.people-email-find` | 540aa0a6-1f12-4e3c-9f86-0494716a228a | 0.006800 |
| Staff list, firm 9 | `leadmagic.employee-finder` | ef4661dd-d8bf-4d5d-a7a9-0237d89272b3 | 0.017500 |
| Company data, firm 11 (repeat of 2.0.0 run) | `hunter.companies-enrich` | ad4c3ac1-c404-4f02-8b67-283879028fe4 | 0.006700 |
| Title search, firm 8 | `hunter.domain-email-search-flex` | df20dfcb-e0dd-4f77-beb9-e28311f55bf8 | 0.033500 |
| Email lookup, firm 7 | `quickenrich.people-email-find` | 4ad00299-8800-4395-9ba2-827db857ecd4 | 0.006800 |
| Company data, firm 12 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 6565ea91-84fd-42e1-bd39-d39e454f9c41 | 0.006700 |
| Email lookup, firm 9 | `quickenrich.people-email-find` | 9331b9d3-4263-424e-a292-4d44ae241677 | 0.006800 |
| Staff list, firm 11 | `leadmagic.employee-finder` | 81d24acc-d8c8-4e39-bcf7-63e0869c8b46 | 0.017500 |
| Company data, firm 13 | `hunter.companies-enrich` | 883043fb-f031-47df-bc4a-f6c173fcb96c | 0.006700 |
| Company data, firm 14 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 638c6326-1f04-403c-9c78-c7c727a3ebe0 | 0.006700 |
| Email check, firm 9 | `millionverifier.people-email-verify` | 6e3f0eb9-6d81-42e2-8120-39557f4557fe | 0.002500 |
| Staff list, firm 12 | `leadmagic.employee-finder` | a67ccbed-c38f-4a24-aacf-11e05f2d3f35 | 0.017500 |
| Title search, firm 11 | `hunter.domain-email-search-flex` | 1ccfd0d9-1b9d-4d7c-bcac-0cad85540d19 | 0.033500 |
| Email lookup, firm 12 | `quickenrich.people-email-find` | 2764981d-7e4e-4634-ab6e-a5583f969d32 | 0.006800 |
| Email check, firm 11 | `millionverifier.people-email-verify` | 9253c4c8-5367-4c8a-9e8d-aef85e1eeec7 | 0.002500 |
| Email check, firm 12 | `millionverifier.people-email-verify` | 0a9deda1-2e0b-4b54-9aa1-7a24c45e6968 | 0.002500 |
| Staff list, firm 13 | `leadmagic.employee-finder` | 6c01d2bd-3ae7-427d-8cb8-b27fe7090806 | 0.017500 |
| Staff list, firm 14 | `leadmagic.employee-finder` | fbb23abe-096e-4682-adb2-72b67c2b8486 | 0.017500 |
| Company data, firm 15 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 1223c86c-483e-424c-9464-14f011c82dd4 | 0.006700 |
| Company data, firm 16 | `hunter.companies-enrich` | 7e3d08c5-53d9-4059-9576-396f52179ec9 | 0.006700 |
| Company data, firm 17 | `hunter.companies-enrich` | 46851f37-053f-4d04-a18b-9d4ae21054e6 | 0.006700 |
| Title search, firm 13 | `hunter.domain-email-search-flex` | c0df33d7-bb98-460a-96f5-b290eb6f00de | 0.033500 |
| Staff list, firm 16 | `leadmagic.employee-finder` | 2ab1a73d-dc5b-4d42-836f-455f867f5b6a | 0.017500 |
| Staff list, firm 17 | `leadmagic.employee-finder` | bd7850c5-b2d1-46be-80de-1b9d296b8333 | 0.017500 |
| Email lookup, firm 14 | `quickenrich.people-email-find` | 5463d82c-5c47-435a-8c0b-bad305dbf8bf | 0.006800 |
| Staff list, firm 15 | `leadmagic.employee-finder` | dbf49c26-c587-4090-b425-19939a423a3c | 0.017500 |
| Company data, firm 18 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 8bb86938-1fe4-4f56-9621-21eb0cb22850 | 0.006700 |
| Email lookup, firm 16 | `quickenrich.people-email-find` | 63e051e1-d1e1-4cfe-bc81-e819599ffbf0 | 0.006800 |
| Email lookup, firm 17 | `quickenrich.people-email-find` | ebc95ace-7cee-43b6-aa2d-6986b3606c27 | 0.006800 |
| Email check, firm 14 | `millionverifier.people-email-verify` | 653ea415-b6cb-463d-8364-a95ca66b4f69 | 0.002500 |
| Email lookup, firm 15 | `quickenrich.people-email-find` | e01ba1da-f1b8-496f-98ee-24a7200c8344 | 0.006800 |
| Company data, firm 19 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 4e1cc8ad-528a-4b1b-941d-b4ea6be681b2 | 0.006700 |
| Email check, firm 16 | `millionverifier.people-email-verify` | 7c611a8f-2e7b-49e9-bec9-7a8789cad56a | 0.002500 |
| Email check, firm 17 | `millionverifier.people-email-verify` | dc7a7963-5577-4816-8faa-f6edd6cff33b | 0.002500 |
| Company data, firm 20 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 66373450-3325-4341-8599-42b1620dcf46 | 0.006700 |
| Email check, firm 15 | `millionverifier.people-email-verify` | df805e5e-452a-403f-a298-fd8d3ef1f9a7 | 0.002500 |
| Company data, firm 21 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 3cc4939e-4542-463c-9111-ccda635c748d | 0.006700 |
| Company data, firm 22 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 897fdaeb-9df1-48a6-88b3-26790d7585be | 0.006700 |
| Staff list, firm 19 | `leadmagic.employee-finder` | 8cd8ce67-7f1d-4d5f-bbb9-65f9555fb01d | 0.017500 |
| Company data, firm 23 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 5591f69f-8d4f-4df2-ae84-33c181124cbf | 0.006700 |
| Staff list, firm 20 | `leadmagic.employee-finder` | 77562e6d-c786-4080-9582-54634fd7d6ef | 0.017500 |
| Staff list, firm 21 | `leadmagic.employee-finder` | e8e00771-6bd6-43df-86f9-053de4e35b17 | 0.017500 |
| Staff list, firm 22 | `leadmagic.employee-finder` | 44ff27c6-7959-4975-9f1c-f7207bc15f7b | 0.017500 |
| Email lookup, firm 19 | `quickenrich.people-email-find` | 02098cba-8f26-4d26-952d-c43d0c9bd464 | 0.006800 |
| Email lookup, firm 20 | `quickenrich.people-email-find` | dd8502d3-5ab5-4757-9dfe-27730a7ae946 | 0.006800 |
| Staff list, firm 23 | `leadmagic.employee-finder` | cb195640-0a93-45b1-ace6-b823167f80e7 | 0.017500 |
| Title search, firm 21 | `hunter.domain-email-search-flex` | 8d15dcc4-e134-4e97-89b5-2edd9cca15b6 | 0.033500 |
| Title search, firm 22 | `hunter.domain-email-search-flex` | a3d3481b-1c70-414e-902e-395cd9868274 | 0.033500 |
| Email check, firm 19 | `millionverifier.people-email-verify` | f56df996-25ba-4591-92f1-d1cbe821e6d6 | 0.002500 |
| Email check, firm 20 | `millionverifier.people-email-verify` | ded18dfb-1b9b-43f4-a3ef-6ecc5a53ac1e | 0.002500 |
| Title search, firm 23 | `hunter.domain-email-search-flex` | 58c2d804-c6fa-4d91-8cdf-b5606d7d5da3 | 0.033500 |
| Email check, firm 21 | `millionverifier.people-email-verify` | 5b09f556-26a1-456c-89f6-a1e298b06e43 | 0.002500 |
| Email check, firm 22 | `millionverifier.people-email-verify` | 8d7677f1-0944-4aff-8a06-5fdd07df1837 | 0.002500 |
| Company data, firm 24 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 6de48e97-8d3c-4231-9fa0-e2d255b9a880 | 0.006700 |
| Company data, firm 25 (repeat of 2.0.0 run) | `hunter.companies-enrich` | f827af15-f195-4c4a-8591-e503983d584f | 0.006700 |
| Company data, firm 26 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 6b656c96-b2d6-40cc-8f10-bb3818793a21 | 0.006700 |
| Email check, firm 23 | `millionverifier.people-email-verify` | 1e85448c-97ce-4b7b-adde-ad83e20cc750 | 0.002500 |
| Company data, firm 27 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 46765c08-9143-460f-adc4-332833c033a4 | 0.006700 |
| Staff list, firm 24 | `leadmagic.employee-finder` | 7dfce244-2ff0-42ad-8dfb-dff2e06c8773 | 0.017500 |
| Staff list, firm 25 | `leadmagic.employee-finder` | d989605b-4fdb-43df-986d-3ccf245661e3 | 0.017500 |
| Company data, firm 28 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 57e3780c-5daa-4e39-91e5-e27dd39000a6 | 0.006700 |
| Staff list, firm 26 | `leadmagic.employee-finder` | 8e7f341c-1ac9-42f0-97c1-6d3b2d23b187 | 0.017500 |
| Email lookup, firm 24 | `quickenrich.people-email-find` | 4e967c7a-8068-41b2-afb0-d6fa0c590a66 | 0.006800 |
| Staff list, firm 27 | `leadmagic.employee-finder` | 64e32219-558e-47a7-9388-4ae055267ab9 | 0.017500 |
| Title search, firm 25 | `hunter.domain-email-search-flex` | ff47cc42-6017-499a-84f5-122cdea0cc9a | 0.033500 |
| Staff list, firm 28 | `leadmagic.employee-finder` | 7c972f7f-6485-4e29-8c0d-80f5954bb24e | 0.017500 |
| Title search, firm 26 | `hunter.domain-email-search-flex` | e50b6251-c444-4618-befe-36ca31610526 | 0.033500 |
| Email check, firm 24 | `millionverifier.people-email-verify` | 98cb42a1-78cb-4291-95ee-c4146293834c | 0.002500 |
| Email lookup, firm 27 | `quickenrich.people-email-find` | 175f8c72-f373-41c1-8af1-893ffdfcd3af | 0.006800 |
| Email check, firm 25 | `millionverifier.people-email-verify` | c2053454-3452-4900-9c00-7240a3fe9d33 | 0.002500 |
| Title search, firm 28 | `hunter.domain-email-search-flex` | d956cf6a-75e9-4c82-9f36-25b7080f15a4 | 0.033500 |
| Company data, firm 29 (repeat of 2.0.0 run) | `hunter.companies-enrich` | c68cb2f5-1264-40c3-a8df-6ed5267258e4 | 0.006700 |
| Email check, firm 26 | `millionverifier.people-email-verify` | fbceac6b-547e-4c20-8d5c-051f6865a3a6 | 0.002500 |
| Email check, firm 27 | `millionverifier.people-email-verify` | f3a74ebd-2a8d-4485-97cd-2ee7acaf9e4e | 0.002500 |
| Company data, firm 30 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 93bfb22e-c64b-419e-a786-99e474158a93 | 0.006700 |
| Email check, firm 28 | `millionverifier.people-email-verify` | 89709b2f-b61f-459c-a903-b89f469caa71 | 0.002500 |
| Staff list, firm 29 | `leadmagic.employee-finder` | 8c8d34a4-255a-4c57-973f-3859ee77c657 | 0.017500 |
| Company data, firm 31 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 98f5ee90-ca40-408c-8b1c-437b55287922 | 0.006700 |
| Company data, firm 32 (repeat of 2.0.0 run) | `hunter.companies-enrich` | bd1d4015-8fba-4fec-88dc-5fa8fd1479d0 | 0.006700 |
| Staff list, firm 30 | `leadmagic.employee-finder` | 90f6133a-58e1-4477-8625-470d711313a3 | 0.017500 |
| Company data, firm 33 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 1e6facde-0fcb-4fa6-81f8-e64ef689a8ea | 0.006700 |
| Email lookup, firm 29 | `quickenrich.people-email-find` | da82997f-f75d-4136-9a7d-1ea2c73ff8cb | 0.006800 |
| Company data, firm 34 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 154140b8-170b-4d96-992b-09b082d92ee8 | 0.006700 |
| Staff list, firm 32 | `leadmagic.employee-finder` | 17c78f11-9477-4586-b835-e3f623a98e58 | 0.017500 |
| Email lookup, firm 30 | `quickenrich.people-email-find` | 8420b061-18a3-4ccc-b8cf-4e7a13861b3f | 0.006800 |
| Email check, firm 29 (repeat of 2.0.0 run) | `millionverifier.people-email-verify` | 2f81dbf0-3caf-4a80-be91-70e8688c6418 | 0.002500 |
| Staff list, firm 33 | `leadmagic.employee-finder` | b3722770-9078-401f-bd11-395a584d2605 | 0.017500 |
| Title search, firm 32 | `hunter.domain-email-search-flex` | 8291c2e5-49b1-41a0-ade8-a449151d8bd8 | 0.033500 |
| Email check, firm 30 | `millionverifier.people-email-verify` | a7cbbd98-9e88-4ee3-9a0c-884b45ec9593 | 0.002500 |
| Email lookup, firm 33 | `quickenrich.people-email-find` | 5544c5c4-1b5f-4a5e-a1b4-4eb5101c75a5 | 0.006800 |
| Email check, firm 32 | `millionverifier.people-email-verify` | f83a487a-44aa-4e6f-bfa3-1068ef010f58 | 0.002500 |
| Email check, firm 33 | `millionverifier.people-email-verify` | 3cac6135-523c-4e4b-97a7-08ac9f695b83 | 0.002500 |
| Company data, firm 35 (repeat of 2.0.0 run) | `hunter.companies-enrich` | adfcb6d3-4831-4988-b053-ff9f848a0d0b | 0.006700 |
| Company data, firm 36 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 7335e95f-4e4d-4428-bc43-a6587f3cf85d | 0.006700 |
| Company data, firm 37 (repeat of 2.0.0 run) | `hunter.companies-enrich` | 1505f82d-fd7b-4069-9384-9c933f5078c5 | 0.006700 |
| Company data, firm 38 (repeat of 2.0.0 run) | `hunter.companies-enrich` | e84d89ba-cbb9-4212-b697-989b9121a7ea | 0.006700 |
| Company data, firm 39 (repeat of 2.0.0 run) | `hunter.companies-enrich` | f7cd6750-6321-40f2-b38b-85cee8ce78bd | 0.006700 |
| Staff list, firm 37 | `leadmagic.employee-finder` | 98653934-5c7b-43a4-b1b7-b1999f51a931 | 0.017500 |
| Email lookup, firm 37 | `quickenrich.people-email-find` | 216775d2-09a3-4198-8363-84e43cab34cf | 0.006800 |
| Email check, firm 37 | `millionverifier.people-email-verify` | 2bf31e41-d1b4-4626-bb3f-811d8f44a790 | 0.002500 |
| **Total** | | | **1.418500** |

Firms are numbered by their place in the company search. Company names,
people's names and email addresses are kept in the private run results and are
excluded from this public note.

## Limits

- One vertical, one region and one run. The staff-list match rate (16 of 29)
  and the email find rate on other lists are not measured.
- Agent slips, not Skill steps: one insolvency practice passed the agent's
  first fit check and was searched before the hand-over check removed it
  (about $0.06); three fitting firms were checked in parallel but not needed;
  one firm was searched a place out of order.
- A verified address is deliverable today. It does not prove consent, current
  role or that a message will be read.
