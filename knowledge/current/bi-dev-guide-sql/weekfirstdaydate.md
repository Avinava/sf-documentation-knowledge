---
title: "week_first_day(date)"
domain: bi-dev-guide-sql
topic: weekfirstdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.088Z
estimatedTokens: 172
keywords: [week_first_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, Sunday, week, _first, _day]
---

# week_first_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the first day (Sunday) of the week that contains the specified date.

# week\_first\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day (Sunday) of the week that contains the specified date.

## Example

```

```

| date | week_first_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-18 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-18 00:00:00 |
| 2015-01-31 10:00:30 | 2015-01-25 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-01 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-17 00:00:00 |
| 2015-10-31 23:59:59 | 2015-10-25 00:00:00 |
| 2015-12-03 00:00:00 | 2015-11-29 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-10 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-10 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", week_first_day(OrderDate) as "week_first_day" FROM "dates_sample_data";
```
