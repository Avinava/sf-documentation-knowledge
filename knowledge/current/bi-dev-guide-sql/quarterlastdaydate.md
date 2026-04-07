---
title: "quarter_last_day(date)"
domain: bi-dev-guide-sql
topic: quarterlastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:01.725Z
estimatedTokens: 172
keywords: [quarter_last_day, date, Accepts, DateTime, DateOnly, legacy, corresponds, day, quarter, _last, _day]
---

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the last day of the quarter that contains the specified date.

# quarter\_last\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the quarter that contains the specified date.

## Example

```

```

| date | quarter_last_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-03-31 00:00:00 |
| 2015-01-21 00:00:00 | 2015-03-31 00:00:00 |
| 2015-01-31 10:00:30 | 2015-03-31 00:00:00 |
| 2015-02-03 15:30:00 | 2015-03-31 00:00:00 |
| 2016-01-21 23:59:59 | 2016-03-31 00:00:00 |
| 2015-10-31 23:59:59 | 2015-12-31 00:00:00 |
| 2015-12-03 00:00:00 | 2015-12-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-03-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-03-31 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", quarter_last_day(OrderDate) as "quarter_last_day" FROM "dates_sample_data";
```
