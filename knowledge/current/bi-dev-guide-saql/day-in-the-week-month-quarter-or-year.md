---
title: "Day in the Week, Month, Quarter, or Year"
domain: bi-dev-guide-saql
topic: day-in-the-week-month-quarter-or-year
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.407Z
estimatedTokens: 300
keywords: [Day, Week, Month, Quarter, Year, time, period, date, functions, answer, questions, close, deals, beginning, end]
---

# Day in the Week, Month, Quarter, or Year

> Returns the day in the specified time period for a given date. These functions
        answer questions like "do we close more deals at the beginning or end of a
        quarter?".

# Day in the Week, Month, Quarter, or Year

Returns the day in the specified time period for a given date. These functions answer questions like "do we close more deals at the beginning or end of a quarter?".

## Example

Suppose that you want to see on which day of the week most deals are closed. Use day\_in\_week(date).

```

```

The resulting data displays the number of opportunities closed, grouped by the day of the week that the opportunities were closed on.

![Diagram showing number of close opps, grouped by day of the week they were closed.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_dayInWeek.png&folder=bi_dev_guide_saql)

It looks like most opportunities are closed on Thursday (day 5).

## day\_in\_week(date)

Returns an integer representing the day of the week for a specific date, where 1 = Sunday, 2 = Monday, etc.

```

```

## day\_in\_month(date)

Returns an integer representing the day of the month for a specific date.

```

```

## day\_in\_quarter(date)

Returns an integer representing the day of the quarter for a specific date.

```

```

## day\_in\_year(date)

Returns an integer representing the day of the year for a specific date.

```

```

## Code Examples

```
q = load "Data";

q = foreach q generate day_in_week(toDate('CloseDate_sec_epoch')) as 'Day In Week Closed';

q = group q by 'Day In Week Closed';
q = foreach q generate 'Day In Week Closed' as 'Day In Week Closed', count() as 'count';
q = order q by 'count' desc;
```

```
q = foreach q generate day_in_week(toDate('CloseDate_sec_epoch')) as 'Day In Week Closed';
```

```
q = foreach q generate day_in_month(toDate('CloseDate_sec_epoch')) as 'Day in Month Closed';
```

```
q = foreach q generate day_in_quarter(toDate('CloseDate_sec_epoch')) as 'Day in Quarter Closed';
```

```
q = foreach q generate day_in_year(toDate('CloseDate_sec_epoch')) as 'Day in Year Closed';
```
