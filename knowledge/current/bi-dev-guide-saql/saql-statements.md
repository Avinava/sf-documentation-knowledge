---
title: "SAQL Statements"
domain: bi-dev-guide-saql
topic: saql-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.842Z
estimatedTokens: 986
keywords: [SAQL, Statements, query, made, statement, input, stream, operation, output]
---

# SAQL Statements

> A query is made up of statements. Each SAQL statement has an input stream, an operation,
  and an output stream.

# SAQL Statements

A query is made up of statements. Each SAQL statement has an input stream, an operation, and an output stream.

-   **[arimax](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_arimax.htm)**
    Uses existing data to predict future data points. The arimax statement must follow a projection statement in your query. Perform any filtering pre-projection or after the arimax statement.
-   **[cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)**
    Use cogroup to combine data from two or more data streams into a single data stream. The data streams must have at least one common field.
-   **[fill](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_fill.htm)**
    Use fill() to fill in any gaps in date fields. You most often use fill() before using the timeseries statement. By specifying the date fields to check, fill() creates a row that contains the missing month, day, week, quarter, or year and includes a null value. To include values outside the bounds of your data’s date range, specify a start date and end date to override existing limits. The function returns the missing date rows with null values.
-   **[filter](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)**
    Selects rows from a dataset based on a filter predicate.
-   **[foreach](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_foreach.htm)**
    Applies a set of expressions to every row in a dataset. This action is often referred to as *projection*.
-   **[group-by](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)**
    Organizes the rows returned from a query into groups. Within each group, you can apply an aggregate function, such as count() or sum() to get the number of items or sum, respectively.
-   **[group-by rollup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby_rollup.htm)**
    rollup is a subclause of group-by that creates and displays aggregations of grouped data. The output of rollup is based on column order in your query.
-   **[join semi and anti](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_join_semi_anti.htm)**
    Use the join statement with the join\_type to create semi-join or anti-join results.
-   **[limit](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_limit.htm)**
    Limits the number of results that are returned. If you don’t set a limit, queries return a maximum of 10,000 rows.
-   **[load](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_load.htm)**
    Loads a dataset. All SAQL queries start with a load statement.
-   **[offset](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_offset.htm)**
    Use offset to page through the results of your query.
-   **[order](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_order.htm)**
    Sorts in ascending or descending order on one or more fields.
-   **[sample](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_sample.htm)**
    Returns a random sample from a large dataset, where each data point has an equal probability of being selected. This keyword uses the Bernoulli distribution.
-   **[timeseries](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_timeseries.htm)**
    Uses existing data to predict future data points. The timeseries statement must follow a projection statement in your query. Perform any filtering pre-projection or after the timeseries statement.
-   **[union](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm)**
    Combines multiple result sets into one result set. The result sets must have the same field names and structure. You can use a different dataset to create each result set, or you can use the same dataset.

## Related Topics

- arimax (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_arimax.htm)
- cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_cogroup.htm)
- fill (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_fill.htm)
- filter (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)
- foreach (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_foreach.htm)
- group-by (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)
- group-by rollup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby_rollup.htm)
- join semi and anti (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_join_semi_anti.htm)
- limit (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_limit.htm)
- load (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_load.htm)
