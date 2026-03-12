---
title: "year_days(date)"
domain: bi-dev-guide-saql
topic: yeardaysdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.593Z
estimatedTokens: 23
keywords: [year_days, date, number, days, year, specific, _days]
---

# year_days(date)

> Returns the number of days in the year for a specific date.

# year\_days(date)

Returns the number of days in the year for a specific date.

```

```

## Code Examples

```
q = foreach q generate year_days(BillDate) as "Days in Billing Year";
```
