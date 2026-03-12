---
title: "Examples"
domain: bi-dev-guide-saql
topic: examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.276Z
estimatedTokens: 759
keywords: [Examples, hands-on, SAQL, walk, writing, query, retrieve, data]
---

# Examples

> These hands-on SAQL examples walk you through writing a query to retrieve data

# Examples

These hands-on SAQL examples walk you through writing a query to retrieve data

-   **[Analyze Your Data Over Time](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_dates.htm)**
    Use SAQL date functions for advanced time-based analysis.
-   **[Calculate How Long Activities Take](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_daysbetween.htm)**
    Use daysBetween() and date\_diff() to calculate the difference between two dates or times.
-   **[Display the Opportunities Closed This Month](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_examples.htm)**
    Use relative date ranges to filter opportunities closed in the current month.
-   **[Forecast Future Data Points with timeseries](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_timeseries.htm)**
    Use existing data to predict what might happen in the future.
-   **[Combine Data from Multiple Data Streams with cogroup](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_cogroup.htm)**
    You can combine data from two or more data streams into a single data stream using cogroup. The data streams must have at least one common field.
-   **[Replace Null Values with coalesce()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_coalesce.htm)**
    When you use a left outer or full outer cogroup, unmatched data comes through as null. Use coalesce() to replace null values with the value of your choice.
-   **[Dynamically Display Your Top Five Reps with Windowing](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_top5.htm)**
    Windowing functions perform calculations over a dynamic range.
-   **[Append Datasets using union](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_union.htm)**
    You can append data from two or more data streams into a single data stream using union. The data streams must have the same field names and structure.
-   **[Calculate the Slope of the Regression Line](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_stats.htm)**
    Use SAQL to perform linear analysis on your data to find the line that best fits the data. Then use .regr\_slope to return the slope of this line.
-   **[Show the Top and Bottom Quartile](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_topBotQuartile.htm)**
    Use SAQL to calculate percentiles, like the top and bottom quartile of your data.
-   **[Calculate Grand Totals and Subtotals with the rollup Modifier and grouping() Function](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_rollup_grouping.htm)**
    Calculate subtotals of grouped data in your SAQL query using the rollup modifier on the group by statement, then work with subtotaled data using grouping(). For example, to see the subtotaled value of opportunities by type and lead source, roll up the type and lead source groups. Then, label the subtotals with the grouping function.

## Related Topics

- Analyze Your Data Over Time (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_dates.htm)
- Calculate How Long Activities Take (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_daysbetween.htm)
- Display the Opportunities Closed This Month (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_examples.htm)
- Forecast Future Data Points with timeseries (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_timeseries.htm)
- Combine Data from Multiple Data Streams with cogroup (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_cogroup.htm)
- Replace Null Values with coalesce() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_coalesce.htm)
- Dynamically Display Your Top Five Reps with Windowing (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_top5.htm)
- Append Datasets using union (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_union.htm)
- Calculate the Slope of the Regression Line (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_stats.htm)
- Show the Top and Bottom Quartile (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_topBotQuartile.htm)
