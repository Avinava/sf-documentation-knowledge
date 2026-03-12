---
title: "Day of Week"
domain: bi-dev-guide-sql
topic: day-of-week
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.014Z
estimatedTokens: 101
keywords: [Day, Week, specific, date]
---

# Day of Week

> Returns an integer that represents the day of the week for a specific date.

# Day of Week

Returns an integer that represents the day of the week for a specific date.

## Example

```

```

| date | day_of_week |
| --- | --- |
| 2015-01-21 15:30:00 | 3 |
| 2015-01-21 00:00:00 | 3 |
| 2015-01-31 10:00:30 | 6 |
| 2015-02-03 15:30:00 | 2 |
| 2016-01-21 23:59:59 | 4 |
| 2015-10-31 23:59:59 | 6 |
| 2015-12-03 00:00:00 | 4 |
| 2016-01-11 03:30:00 | 1 |
| 2016-01-11 03:30:00 | 1 |

## Code Examples

```
SELECT OrderDate as "date", EXTRACT (DOW FROM OrderDate) as "day_of_week" FROM "dates_sample_data";
```
