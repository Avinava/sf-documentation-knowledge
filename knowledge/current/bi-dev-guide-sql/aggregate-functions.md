---
title: "Aggregate Functions"
domain: bi-dev-guide-sql
topic: aggregate-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.951Z
estimatedTokens: 701
keywords: [Aggregate, Functions, perform, operations, across, columns]
---

# Aggregate Functions

> Aggregate functions perform operations across columns.

# Aggregate Functions

Aggregate functions perform operations across columns.

CRM Analytics supports the following aggregate functions.

-   **[avg()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_avg.htm)**
    Takes the average of row values in a given column.
-   **[count()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_count.htm)**
    Returns the number of rows that match a specified condition in a column.
-   **[min()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_min.htm)**
    Returns the lowest row value in a numeric column.
-   **[max()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_max.htm)**
    Returns the highest row value in a numeric column.
-   **[sum()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_sum.htm)**
    Returns the sum of all rows values in a numeric column.
-   **[stddev\_pop()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_stddev_pop.htm)**
    Returns the population standard deviation of the values in a field. Accepts measure fields as input. This function does not accept expressions.
-   **[stddev\_samp()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_stddev_samp.htm)**
    Returns the standard deviation of values in a field. Accepts measure fields as input. This function does not accept expressions.
-   **[var\_pop()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_var_pop.htm)**
    Returns the population variance of the values in a field. Accepts measure fields as input. This function does not accept expressions.
-   **[var\_samp()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_var_samp.htm)**
    Returns the sample variance of the values in a field. Accepts measure fields as input. This function does not accept expressions.
-   **[regr\_intercept()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_regr_intercept.htm)**
    Returns the y-intercept value of a regression line.
-   **[regr\_slope()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_regr_slope.htm)**
    Returns the slope of a regression line between two numerical fields.
-   **[regr\_r2()](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_regr_r2.htm)**
    Returns the R-squared, or goodness-of-fit value for a regression.
-   **[percentile\_cont](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_pct_cont.htm)**
    Calculates a percentile based on a continuous distribution of the column value.
-   **[percentile\_disc](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_pct_disc.htm)**
    Returns the value corresponding to a given percentile. Accepts measure fields as input.

## Related Topics

- avg() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_avg.htm)
- count() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_count.htm)
- min() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_min.htm)
- max() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_max.htm)
- sum() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_sum.htm)
- stddev_pop() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_stddev_pop.htm)
- stddev_samp() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_stddev_samp.htm)
- var_pop() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_var_pop.htm)
- var_samp() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_var_samp.htm)
- regr_intercept() (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_regr_intercept.htm)
