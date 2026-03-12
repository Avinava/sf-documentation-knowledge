---
title: "date_diff(datepart,
        startdate, enddate)"
domain: bi-dev-guide-saql
topic: datediffdatepart-startdate-enddate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.542Z
estimatedTokens: 288
keywords: [date_diff, datepart, startdate, enddate, representing, interval, elapsed, two, dates, date, _diff]
---

# date_diff(datepart,
        startdate, enddate)

> Returns an integer representing the interval that has elapsed between two
    dates.

# date\_diff(datepart, startdate, enddate)

Returns an integer representing the interval that has elapsed between two dates.

| datepart | The part of the date to use when calculating the difference. Allowed values are:yearmonthquarterdayweekhourminutesecond |
| --- | --- |
| startdate | The start date of the interval. |
| enddate | The end date of the interval. |

The difference between two dates is calculated based on the difference in the indicated date parts. For example, the year difference between two dates is calculated by subtracting the year part of startdate from the year part of enddate.

Suppose OrderDate and ShipDate are DateOnly types. The order date is 31-1-2017 and the ship date is 1-2-2018.

The year difference between the order date and ship date is 1.

```

```

The month difference between the order date and ship date is 2.

```

```

If startdate is after enddate, the result is a negative integer.

#### See Also

-   [date\_diff()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm "Returns the amount of time between two dates. This function is only valid in a foreach statement.")

## Code Examples

```
date_diff("year", 'OrderDate' 'ShipDate');
```

```
date_diff("month", 'OrderDate' 'ShipDate');
```

## Related Topics

- date_diff() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm)
