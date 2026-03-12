---
title: "Day of Year"
domain: bi-dev-guide-sql
topic: day-of-year
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.017Z
estimatedTokens: 104
keywords: [Day, Year, specific, date]
---

# Day of Year

> Returns an integer that represents the day of the year for a specific date.

# Day of Year

Returns an integer that represents the day of the year for a specific date.

## Example

```

```

| date | day_of_year |
| --- | --- |
| 2015-01-21 15:30:00 | 21 |
| 2015-01-21 00:00:00 | 21 |
| 2015-01-31 10:00:30 | 31 |
| 2015-02-03 15:30:00 | 34 |
| 2016-01-21 23:59:59 | 21 |
| 2015-10-31 23:59:59 | 304 |
| 2015-12-03 00:00:00 | 337 |
| 2016-01-11 03:30:00 | 11 |
| 2016-01-11 03:30:00 | 11 |

## Code Examples

```
SELECT OrderDate as "date", EXTRACT (DOY FROM OrderDate) as "day_of_year" FROM "dates_sample_data";
```
