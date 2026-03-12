---
title: "Query Performance"
domain: bi-dev-guide-saql
topic: query-performance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.685Z
estimatedTokens: 697
keywords: [Query, Performance, guidelines, structuring, queries, improve]
---

# Query Performance

> Here are some guidelines for structuring your queries to improve
  performance.

# Query Performance

Here are some guidelines for structuring your queries to improve performance.

-   **[Speed Up Queries with Dataflow Transformations](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_dataflow_transformations.htm)**
    To speed up your queries and reduce the number of network round trips, perform data transformations in the ELT process instead of in the query.
-   **[Limit Multivalue Fields](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_multivalue_fields.htm)**
    Multivalue fields can cause poor performance. The behavior of these fields is undefined for group-by and foreach statements. If possible, write your query so that the fields are referenced only in filters.
-   **[Use Group and Filter Pre-projection](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_group_filter.htm)**
    Improve query performance by moving group and filter operations on simple fields before the foreach statement. A simple field is projected as-is and doesn't have additional expressions.
-   **[Remove Redundant Projections](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_redundant_projections.htm)**
    To improve memory usage and performance costs, remove unnecessary projections from your queries and load only the data required. If you have to perform an operation, include pre-projection statements as needed.
-   **[Check for Redundant Filters](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_redundant_filters.htm)**
    Binding and faceting in your dashboard design can generate redundant filters. Check the SAQL queries that your dashboard produces to remove unnecessary filters. Consider how a filter in your dashboard UI interacts with one in your query and vice versa.
-   **[Limit the Use of unique()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_unique.htm)**
    unique() can affect query performance for large datasets that have over 100 million rows and include more than one million unique values. For large datasets, unique() is faster for measures than for dimensions. If counting the number of unique string values causes performance issues, convert the string to a number. For example, use a hash of the string value or refer to the index of the string in a sorted list of string values.
-   **[arimax Show Parameters Query Tool](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_arimax_show_parameters.htm#bi_saql_arimax_show_parameters)**
    The showParams parameter is provided for you as a query developer tool. It allows you to run an arimax query and review the model parameters and Bayesian Information Criteria (BIC) to understand the data better and improve query efficiency.

## Related Topics

- Speed Up Queries with Dataflow Transformations (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_dataflow_transformations.htm)
- Limit Multivalue Fields (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_multivalue_fields.htm)
- Use Group and Filter Pre-projection (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_group_filter.htm)
- Remove Redundant Projections (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_redundant_projections.htm)
- Check for Redundant Filters (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_redundant_filters.htm)
- Limit the Use of unique() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_unique.htm)
- arimax Show Parameters Query Tool (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_arimax_show_parameters.htm)
