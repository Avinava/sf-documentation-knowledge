---
title: "day_in_quarter(date)"
domain: bi-dev-guide-saql
topic: dayinquarterdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:14.325Z
estimatedTokens: 28
keywords: [day_in_quarter, date, representing, day, quarter, specific, _in, _quarter]
---

# day_in_quarter(date)

> Returns an integer representing the day of the quarter for a specific date.

# day\_in\_quarter(date)

Returns an integer representing the day of the quarter for a specific date.

```

```

## Code Examples

```
q = foreach q generate day_in_quarter('OrderDate') as "Day in Quarter";
```
