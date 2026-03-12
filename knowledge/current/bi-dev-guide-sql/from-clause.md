---
title: "FROM Clause"
domain: bi-dev-guide-sql
topic: from-clause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.114Z
estimatedTokens: 230
keywords: [Clause, function, query, CRM, Analytics, SQL, supports, can’t, select, multiple, tables]
---

# FROM Clause

> The FROM clause defines which table or table
  function to query. CRM Analytics SQL supports using FROM with
  a single table only. You can’t select from multiple tables.

# FROM Clause

The FROM clause defines which table or table function to query. CRM Analytics SQL supports using FROM with a single table only. You can’t select from multiple tables.

CRM Analytics SQL supports the following table functions.

-   **[FILL](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_fill.htm)**
    Use the FILL() table function to fill in any gaps in date fields. By specifying the date fields to check, FILL() creates rows that contain the missing month, day, week, quarter, or year and null data. Use it with TIMESERIES() to forecast future results when there are gaps in input data.
-   **[TIMESERIES](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_timeseries.htm)**
    Use the TIMESERIES() table function to predict future values based on existing ones tracked over time. Optionally choose a prediction model, confidence interval, and seasonality among other parameters.

## Related Topics

- FILL (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_fill.htm)
- TIMESERIES (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_timeseries.htm)
