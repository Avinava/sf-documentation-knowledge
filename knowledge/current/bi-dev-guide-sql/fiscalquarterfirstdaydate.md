---
title: "fiscal_quarter_first_day(date)"
domain: bi-dev-guide-sql
topic: fiscalquarterfirstdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.036Z
estimatedTokens: 227
keywords: [fiscal_quarter_first_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, fiscal, quarter, defined, February, March, April]
---

# fiscal_quarter_first_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the first day of the fiscal quarter that contains the specified date. By default,
  the first fiscal quarter is defined as February, March, April. The second quarter is May, June,
  July. The third is August, September, October. The fourth is November, December,
  January.

# fiscal\_quarter\_first\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the fiscal quarter that contains the specified date. By default, the first fiscal quarter is defined as February, March, April. The second quarter is May, June, July. The third is August, September, October. The fourth is November, December, January.

## Example

```

```

| date | fiscal_quarter_first_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2014-11-01 00:00:00 |
| 2015-01-21 00:00:00 | 2014-11-01 00:00:00 |
| 2015-01-31 10:00:30 | 2014-11-01 00:00:00 |
| 2015-02-03 15:30:00 | 2015-02-01 00:00:00 |
| 2016-01-21 23:59:59 | 2015-11-01 00:00:00 |
| 2015-10-31 23:59:59 | 2015-08-01 00:00:00 |
| 2015-12-03 00:00:00 | 2015-11-01 00:00:00 |
| 2016-01-11 03:30:00 | 2015-11-01 00:00:00 |
| 2016-01-11 03:30:00 | 2015-11-01 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", fiscal_quarter_first_day(OrderDate) as "fiscal_quarter_first_day" FROM "dates_sample_data";
```
