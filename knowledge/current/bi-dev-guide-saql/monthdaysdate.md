---
title: "month_days(date)"
domain: bi-dev-guide-saql
topic: monthdaysdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.573Z
estimatedTokens: 23
keywords: [month_days, date, number, days, month, specific, _days]
---

# month_days(date)

> Returns the number of days in the month for a specific date.

# month\_days(date)

Returns the number of days in the month for a specific date.

```

```

## Code Examples

```
q = foreach q generate month_days(BillDate) as "Days in Billing Month";
```
