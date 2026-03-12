---
title: "Filter By Date Parts or Date Field"
domain: bi-dev-guide-sql
topic: filter-by-date-parts-or-date-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.021Z
estimatedTokens: 125
keywords: [Filter, Date, Parts, part, clause, EXTRACT, function, pass, desired, year, month, day, logical, operator]
---

# Filter By Date Parts or Date Field

> To filter by a date part, use the WHERE clause with
  the EXTRACT() function, and pass it the desired date parts
  (year, month, or day). To filter by a date field, use the WHERE clause with a logical operator.

# Filter By Date Parts or Date Field

To filter by a date part, use the WHERE clause with the EXTRACT() function, and pass it the desired date parts (year, month, or day). To filter by a date field, use the WHERE clause with a logical operator.

This example filters by year.

```

```

| CloseDate |
| --- |
| 2014-12-31 15:00:00 |
| 2014-12-30 16:00:00 |

This example returns CloseDate fields that occur on or before the given timestamp.

```

```

| CloseDate |
| --- |
| 2014-12-30 16:00:00 |

## Code Examples

```
SELECT CloseDate
FROM "OpportunityFiscalEMTimezoned"
WHERE EXTRACT(YEAR FROM CloseDate) = 2014;
```

```
SELECT CloseDate
FROM "OpportunityFiscalEMTimezoned"
WHERE CloseDate <= TIMESTAMP '2014-12-31 15:00:00';
```
