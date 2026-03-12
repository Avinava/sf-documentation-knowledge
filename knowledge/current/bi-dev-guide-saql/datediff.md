---
title: "date_diff()"
domain: bi-dev-guide-saql
topic: datediff
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.389Z
estimatedTokens: 580
keywords: [date_diff, amount, time, two, dates, function, foreach, statement, date, _diff, Usage, How, Weeks, Did, Opportunity]
---

# date_diff()

> Returns the amount of time between two dates. This function is only valid in a
            foreach statement.

# date\_diff()

Returns the amount of time between two dates. This function is only valid in a foreach statement.

## Syntax

date\_diff(datepart,startdate,enddate)

datepart specifies how you want to measure the time interval:

-   year
-   month
-   quarter
-   day
-   week
-   hour
-   minute
-   second

startdate specifies the start date.

enddate specifies the end date.

## Usage

Returns the time difference between two dates in years, months, or days. For example,

date\_diff("year", toDate("31-12-2015", "dd-MM-yyyy"), toDate("1-1-2016", "dd-MM-yyyy")) returns 1.

If startdate is after enddate, the difference is returned as a negative number.

You must use date\_diff() in a foreach() statement. You cannot use this function in group by, order by, or filter statements.

The maximum amount of time returned is 9,223,372,036,854,775,807 nanoseconds. This maximum amount of time can be measured in any supported datepart value (nanoseconds aren't supported). For example, in days, the maximum amount of time returned is 106,751.99 days (excluding leap seconds).

## Example - How Many Weeks Did Each Opportunity Take to Close?

Use date\_diff() with datepart = week to calculate how long, in weeks, it took to close each opportunity.

```

```

## Example - How Long Ago Was an Opportunity Closed?

Use date\_diff() with datepart = month to calculate how many months have passed since each opportunity closed. Use now() as the end date.

```

```

#### See Also

-   [daysBetween()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm "Returns the number of days between two dates. This function is only valid in a foreach statement.")

-   [now()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_now.htm "Returns the current datetime in UTC. This function is only valid in a foreach statement.")

-   [Calculate How Long Activities Take](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_daysbetween.htm "Use daysBetween() and date_diff() to calculate the difference between two dates or times.")

-   [date\_diff(datepart, startdate, enddate)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_date_diff.htm "Returns an integer representing the interval that has elapsed between two dates.")

## Code Examples

```
q = load "DTC_Opportunity";
q = foreach q generate date_diff("week", toDate(CreatedDate_sec_epoch), toDate(CloseDate_sec_epoch) ) as 'Weeks to Close';
q = order q by 'Weeks to Close';
```

```
q = load "DTC_Opportunity";
q = foreach q generate date_diff("month", toDate(CloseDate_sec_epoch), now() ) as 'Months Since Close';
q = order q by 'Months Since Close';
```

## Related Topics

- daysBetween() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm)
- now() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_now.htm)
- Calculate How Long Activities Take (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_daysbetween.htm)
- date_diff(datepart, startdate, enddate) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_date_diff.htm)
