---
title: "First and Last Day in the Week, Month, Quarter or Year Functions"
domain: bi-dev-guide-sql
topic: first-and-last-day-in-the-week-month-quarter-or-year-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.025Z
estimatedTokens: 1453
keywords: [Day, Week, Month, Quarter, Year, Functions, standard, fiscal, calendars, accept, DateTime, DateOnly, legacy, input, They]
---

# First and Last Day in the Week, Month, Quarter or Year Functions

> Use the following functions to find the first and last week, month, quarter, or year for
  both standard and fiscal calendars. These functions accept DateTime, DateOnly, and legacy input values. They
  return the same type as the input value.

# First and Last Day in the Week, Month, Quarter or Year Functions

Use the following functions to find the first and last week, month, quarter, or year for both standard and fiscal calendars. These functions accept DateTime, DateOnly, and legacy input values. They return the same type as the input value.

Date position functions take this syntax.

```

```

-   **[week\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_week_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day (Sunday) of the week that contains the specified date.
-   **[fiscal\_week\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_week_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day (Monday) of the fiscal week that contains the specified date.
-   **[month\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_month_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy object as input. Returns an object of the same type that corresponds to the first day of the month that contains the specified date.
-   **[fiscal\_month\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_month_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the fiscal month that contains the specified date.
-   **[quarter\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_quarter_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the quarter that contains the specified date.
-   **[fiscal\_quarter\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_quarter_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the fiscal quarter that contains the specified date. By default, the first fiscal quarter is defined as February, March, April. The second quarter is May, June, July. The third is August, September, October. The fourth is November, December, January.
-   **[year\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_year_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the year that contains the specified date.
-   **[fiscal\_year\_first\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_year_first_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the first day of the fiscal year that contains the specified date. By default, the fiscal year begins on February 1.
-   **[week\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_week_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day (Saturday) of the week that contains the specified date.
-   **[fiscal\_week\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_week_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day (Sunday) of the fiscal week that contains the specified date.
-   **[month\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_month_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the month that contains the specified date.
-   **[fiscal\_month\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_month_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the month that contains the specified date.
-   **[quarter\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_quarter_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the quarter that contains the specified date.
-   **[fiscal\_quarter\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_quarter_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the fiscal quarter that contains the specified date.
-   **[year\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_year_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the year that contains the specified date.
-   **[fiscal\_year\_last\_day(date)](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_year_last_day.htm)**
    Accepts a DateTime, DateOnly, or legacy Date object as input. Returns an object of the same type that corresponds to the last day of the fiscal year that contains the specified date.

#### See Also

-   [Project a Custom Fiscal Date Part](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_cfy.htm "To project a custom fiscal date part, pass custom fiscal date parts to the EXTRACT() function.")

## Code Examples

```
SELECT functionName(Date) AS DateAlias FROM dataset;
```

## Related Topics

- week_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_week_first_day.htm)
- fiscal_week_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_week_first_day.htm)
- month_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_month_first_day.htm)
- fiscal_month_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_month_first_day.htm)
- quarter_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_quarter_first_day.htm)
- fiscal_quarter_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_quarter_first_day.htm)
- year_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_year_first_day.htm)
- fiscal_year_first_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_year_first_day.htm)
- week_last_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_week_last_day.htm)
- fiscal_week_last_day(date) (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_fiscal_week_last_day.htm)
