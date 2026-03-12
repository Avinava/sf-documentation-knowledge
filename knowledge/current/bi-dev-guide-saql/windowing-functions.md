---
title: "Windowing Functions"
domain: bi-dev-guide-saql
topic: windowing-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.624Z
estimatedTokens: 2284
keywords: [Windowing, Functions, SAQL, functionality, calculate, common, business, cases, percent, grand, total, moving, average, year, quarter]
---

# Windowing Functions

> Use SAQL windowing functionality to calculate common business cases such as percent of
  grand total, moving average, year and quarter growth, and ranking.

# Windowing Functions

Use SAQL windowing functionality to calculate common business cases such as percent of grand total, moving average, year and quarter growth, and ranking.

Windowing functions allow you to calculate data for a single group using aggregated data from adjacent groups. Windowing doesn’t change the number of rows returned by the query. Windowing aggregates across groups rather than within groups and accepts any valid numerical projection on which to aggregate.

Windowing with an aggregate function uses the following syntax:

```

```

When using ranking functions, use the following syntax:

```

```

Where:

windowfunction

An aggregate function that supports windowing. Currently supported functions are avg, sum, min, max, count, median, percentile\_disc, and percentile\_cont.

rankfunction

Returns a rank value for each row in a partition. The following ranking functions are supported: rank(), dense\_rank(), cume\_dist(), and row\_number(). Refer to the [Ranking Functions](#RankingFunctions) section for examples.

projection expression

The expression used to generate a projection from the values of specified columns.

row range

Row ranges are specified using the following syntax.

| Range | Meaning |
| --- | --- |
| [.. 0] | From beginning to current row in the reset group. |
| [0 ..] | From current row to the last row in the reset group. |
| [-2 .. 0] | From two rows before the current row. Window covers 3 rows. |
| [0 .. 2] | From current row to 2 rows ahead of current row. Windows covers 3 rows. |
| [-1 .. -1] | One row before the current row. Window includes a single row. |
| [.. -2] | From beginning of reset group to 2 rows before the current row. |
| [..] | Aggregates the entire reset group. |

reset groups

The columns that reset windowing aggregation when their values change. A reset group of all indicates no reset boundaries for the window aggregation.

order clause

Specify columns by which to sort. This action orders the rows before the window function gets evaluated.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

The order clause is not allowed on expressions where the row range is \[..\] and the window function is sum, avg, min, or max. For example, sum(sum(Sales)) over(\[..\] partition by Year order by Quarter) is invalid.

label

The output column name.

## Notes

Grouped Queries

Windowing functionality is enabled only for grouped queries. The following is **not** valid:

```

```

Multiple Resets and Multiple Orders

Multiple resets and multiple orders are valid. For example:

```

```

Cogroups

Windowing functions can be used with cogroup queries. For example:

sum(sum(a\[Sales\])) over(\[-2 .. 0\] partition by (a\[Year\], a\[Quarter\]) order by (a\[Year\] asc, sum(a\[Sales\]) desc))

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Each Windowing function can be used with only 1 cogroup stream. The following is **not** valid:

```

```

To validate the statement, remove the second stream from the cogroup line, b by column2.

Refer to the [Aggregate Functions](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_aggregate.htm "Aggregate functions perform computations across all values of a grouped field.") topic for details on function usage.

## Example - Dynamically Display Your Top Five Reps

Use windowing to create a chart that dynamically displays your top-five reps for each country. The chart updates continuously as opportunities are won. The example uses windowing to calculate:

-   Percentage contribution that each rep made to the total amount, partitioned by country
-   Ranking of the rep’s contribution, partitioned by country

These calculations let us display the top-five reps in each country.

```

```

The resulting graph shows the top-five reps in each country and displays each rep’s ranking.

![Diagram showing the meeting dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_top5.png&folder=bi_dev_guide_saql)

## Examples

**Running Total (No Reset)**

The following query calculates the running total of sum of sales every quarter, with "partition by all" denoting that the sum isn’t reset by any column.

```

```

| Year | Quarter | sum_amt | r_sum |
| --- | --- | --- | --- |
| 2013 | 1 | 1000 | 1000 |
| 2013 | 2 | 2000 | 3000 |
| 2013 | 3 | 3000 | 6000 |
| 2013 | 4 | 2000 | 8000 |
| 2014 | 1 | 1000 | 9000 |
| 2014 | 2 | 500 | 9500 |
| 2014 | 3 | 9000 | 18500 |
| 2014 | 4 | 3000 | 21500 |
| 2015 | 1 | 500 | 22000 |
| 2015 | 2 | 500 | 22500 |
| 2015 | 3 | 200 | 22700 |
| 2015 | 4 | 400 | 23100 |

**Running Totals By Year**

Running total resets on every year.

```

```

| Year | Quarter | sum_amt | r_sum |
| --- | --- | --- | --- |
| 2013 | 1 | 1000 | 1000 |
| 2013 | 2 | 2000 | 3000 |
| 2013 | 3 | 3000 | 6000 |
| 2013 | 4 | 2000 | 8000 |
| 2014 | 1 | 1000 | 1000 |
| 2014 | 2 | 500 | 1500 |
| 2014 | 3 | 9000 | 10500 |
| 2014 | 4 | 3000 | 13500 |
| 2015 | 1 | 500 | 500 |
| 2015 | 2 | 500 | 100 |
| 2015 | 3 | 200 | 1200 |
| 2015 | 4 | 400 | 1600 |

**Min Sales Trailing 3 Quarters (Moving Min)**

Finds the moving minimum values in the window of last two rows to current row.

```

```

| Year | Quarter | sumSales | m_min |
| --- | --- | --- | --- |
| 2013 | 1 | 1000 | 1000 |
| 2013 | 2 | 2000 | 1000 |
| 2013 | 3 | 3000 | 1000 |
| 2013 | 4 | 2000 | 2000 |
| 2014 | 1 | 1000 | 1000 |
| 2014 | 2 | 500 | 500 |
| 2014 | 3 | 9000 | 500 |
| 2014 | 4 | 3000 | 500 |
| 2015 | 1 | 4000 | 4000 |
| 2015 | 2 | 500 | 500 |
| 2015 | 3 | 200 | 200 |
| 2015 | 4 | 400 | 200 |

**Percentage Total**

This query calculates the percentage of the quarter’s sales for the year. Row range \[..\] calculates the subtotals of each year, which is used in the formula to calculate the percentage.

```

```

| Year | Quarter | sumSales | p_tot |
| --- | --- | --- | --- |
| 2013 | 1 | 1000 | 12.5% |
| 2013 | 2 | 2000 | 25% |
| 2013 | 3 | 3000 | 37.5% |
| 2013 | 4 | 2000 | 25% |
| 2014 | 1 | 1000 | 7.41% |
| 2014 | 2 | 500 | 3.70% |
| 2014 | 3 | 9000 | 66.67% |
| 2014 | 4 | 3000 | 22.22% |
| 2015 | 1 | 500 | 31.25% |
| 2015 | 2 | 500 | 31.25% |
| 2015 | 3 | 200 | 12.50% |
| 2015 | 4 | 400 | 25% |

**Differences Along Year**

This query calculates the growth of sales compared with the previous quarter, with \[-1 .. -1\] referring to the quarter before the quarter on the row. The blank spaces in the result table represent null values.

```

```

| Year | Quarter | sumSales | diff |
| --- | --- | --- | --- |
| 2013 | 1 | 1000 |  |
| 2013 | 2 | 2000 | 1000 |
| 2013 | 3 | 3000 | 1000 |
| 2013 | 4 | 2000 | -1000 |
| 2014 | 1 | 1000 |  |
| 2014 | 2 | 500 | -500 |
| 2014 | 3 | 9000 | 8500 |
| 2014 | 4 | 3000 | -6000 |
| 2015 | 1 | 500 |  |
| 2015 | 2 | 500 | 0 |
| 2015 | 3 | 200 | -300 |
| 2015 | 4 | 400 | 200 |

**Ranking Functions**

rank()

Assigns rank based on order. Repeats rank when the value is the same, and skips as many on the next non-match.

dense\_rank()

Same as rank() but doesn’t skip values on previous repetitions.

cume\_dist()

Calculates the cumulative distribution (relative position) of the data in the reset group.

row\_number()

Assigns a number incremented by 1 for every row in the reset group.

**Examples**

```

```

The following table also shows result columns as if the dense\_rank(), cume\_dist(), and row\_number() functions were substituted for rank() in the previous code.

| Year | Quarter | sum_amt | rank | dense_rank | cume_dist | row_number |
| --- | --- | --- | --- | --- | --- | --- |
| 2013 | 1 | 1000 | 1 | 1 | 0.25 | 1 |
| 2013 | 2 | 2000 | 2 | 2 | 0.75 | 2 |
| 2013 | 4 | 2000 | 2 | 2 | 0.75 | 3 |
| 2013 | 3 | 3000 | 4 | 3 | 1 | 4 |
| 2014 | 2 | 500 | 1 | 1 | 0.25 | 1 |
| 2014 | 1 | 1000 | 2 | 2 | 0.5 | 2 |
| 2014 | 4 | 3000 | 3 | 3 | 0.75 | 3 |
| 2014 | 3 | 9000 | 4 | 4 | 1 | 4 |
| 2015 | 1 | 500 | 1 | 1 | 0.5 | 1 |
| 2015 | 2 | 500 | 1 | 1 | 0.5 | 2 |
| 2015 | 4 | 600 | 3 | 2 | 0.75 | 3 |
| 2015 | 3 | 700 | 4 | 3 | 1 | 4 |

This query shows the top 3 performing quarters in a year.

```

```

| Year | Quarter | sumSales | rank |
| --- | --- | --- | --- |
| 2013 | 1 | 1000 | 1 |
| 2013 | 2 | 2000 | 2 |
| 2013 | 4 | 2000 | 2 |
| 2014 | 2 | 500 | 1 |
| 2014 | 1 | 1000 | 2 |
| 2014 | 4 | 3000 | 3 |
| 2015 | 1 | 500 | 1 |
| 2015 | 2 | 600 | 1 |
| 2015 | 4 | 600 | 3 |

This query shows the 95th percentile.

```

```

![Graph showing 95th percentile](/docs/resources/img/en-us/260.0?doc_id=images%2Fanalytics_wave_saql_windowing_percentile.png&folder=bi_dev_guide_saql)

Refer to the [Aggregate Functions](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_aggregate.htm "Aggregate functions perform computations across all values of a grouped field.") topic for details on function usage.

#### See Also

-   [Windowing Functions](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_windowing.htm "Use SAQL windowing functionality to calculate common business cases such as percent of grand total, moving average, year and quarter growth, and ranking.")

## Code Examples

```
<windowfunction>(<projection expression>) over (<row range> partition by <reset groups> order by <order clause>) as <label>
```

```
<rankfunction> over([..] partition by <reset groups> order by <order clause>) as <label>
```

```
a = load "dataset";
b = foreach a generate sum(sum(sales)) over([.. 0] partition by all order by all);
```

```
sum(sum(Sales)) over([-2 .. 0] partition by (OrderDate_Year, OrderDate_Quarter) order by OrderDate_Year)
       
sum(sum(Sales)) over([-2 .. 0] partition by (Year, Quarter) order by (Year asc, sum(Sales) desc))
```

```
a = load "dataset1";
b = load "dataset2";
c = cogroup a by column1, b by column2;
d = foreach c generate sum(sum(a[sales])) over([.. 0] partition by b[column2] order by all)
```

## Related Topics

- Aggregate
     Functions (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_aggregate.htm)
- Windowing Functions (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_windowing.htm)
