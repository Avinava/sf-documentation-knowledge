---
title: "fiscal_year_first_day(date)"
domain: bi-dev-guide-sql
topic: fiscalyearfirstdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.049Z
estimatedTokens: 186
keywords: [fiscal_year_first_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, fiscal, year, begins, February, _year, _first]
---

# fiscal_year_first_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the first day of the fiscal year that contains the specified date. By default, the
  fiscal year begins on February 1.

# fiscal\_year\_first\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the fiscal year that contains the specified date. By default, the fiscal year begins on February 1.

## Example

```

```

| date | year_first_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2014-02-01 00:00:00 |
| 2015-01-21 00:00:00 | 2014-02-01 00:00:00 |
| 2015-01-31 10:00:30 | 2014-02-01 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-01 00:00:00 |
| 2016-01-21 23:59:59 | 2015-02-01 00:00:00 |
| 2015-10-31 23:59:59 | 2015-02-01 00:00:00 |
| 2015-12-03 00:00:00 | 2015-02-01 00:00:00 |
| 2016-01-11 03:30:00 | 2015-02-01 00:00:00 |
| 2016-01-11 03:30:00 | 2015-02-01 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", fiscal_year_first_day(OrderDate) as "fiscal_year_first_day" FROM "dates_sample_data";
```
