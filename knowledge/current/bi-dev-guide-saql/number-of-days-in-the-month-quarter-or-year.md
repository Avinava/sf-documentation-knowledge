---
title: "Number of Days in the Month, Quarter, or Year"
domain: bi-dev-guide-saql
topic: number-of-days-in-the-month-quarter-or-year
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.471Z
estimatedTokens: 106
keywords: [Number, Days, Month, Quarter, Year, date, _days]
---

# Number of Days in the Month, Quarter, or Year

> Returns the number of days in the month, quarter, or year for the specified
        date.

# Number of Days in the Month, Quarter, or Year

Returns the number of days in the month, quarter, or year for the specified date.

## month\_days(date)

Returns the number of days in the month for the specified date.

```

```

## quarter\_days(date)

Returns the number of days in the quarter for the specified date.

```

```

## year\_days(date)

Returns the number of days in the year for the specified date.

```

```

## Code Examples

```
q = foreach q generate month_days(toDate('CloseDate_sec_epoch')) as 'Billing Days In Month';
```

```
q = foreach q generate quarter_days(toDate('CloseDate_sec_epoch')) as 'Billing Days In Quarter;
```

```
q = foreach q generate year_days(toDate('CloseDate_sec_epoch')) as 'Billing Days In Year;
```
