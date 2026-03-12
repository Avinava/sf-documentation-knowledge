---
title: "Access Parts of a Date"
domain: bi-dev-guide-sql
topic: access-parts-of-a-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.001Z
estimatedTokens: 153
keywords: [Access, Parts, Date, EXTRACT, function, projections, filtering, grouping, ordering]
---

# Access Parts of a Date

> Use the EXTRACT() function to access parts of a
  date. You can use EXTRACT() in projections, filtering,
  grouping and ordering.

# Access Parts of a Date

Use the EXTRACT() function to access parts of a date. You can use EXTRACT() in projections, filtering, grouping and ordering.

EXTRACT() follows this syntax.

```

```

A date part can be one of the following values.

-   YEAR
-   QUARTER
-   MONTH
-   WEEK
-   DAY
-   HOUR
-   MINUTE
-   SECOND
-   EPOCH\_DAY
-   EPOCH
-   FISCAL\_YEAR
-   FISCAL\_QUARTER
-   FISCAL\_MONTH
-   FISCAL\_WEEK

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

If you query a date field that doesn't contain time information, it will return 0.

## Code Examples

```
EXTRACT(date_part FROM date_field)
```
