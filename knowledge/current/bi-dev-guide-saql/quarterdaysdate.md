---
title: "quarter_days(date)"
domain: bi-dev-guide-saql
topic: quarterdaysdate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.582Z
estimatedTokens: 24
keywords: [quarter_days, date, number, days, quarter, specific, _days]
---

# quarter_days(date)

> Returns the number of days in the quarter for a specific date.

# quarter\_days(date)

Returns the number of days in the quarter for a specific date.

```

```

## Code Examples

```
q = foreach q generate quarter_days(BillDate) as "Days in Billing Quarter";
```
