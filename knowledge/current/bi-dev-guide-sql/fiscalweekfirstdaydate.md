---
title: "fiscal_week_first_day(date)"
domain: bi-dev-guide-sql
topic: fiscalweekfirstdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.042Z
estimatedTokens: 178
keywords: [fiscal_week_first_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, Monday, fiscal, week, _week, _first, _day]
---

# fiscal_week_first_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the first day (Monday) of the fiscal week that contains the specified date.

# fiscal\_week\_first\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day (Monday) of the fiscal week that contains the specified date.

## Example

```

```

| date | fiscal_week_first_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-19 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-19 00:00:00 |
| 2015-01-31 10:00:30 | 2015-01-26 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-02 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-18 00:00:00 |
| 2015-10-31 23:59:59 | 2015-10-26 00:00:00 |
| 2015-12-03 00:00:00 | 2015-11-30 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-11 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-11 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", fiscal_week_first_day(OrderDate) as "fiscal_week_first_day" FROM "dates_sample_data";
```
