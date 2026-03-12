---
title: "Day in Week, Month, Quarter or Year Functions"
domain: bi-dev-guide-sql
topic: day-in-week-month-quarter-or-year-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.075Z
estimatedTokens: 239
keywords: [Day, Week, Month, Quarter, Year, Functions, position]
---

# Day in Week, Month, Quarter or Year Functions

> Use the following functions to find the position of a day within a week, month, quarter,
  or year.

# Day in Week, Month, Quarter or Year Functions

Use the following functions to find the position of a day within a week, month, quarter, or year.

Date position functions take this syntax.

```

```

-   **[Day of Week](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_dow.htm)**
    Returns an integer that represents the day of the week for a specific date.
-   **[Day of Month](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_day.htm)**
    Returns an integer that represents the day of the month for a specific date.
-   **[Day of Quarter](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_doq.htm)**
    Returns an integer that represents the day of the quarter for a specific date. The first quarter of the year begins on January 1.
-   **[Day of Year](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_doy.htm)**
    Returns an integer that represents the day of the year for a specific date.

## Code Examples

```
SELECT EXTRACT (FunctionName FROM Date) AS DateAlias
FROM dataset;
```

## Related Topics

- Day of Week (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_dow.htm)
- Day of Month (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_day.htm)
- Day of Quarter (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_doq.htm)
- Day of Year (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_date_doy.htm)
