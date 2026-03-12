---
title: "fiscal_month_last_day(date)"
domain: bi-dev-guide-sql
topic: fiscalmonthlastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.032Z
estimatedTokens: 174
keywords: [fiscal_month_last_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, month, fiscal, _month, _last, _day]
---

# fiscal_month_last_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the last day of the month that contains the specified date.

# fiscal\_month\_last\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the month that contains the specified date.

## Example

```

```

| date | fiscal_month_last_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-31 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-31 00:00:00 |
| 2015-01-31 10:00:30 | 2015-01-31 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-28 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-31 00:00:00 |
| 2015-10-31 23:59:59 | 2015-10-31 00:00:00 |
| 2015-12-03 00:00:00 | 2015-12-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-31 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", fiscal_month_last_day(OrderDate) as "fiscal_month_last_day" FROM "dates_sample_data";
```
