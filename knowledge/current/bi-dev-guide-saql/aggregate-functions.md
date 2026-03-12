---
title: "Aggregate Functions"
domain: bi-dev-guide-saql
topic: aggregate-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.366Z
estimatedTokens: 1041
keywords: [Aggregate, Functions, perform, computations, across, grouped]
---

# Aggregate Functions

> Aggregate functions perform computations across all values of a grouped
    field.

# Aggregate Functions

Aggregate functions perform computations across all values of a grouped field.

If you don't precede an aggregate function by a group by statement, it treats each line as its own group. Using an aggregate function on an empty set returns null.

-   **[avg() or average()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_avg.htm)**
    Returns the average of the values of a measure field.
-   **[count()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_cnt.htm)**
    Returns the number of rows that match the query criteria.
-   **[first()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_1st.htm)**
    Returns the first value for the specified field.
-   **[last()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_last.htm)**
    Returns the last value in the tuple for the specified field.
-   **[max()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_max.htm)**
    Returns the maximum value of a dimension or measure field.
-   **[median()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_med.htm)**
    Returns the median value of a measure field.
-   **[min()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_min.htm)**
    Returns the minimum value of a dimension or measure field.
-   **[sum()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_sum.htm)**
    Returns the sum of a numeric field.
-   **[unique()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_unq.htm)**
    Returns the count of unique values.
-   **[stddev()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdev.htm)**
    Returns the standard deviation of the values in a field. Accepts measure fields (but not expressions) as input.
-   **[stddevp()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdevp.htm)**
    Returns the population standard deviation of the values in a field. Accepts measure fields as input but not expressions.
-   **[var()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_var.htm)**
    Returns the variance of the values in a field. Accepts measure fields as input but not expressions.
-   **[varp()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_varp.htm)**
    Returns the variance of the values in a field. Accepts measure fields as input but not expressions.
-   **[percentile\_cont()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pc.htm)**
    Calculates a percentile based on a continuous distribution of the column value.
-   **[percentile\_disc()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_pd.htm)**
    Returns the value corresponding to the specified percentile.
-   **[regr\_intercept()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_ri.htm)**
    Uses two numerical fields to calculate a trend line, then returns the y-intercept value. Use this function to find out the likely value of field\_y when field\_x is zero.
-   **[regr\_slope()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_rs.htm)**
    Uses two numerical fields to calculate a trend line, then returns the slope. Use this function to learn more about the relationship between two numerical fields.
-   **[regr\_r2()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_regr2.htm)**
    Uses two numerical fields to calculate R-squared, or goodness of fit. Use regr\_r2() to understand how well the trend line fits your data.
-   **[grouping()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_grouping.htm)**
    Returns 1 if null dimension values are due to higher-level aggregates (which usually means the row is a subtotal or grand total), otherwise returns 0.

#### See Also

-   [group-by](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm "Organizes the rows returned from a query into groups. Within each group, you can apply an aggregate function, such as count() or sum() to get the number of items or sum, respectively.")

## Related Topics

- avg() or average() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_avg.htm)
- count() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_cnt.htm)
- first() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_1st.htm)
- last() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_last.htm)
- max() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_max.htm)
- median() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_med.htm)
- min() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_min.htm)
- sum() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_sum.htm)
- unique() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_unq.htm)
- stddev() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_fn_agg_stdev.htm)
