---
title: "year_last_day(date)"
domain: bi-dev-guide-sql
topic: yearlastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.098Z
estimatedTokens: 169
keywords: [year_last_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, year, _last, _day]
---

# year_last_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the last day of the year that contains the specified date.

# year\_last\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the year that contains the specified date.

## Example

```

```

| date | year_last_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-12-31 00:00:00 |
| 2015-01-21 00:00:00 | 2015-12-31 00:00:00 |
| 2015-01-31 10:00:30 | 2015-12-31 00:00:00 |
| 2015-02-03 15:30:00 | 2015-12-31 00:00:00 |
| 2016-01-21 23:59:59 | 2016-12-31 00:00:00 |
| 2015-10-31 23:59:59 | 2015-12-31 00:00:00 |
| 2015-12-03 00:00:00 | 2015-12-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-12-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-12-31 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", year_last_day(OrderDate) as "year_last_day" FROM "dates_sample_data";
```
