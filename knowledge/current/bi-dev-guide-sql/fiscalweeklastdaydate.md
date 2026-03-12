---
title: "fiscal_week_last_day(date)"
domain: bi-dev-guide-sql
topic: fiscalweeklastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.046Z
estimatedTokens: 177
keywords: [fiscal_week_last_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, Sunday, fiscal, week, _week, _last, _day]
---

# fiscal_week_last_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the last day (Sunday) of the fiscal week that contains the specified date.

# fiscal\_week\_last\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day (Sunday) of the fiscal week that contains the specified date.

## Example

```

```

| date | fiscal_week_last_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-25 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-25 00:00:00 |
| 2015-01-31 10:00:30 | 2015-02-01 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-08 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-24 00:00:00 |
| 2015-10-31 23:59:59 | 2015-11-01 00:00:00 |
| 2015-12-03 00:00:00 | 2015-12-06 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-17 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-17 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", fiscal_week_last_day(OrderDate) as "fiscal_week_last_day" FROM "dates_sample_data";
```
