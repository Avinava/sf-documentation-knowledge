---
title: "Day of Quarter"
domain: bi-dev-guide-sql
topic: day-of-quarter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.011Z
estimatedTokens: 118
keywords: [Day, Quarter, specific, date, year, begins, January]
---

# Day of Quarter

> Returns an integer that represents the day of the quarter for a specific date. The first
  quarter of the year begins on January 1.

# Day of Quarter

Returns an integer that represents the day of the quarter for a specific date. The first quarter of the year begins on January 1.

## Example

```

```

| date | day_of_quarter |
| --- | --- |
| 2015-01-21 15:30:00 | 21 |
| 2015-01-21 00:00:00 | 21 |
| 2015-01-31 10:00:30 | 31 |
| 2015-02-03 15:30:00 | 34 |
| 2016-01-21 23:59:59 | 21 |
| 2015-10-31 23:59:59 | 31 |
| 2015-12-03 00:00:00 | 64 |
| 2016-01-11 03:30:00 | 11 |
| 2016-01-11 03:30:00 | 11 |

## Code Examples

```
SELECT OrderDate as "date", EXTRACT (DOQ FROM OrderDate) as "day_of_quarter" FROM "dates_sample_data";
```
