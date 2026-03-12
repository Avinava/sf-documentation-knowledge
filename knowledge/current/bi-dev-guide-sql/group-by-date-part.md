---
title: "Group By Date Part"
domain: bi-dev-guide-sql
topic: group-by-date-part
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.058Z
estimatedTokens: 115
keywords: [Group, Date, Part, clause, EXTRACT, function, Pass, parts, isolate]
---

# Group By Date Part

> To group by date part, use the GROUP BY clause and
  the EXTRACT() function. Pass EXTRACT() the date parts to isolate.

# Group By Date Part

To group by date part, use the GROUP BY clause and the EXTRACT() function. Pass EXTRACT() the date parts to isolate.

```

```

The results are grouped by year and month parts of the CloseDate field.

| CloseDate_Year | CloseDate_Month | cnt |
| --- | --- | --- |
| 2014 | 12 | 1 |
| 2015 | 1 | 3 |
| 2015 | 2 | 1 |
| 2015 | 3 | 2 |
| 2015 | 4 | 2 |
| 2015 | 5 | 2 |
| 2015 | 6 | 1 |
| 2015 | 8 | 1 |
| 2015 | 10 | 1 |
| 2015 | 11 | 1 |

## Code Examples

```
SELECT EXTRACT(YEAR FROM CloseDate) AS CloseDate_Year, EXTRACT(MONTH FROM CloseDate) AS CloseDate_Month, count(*) AS cnt
FROM "OpportunityFiscalEMTimezoned"
GROUP BY EXTRACT(YEAR FROM CloseDate), EXTRACT(MONTH FROM CloseDate)
LIMIT 10;
```
