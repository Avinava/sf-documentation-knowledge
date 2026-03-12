---
title: "Time Zone Date Functions"
domain: bi-dev-guide-saql
topic: time-zone-date-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.527Z
estimatedTokens: 665
keywords: [Time, Zone, Date, Functions, enable, feature, DateTime, DateOnly, access, user, New, York, runs, SAQL, query]
---

# Time Zone Date Functions

> When you enable the time zone feature, you can use the fields of the DateTime and DateOnly type to
  access date information in the specified time zone. For example, if a user in New York runs a SAQL
  query, they see date information displayed in Eastern Standard time.

# Time Zone Date Functions

When you enable the time zone feature, you can use the fields of the DateTime and DateOnly type to access date information in the specified time zone. For example, if a user in New York runs a SAQL query, they see date information displayed in Eastern Standard time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

In SAQL, the DateOnly type displays the date with an empty timestamp, for example, “2014-12-31 00:00:00.” The inclusion of the timestamp is a limitation of the beta release.

-   **[Use Time Zone-Enabled Dates in SAQL Projections](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_use.htm)**
    You can project an exact date such as 2017-3-31 23:59:59 or part of a date such as year, month, or day.
-   **[Access Date Functions with Time Zone Enabled](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_access.htm)**
    Use these functions to get the day, week, year, and other parts of DateTime or DateOnly fields. The return values are numbers.
-   **[Group By Date](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_group.htm)**
    You can group the result of your SAQL query by DateTime and DateOnly fields.
-   **[Order By Date](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_order.htm)**
    You can order the result of your SAQL queries by DateTime or DateOnly.
-   **[Filter By Date](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_filter.htm)**
    You can filter results by DateTime and DateOnly fields. Filters can include exact dates, specific date ranges, or relative date ranges.
-   **[Calculate the Time Between Two Dates](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_between.htm)**
    Use date\_diff() and daysBetween() to calculate the time between two dates.
-   **[Convert Dates to and from Strings](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_strings.htm)**
    You can convert dates to strings.
-   **[Handle Null Dates](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_null_dates.htm)**
    Use is not null to filter out null dates.
-   **[Determine the Day in the Week, Month, Quarter, or Year](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_day_in.htm)**
    These functions return the day of the week, month, quarter, or year, the date of the last day of the week, month, quarter, or year, and the number of days in the quarter or year.

## Related Topics

- Use Time Zone-Enabled Dates in SAQL Projections (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_use.htm)
- Access Date Functions with Time Zone Enabled (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_access.htm)
- Group By Date (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_group.htm)
- Order By Date (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_order.htm)
- Filter By Date (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_filter.htm)
- Calculate the Time Between Two Dates (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_between.htm)
- Convert Dates to and from Strings (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_strings.htm)
- Handle Null Dates (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_null_dates.htm)
- Determine the Day in the Week, Month, Quarter, or Year (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_day_in.htm)
