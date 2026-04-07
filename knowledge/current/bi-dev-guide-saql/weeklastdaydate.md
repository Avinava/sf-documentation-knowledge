---
title: "week_last_day(date)"
domain: bi-dev-guide-saql
topic: weeklastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:14.389Z
estimatedTokens: 25
keywords: [week_last_day, date, day, week, specific, _last, _day]
---

# week_last_day(date)

> Returns the date of the last day of the week for a specific date.

# week\_last\_day(date)

Returns the date of the last day of the week for a specific date.

```

```

## Code Examples

```
q = foreach q generate week_last_day('BillDate') as "Week Last Day";
```
