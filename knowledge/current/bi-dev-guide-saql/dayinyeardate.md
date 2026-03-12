---
title: "day_in_year(date)"
domain: bi-dev-guide-saql
topic: dayinyeardate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.560Z
estimatedTokens: 27
keywords: [day_in_year, date, representing, day, year, specific, _in, _year]
---

# day_in_year(date)

> Returns an integer representing the day of the year for a specific date.

# day\_in\_year(date)

Returns an integer representing the day of the year for a specific date.

```

```

## Code Examples

```
q = foreach q generate day_in_year('OrderDate') as "Day in Year";
```
