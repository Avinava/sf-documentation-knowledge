---
title: "USING Listview="
domain: soql-sosl
topic: using-listview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.925Z
estimatedTokens: 163
keywords: [Listview=, clause, search, object’s, view, records, searched, according, sort, order, user, API, version, later, APIs]
---

# USING Listview=

> Optional clause used to search within a single given object’s
            list view. Only one list view can be specified. Only the first 2,000 records of the list
            view are searched, according to the sort order the user has set for the list view.
        The clause can be used in API version 41 or later.

# USING Listview=

Optional clause used to search within a single given object’s list view. Only one list view can be specified. Only the first 2,000 records of the list view are searched, according to the sort order the user has set for the list view. The clause can be used in API version 41 or later.

## Example

The following SOSL statement searches through the *MVP Customers* list view for the Account object for Acme.

```

```

## Example

The following SOSL statement searches through the recently viewed list view for the Account object for Acme.

```

```

## Supported APIs

The clause in SOSL is supported in SOAP API, REST API, and Apex.

## Code Examples

```
FIND {Acme} IN ALL FIELDS RETURNING Account(Id, Name USING ListView=MVPCustomers)
```

```
FIND {Acme} IN ALL FIELDS RETURNING Account(Name USING LISTVIEW = Recent ORDER BY Name ASC NULLS FIRST, Id ASC NULLS FIRST LIMIT 51)
```
