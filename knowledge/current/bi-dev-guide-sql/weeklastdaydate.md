---
title: "week_last_day(date)"
domain: bi-dev-guide-sql
topic: weeklastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.091Z
estimatedTokens: 172
keywords: [week_last_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, Saturday, week, _last, _day]
---

# week_last_day(date)

> Accepts a DateTime, DateOnly, or legacy Date  object as input. Returns an object of the same type that
  corresponds to the last day (Saturday) of the week that contains the specified date.

# week\_last\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day (Saturday) of the week that contains the specified date.

## Example

```

```

| date | week_last_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-24 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-24 00:00:00 |
| 2015-01-31 10:00:30 | 2015-01-31 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-07 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-23 00:00:00 |
| 2015-10-31 23:59:59 | 2015-10-31 00:00:00 |
| 2015-12-03 00:00:00 | 2015-12-05 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-16 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-16 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", week_last_day(OrderDate) as "week_last_day" FROM "dates_sample_data";
```
