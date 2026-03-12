---
title: "year_first_day(date)"
domain: bi-dev-guide-sql
topic: yearfirstdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.094Z
estimatedTokens: 170
keywords: [year_first_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, year, _first, _day]
---

# year_first_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the first day of the year that contains the specified date.

# year\_first\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the year that contains the specified date.

## Example

```

```

| date | year_first_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-01 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-01 00:00:00 |
| 2015-01-31 10:00:30 | 2015-01-01 00:00:00 |
| 2015-02-03 15:30:00 | 2015-01-01 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-01 00:00:00 |
| 2015-10-31 23:59:59 | 2015-01-01 00:00:00 |
| 2015-12-03 00:00:00 | 2015-01-01 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-01 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-01 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", year_first_day(OrderDate) as "year_first_day" FROM "dates_sample_data";
```
