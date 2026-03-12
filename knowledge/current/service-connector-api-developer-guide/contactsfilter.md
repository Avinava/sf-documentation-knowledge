---
title: "ContactsFilter"
domain: service-connector-api-developer-guide
topic: contactsfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.530Z
estimatedTokens: 148
keywords: [ContactsFilter, Criteria, filter, result, getContacts]
---

# ContactsFilter

> Criteria object used to filter the result set returned by getContacts.

# ContactsFilter

Criteria object used to filter the result set returned by getContacts.

## Signature

ContactsFilter

## Fields

| Field | Details |
| --- | --- |
| contains | TypestringDescriptionSearch term to match against contact names or numbers.RequiredNo |
| limit | TypenumberDescriptionMaximum number of contacts to return.RequiredNo |
| offset | TypenumberDescriptionNumber of records to skip (for pagination).RequiredNo |
| types | TypeCONTACTS_FILTER_TYPES[]DescriptionArray of contact types (`Agent`, `PhoneBook`, `Queue`, `PhoneNumber`) used to narrow the results.RequiredNo |
