---
title: "Time-Based Filtering"
domain: bi-dev-guide-saql
topic: time-based-filtering
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.405Z
estimatedTokens: 1335
keywords: [Time-Based, Filtering, SAQL, gives, ways, specify, range, dates, want, look, ops, fiscal, quarter, cases, seven]
---

# Time-Based Filtering

> SAQL gives you many ways to specify the range of dates that you want to look at, such
        as "all ops from the last fiscal quarter" or "all cases from the last seven
        days".

# Time-Based Filtering

SAQL gives you many ways to specify the range of dates that you want to look at, such as "all ops from the last fiscal quarter" or "all cases from the last seven days".

## Using Date Ranges in Filters

Use these filters to specify the date range you want to look at:

-   Fixed date range, for example between August 1, 2018 and June 2, 2017
-   Relative date range, for example between two years ago and last month
-   Open-ended ranges, for example before 04/2/2018
-   Add and subtract dates, for example all records from three months before yesterday

## Example: Display Opportunities Closed This Month

Suppose that you want to see which opportunities closed this month. Your data includes the account name, the close date fields, and the epoch seconds field.

![Diagram showing the number of days each account has been opened for.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_dates_data.png&folder=bi_dev_guide_saql)

Use date() to generate the close date in date format. Then use relative date ranges to filter opportunities closed in the current month.

```

```

If the query is run in May 2018, the resulting data stream contains one entry:

![Screenshot displaying opportunities closed in the current month, with seconds epoch time.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_closed.png&folder=bi_dev_guide_saql)

To add the close date in a readable format, use toDate().

```

```

The resulting data stream includes the full date and time of the close date.

![Screenshot displaying opportunities closed in the current month, with seconds epoch.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_example_result1.png&folder=bi_dev_guide_saql)

You can also display just the month and day of the close date.

```

```

The resulting data stream contains the month and day of the close date.

![Screenshot displaying opportunities closed in the current month, with close date and day.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_example_result.png&folder=bi_dev_guide_saql)

## Fixed Date Ranges

Use dateRange() to specify a fixed range of dates in a filter:

```

```

startArray\_y\_m\_d is an array that specifies the start date

endArray\_y\_m\_d is an array that specifies the end date

For example, return all records between October 2, 2014 and August 16, 2016:

```

```

## Relative Date Ranges

Use relative date ranges to answer questions such as "how many opportunities did each rep close in the past fiscal quarter"? To specify a relative date range, use the in operator on an array with relative date keywords:

```

```

For example, return all records from one year ago up to and including the current year.

```

```

Return all records from two quarters ago, up to and including two quarters from now.

```

```

Return all records from the last two fiscal years, up to and including today.

```

```

Use these relative date keywords:

-   current day
-   n day(s) ago
-   n day(s) ahead
-   current week
-   n week(s) ago
-   n week(s) ahead
-   current month
-   n month(s) ago
-   n month(s) ahead
-   current quarter
-   n quarter(s) ago
-   n quarter(s) ahead
-   current fiscal\_quarter
-   n fiscal\_quarter(s) ago
-   n fiscal\_quarter(s) ahead
-   current year
-   n year(s) ago
-   n year(s) ahead
-   current fiscal\_year
-   n fiscal\_year(s) ago
-   n fiscal\_year(s) ahead

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Only standard fiscal periods are supported. See "About Fiscal Years" in Salesforce Help.

## Open-Ended Date Ranges

Use open-ended date ranges for queries such as "List all opportunities closed after 12/23/2014". To specify an open-ended date range, use the in operator on an array with a relative date keyword and a notation for up to or including:

-   in \[.."relative\_date\_keyword"\] (up to)
-   in \["relative\_date\_keyword"..\] (up to and including)

For example, return all records up to and including the current month.

```

```

You can also specify a closed relative date range. For example, return all records from up to and including one year ago.

```

```

## Add and Subtract Dates

You can add and subtract dates using the relative date keywords. To specify the date range, use the in operator on an array with a relative date keyword, a notation for up to, including, or a range, and the addition or subtraction operators with a time period:

-   in \[.."relative\_date\_keyword +/- time\_period"\] (up to)
-   in \["relative\_date\_keyword +/- time\_period"..\] (up to and including)
-   in \["relative\_date\_keyword\_1".."relative\_date\_keyword\_2 +/- time\_period"\] (range)

For example, return all records from one year ago, up to and including today.

```

```

Return all records from today up to two years and three months from now.

```

```

#### See Also

-   [date()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_datefilter.htm "Returns a date that can be used in a filter. This function takes a year, a month, and a day dimension as input.")

-   [Display the Opportunities Closed This Month](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_examples.htm "Use relative date ranges to filter opportunities closed in the current month.")

## Code Examples

```
q = load "OpsDates1";
q = filter q by date(’CloseDate_Year’, ‘CloseDate_Month’, ‘CloseDate_Day’) in ["current month" .. "current month"];
q = foreach q generate Account;
```

```
q = load "OpsDates1";
q = filter q by date('CloseDate_Year', 'CloseDate_Month', 'CloseDate_Day') in ["current month" .. "current month"];
q = foreach q generate Account, toDate('CloseDate_sec_epoch') as 'Close Date';
```

```
q = load "OpsDates1";
q = filter q by date('CloseDate_Year', 'CloseDate_Month', 'CloseDate_Day') in ["current month" .. "current month"];
q = foreach q generate Account, 'CloseDate_Month' + "/" + 'CloseDate_Day' as 'Close Date';
```

```
dateRange(startArray_y_m_d, endArray_y_m_d)
```

```
q = filter q by date('CreatedDate_Year', 'CreatedDate_Month', 'CreatedDate_Day') in [dateRange([2014,10,2], [2016,8,16])];
```

## Related Topics

- date() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_datefilter.htm)
- Display the Opportunities Closed This Month (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_examples.htm)
