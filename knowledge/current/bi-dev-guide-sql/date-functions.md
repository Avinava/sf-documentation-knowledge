---
title: "Date Functions"
domain: bi-dev-guide-sql
topic: date-functions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.062Z
estimatedTokens: 708
keywords: [Date, Functions, SQL, CRM, Analytics, supports, DateTime, DateOnly, you’re, familiar, standard, corresponds, SQL’s, SQL's, Timestamp]
---

# Date Functions

> SQL for CRM Analytics supports DateTime, DateOnly, and Date date
    types. If you’re familiar with standard SQL, the DateOnly
    type corresponds with SQL’s Date type and the DateTime type corresponds with SQL's Timestamp type. DateTime and DateOnly have custom time zone support. If your org doesn’t
    support custom time zones, then use the Date type, which
    supports GMT date information only.

# Date Functions

SQL for CRM Analytics supports DateTime, DateOnly, and Date date types. If you’re familiar with standard SQL, the DateOnly type corresponds with SQL’s Date type and the DateTime type corresponds with SQL's Timestamp type. DateTime and DateOnly have custom time zone support. If your org doesn’t support custom time zones, then use the Date type, which supports GMT date information only.

A DateTime date type follows this format.

```

```

A DateOnly date type follows this format.

```

```

-   **[Access Parts of a Date](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_access.htm)**
    Use the EXTRACT() function to access parts of a date. You can use EXTRACT() in projections, filtering, grouping and ordering.
-   **[Project a Date Field](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_project.htm)**
    To project a date field of type DateTime, use the EXTRACT() function on the date field in the SELECT statement.
-   **[Filter By Date Parts or Date Field](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_filter.htm)**
    To filter by a date part, use the WHERE clause with the EXTRACT() function, and pass it the desired date parts (year, month, or day). To filter by a date field, use the WHERE clause with a logical operator.
-   **[Group By Date Part](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_group.htm)**
    To group by date part, use the GROUP BY clause and the EXTRACT() function. Pass EXTRACT() the date parts to isolate.
-   **[Order By Date Part](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_order.htm)**
    To order by date part, use EXTRACT() on the date field with the ORDER BY clause. The query returns the count of rows containing these same values and orders the results by count descending.
-   **[Project a Custom Fiscal Date Part](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_cfy.htm)**
    To project a custom fiscal date part, pass custom fiscal date parts to the EXTRACT() function.
-   **[Day in Week, Month, Quarter or Year Functions](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_order_functions.htm)**
    Use the following functions to find the position of a day within a week, month, quarter, or year.
-   **[First and Last Day in the Week, Month, Quarter or Year Functions](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_first_last_functions.htm)**
    Use the following functions to find the first and last week, month, quarter, or year for both standard and fiscal calendars. These functions accept DateTime, DateOnly, and legacy input values. They return the same type as the input value.

#### See Also

-   [*Enable Custom Time Zones*](https://help.salesforce.com/s/articleView?id=bi_setup_time_zone_support.htm&language=en_US)

## Code Examples

```
DateTimeFormat = "2006-01-02 15:04:05"
```

```
DateOnlyFormat = "2006-01-02"
```

## Related Topics

- Access Parts of a Date (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_access.htm)
- Project a Date Field (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_project.htm)
- Filter By Date Parts or Date Field (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_filter.htm)
- Group By Date Part (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_group.htm)
- Order By Date Part (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_order.htm)
- Project a Custom Fiscal Date Part (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_cfy.htm)
- Day in Week, Month, Quarter or Year Functions (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_order_functions.htm)
- First and Last Day in the Week, Month, Quarter or Year Functions (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_first_last_functions.htm)
