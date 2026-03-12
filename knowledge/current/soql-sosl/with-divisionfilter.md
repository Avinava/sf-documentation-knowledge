---
title: "WITH  DivisionFilter"
domain: soql-sosl
topic: with-divisionfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.947Z
estimatedTokens: 199
keywords: [DivisionFilter, clause, added, SOSL, query, filter, search, results, division, pre-filters, records, applying, filters, specify, rather]
---

# WITH  DivisionFilter

> WITH DivisionFilter is an optional clause that
  can be added to a SOSL query to filter all search results based on the division field. It
  pre-filters all records based on the division before applying other filters. You can also specify
  a division by its name rather than by its ID.

# WITH DivisionFilter

WITH *DivisionFilter* is an optional clause that can be added to a SOSL query to filter all search results based on the division field. It pre-filters all records based on the division before applying other filters. You can also specify a division by its name rather than by its ID.

For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

-   Users can perform searches based on division regardless of whether they have the “Affected by Divisions” permission enabled.
-   All searches within a specific division also include the global division. For example, if you search within a division called Western Division, your results include records found in both the Western Division and the global division.

## Code Examples

```
FIND {test} RETURNING Account (id where name like '%test%'),
                      Contact (id where name like '%test%')
            WITH DIVISION = 'Global'
```
