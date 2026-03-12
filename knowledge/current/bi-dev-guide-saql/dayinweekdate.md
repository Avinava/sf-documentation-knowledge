---
title: "day_in_week(date)"
domain: bi-dev-guide-saql
topic: dayinweekdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.559Z
estimatedTokens: 35
keywords: [day_in_week, date, representing, day, week, specific, Sunday, Monday, _in, _week]
---

# day_in_week(date)

> Returns an integer representing the day of the week for a specific date. 1 = Sunday, 2 =
  Monday and so on.

# day\_in\_week(date)

Returns an integer representing the day of the week for a specific date. 1 = Sunday, 2 = Monday and so on.

```

```

## Code Examples

```
q = foreach q generate day_in_week('OrderDate') as "Day in Week";
```
