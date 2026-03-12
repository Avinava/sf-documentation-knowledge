---
title: "Calculate the Time Between Two Dates"
domain: bi-dev-guide-saql
topic: calculate-the-time-between-two-dates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.535Z
estimatedTokens: 216
keywords: [Calculate, Time, Two, Dates, date_diff, daysBetween]
---

# Calculate the Time Between Two Dates

> Use date_diff() and daysBetween() to calculate the time between two dates.

# Calculate the Time Between Two Dates

Use date\_diff() and daysBetween() to calculate the time between two dates.

Use now() to get the current time. You can use these functions with DateTime, DateOnly, or Date types.

-   **[date\_diff(datepart, startdate, enddate)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_date_diff.htm)**
    Returns an integer representing the interval that has elapsed between two dates.
-   **[daysBetween(date1, date2)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_days_between.htm)**
    Returns the number of days between two dates as an integer.
-   **[now()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_now.htm)**
    Returns current datetime in the specified time zone. This function is valid only in a foreach statement.

## Related Topics

- date_diff(datepart, startdate, enddate) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_date_diff.htm)
- daysBetween(date1, date2) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_days_between.htm)
- now() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_now.htm)
