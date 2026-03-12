---
title: "quarter_last_day(date)"
domain: bi-dev-guide-saql
topic: quarterlastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.583Z
estimatedTokens: 27
keywords: [quarter_last_day, date, day, quarter, specific, _last, _day]
---

# quarter_last_day(date)

> Returns the date of the last day of the quarter for a specific date.

# quarter\_last\_day(date)

Returns the date of the last day of the quarter for a specific date.

```

```

## Code Examples

```
q = foreach q generate quarter_last_day('BillDate') as "Quarter Last Day";
```
