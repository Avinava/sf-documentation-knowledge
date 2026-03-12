---
title: "fiscal_quarter_last_day(date)"
domain: bi-dev-guide-sql
topic: fiscalquarterlastdaydate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.039Z
estimatedTokens: 177
keywords: [fiscal_quarter_last_day, date, Accepts, DateTime, DateOnly, legacy, input, corresponds, day, fiscal, quarter, _quarter, _last, _day]
---

# fiscal_quarter_last_day(date)

> Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that
  corresponds to the last day of the fiscal quarter that contains the specified date.

# fiscal\_quarter\_last\_day(date)

Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the fiscal quarter that contains the specified date.

## Example

```

```

| date | fiscal_quarter_last_day |
| --- | --- |
| 2015-01-21 15:30:00 | 2015-01-31 00:00:00 |
| 2015-01-21 00:00:00 | 2015-01-31 00:00:00 |
| 2015-01-31 10:00:30 | 2015-01-31 00:00:00 |
| 2015-02-03 15:30:00 | 2015-04-30 00:00:00 |
| 2016-01-21 23:59:59 | 2016-01-31 00:00:00 |
| 2015-10-31 23:59:59 | 2015-10-31 00:00:00 |
| 2015-12-03 00:00:00 | 2015-01-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-31 00:00:00 |
| 2016-01-11 03:30:00 | 2016-01-31 00:00:00 |

## Code Examples

```
SELECT OrderDate as "date", fiscal_quarter_last_day(OrderDate) as "fiscal_quarter_last_day" FROM "dates_sample_data";
```
