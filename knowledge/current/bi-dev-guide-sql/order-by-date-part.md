---
title: "Order By Date Part"
domain: bi-dev-guide-sql
topic: order-by-date-part
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.073Z
estimatedTokens: 115
keywords: [Order, Date, Part, EXTRACT, clause, query, count, rows, containing, orders, results, descending]
---

# Order By Date Part

> To order by date part, use EXTRACT() on the date
  field with the ORDER BY clause. The query returns the count
  of rows containing these same values and orders the results by count descending.

# Order By Date Part

To order by date part, use EXTRACT() on the date field with the ORDER BY clause. The query returns the count of rows containing these same values and orders the results by count descending.

```

```

| CloseDate_Year | CloseDate_Month | cnt |
| --- | --- | --- |
| 2015 | 1 | 3 |
| 2015 | 3 | 2 |
| 2015 | 4 | 2 |
| 2015 | 5 | 2 |
| 2014 | 12 | 1 |
| 2015 | 2 | 1 |
| 2015 | 6 | 1 |
| 2015 | 8 | 1 |
| 2015 | 10 | 1 |
| 2015 | 11 | 1 |

## Code Examples

```
SELECT EXTRACT(YEAR FROM CloseDate) AS CloseDate_Year, EXTRACT(MONTH FROM CloseDate) AS CloseDate_Month, COUNT(*) AS cnt
FROM "OpportunityFiscalEMTimezoned"
GROUP BY EXTRACT(YEAR FROM CloseDate), EXTRACT(MONTH FROM CloseDate)
ORDER BY cnt DESC
LIMIT 10;
```
