---
title: "Date Functions"
domain: bi-dev-guide-saql
topic: date-functions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:06.375Z
estimatedTokens: 1394
keywords: [Date, Functions, SAQL, perform, time-based, analysis, Understanding, How, Uploaded, Analytics]
---

# Date Functions

> Use SAQL date functions to perform time-based analysis.

# Date Functions

Use SAQL date functions to perform time-based analysis.

## Understanding How Date Information is Uploaded to Analytics

When you upload a date field to Analytics, it creates dimension and measure fields to contain the date and time information. You can use SAQL date functions to convert the dimensions and measures to dates. You can then use the dates to sort, filter, and group data in your SAQL queries.

For example, suppose that you upload a dataset that contains the CloseDate date field.

![Screenshot of a datasaet.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_upload_dataset.png&folder=bi_dev_guide_saql)

During the dataflow processing, Analytics creates these fields. All the fields are dimensions, except for the epoch fields, which are measures.

| Field | Description |
| --- | --- |
| CloseDate | A dimension containing the date and time. For example, 2018-02-25T00:00:03.000Z. You can’t use this string in a date filter. Instead, ‘cast’ it to a date type using toDate(). |
| CloseDate (Day) | Dimension containing the day in the month, for example 30. |
| CloseDate (Hour) | Dimension containing the hour, for example, 11. If the original date did not contain the hour, this field contains 00. |
| CloseDate (Minute) | Dimension containing the minute, for example, 59. If the original date did not contain the minute, this field contains 00 |
| CloseDate (Month) | Dimension containing the month, for example, 12. |
| CloseDate(Quarter) | Dimension containing the quarter, for example, 4. |
| CloseDate (Second) | Dimension containing the second, for example, 59. If the original date did not contain the second, this field contains 00. |
| CloseDate (Week) | Dimension containing the week, for example, 52. |
| CloseDate_day_epoch | Measure containing the UNIX epoch time, which is the number of days that have elapsed since 00:00:00, Thursday, 1 January 1970. |
| CloseDate_sec_epoch | Measure containing the Unix epoch time in seconds. Seconds epoch time is the number of seconds that have elapsed since 00:00:00, Thursday, 1 January 1970. |

Analytics creates fields ending in \_Fiscal for dates associated with a custom fiscal year. Querying dates with this field works the same way as it does for standard fiscal years.

-   **[daysBetween()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm)**
    Returns the number of days between two dates. This function is only valid in a foreach statement.
-   **[date\_diff()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm)**
    Returns the amount of time between two dates. This function is only valid in a foreach statement.
-   **[now()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_now.htm)**
    Returns the current datetime in UTC. This function is only valid in a foreach statement.
-   **[date()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_datefilter.htm)**
    Returns a date that can be used in a filter. This function takes a year, a month, and a day dimension as input.
-   **[toDate()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm)**
    Converts a string or Unix epoch seconds to a date. Returns a date that can be used in another function such as daysBetween(​). The returned date cannot be used in a filter.
-   **[date\_to\_epoch()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date2epoch.htm)**
    Converts a date to Unix epoch seconds.
-   **[date\_to\_string()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date2string.htm)**
    Converts a date to a string.
-   **[toString()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_2string.htm)**
    Converts a date to a string.
-   **[Time-Based Filtering](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_daterange.htm)**
    SAQL gives you many ways to specify the range of dates that you want to look at, such as "all ops from the last fiscal quarter" or "all cases from the last seven days".
-   **[Day in the Week, Month, Quarter, or Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_dayinweek.htm)**
    Returns the day in the specified time period for a given date. These functions answer questions like "do we close more deals at the beginning or end of a quarter?".
-   **[First Day in the Week, Month, Quarter, or Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_firstday.htm)**
    Returns the date of the first day in the specified week, month, quarter, or year.
-   **[Last Day in the Week, Month, Quarter, or Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_lastday.htm)**
    Returns the date of the last day in the specified week, month, quarter, or year.
-   **[Number of Days in the Month, Quarter, or Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_numdays.htm)**
    Returns the number of days in the month, quarter, or year for the specified date.
-   **[Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)**
    For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.

#### See Also

-   [Analyze Your Data Over Time](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_dates.htm "Use SAQL date functions for advanced time-based analysis.")

## Related Topics

- daysBetween() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm)
- date_diff() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm)
- now() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_now.htm)
- date() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_datefilter.htm)
- toDate() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_toDate.htm)
- date_to_epoch() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date2epoch.htm)
- date_to_string() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date2string.htm)
- toString() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_2string.htm)
- Time-Based Filtering (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_daterange.htm)
- Day in the Week, Month, Quarter, or Year (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_dayinweek.htm)
