---
title: "day_in_month(date)"
domain: bi-dev-guide-saql
topic: dayinmonthdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.555Z
estimatedTokens: 27
keywords: [day_in_month, date, representing, day, month, specific, _in, _month]
---

# day_in_month(date)

> Returns an integer representing the day of the month for a specific date.

# day\_in\_month(date)

Returns an integer representing the day of the month for a specific date.

```

```

## Code Examples

```
q = foreach q generate day_in_month('OrderDate') as "Day in Month";
```
