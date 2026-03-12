---
title: "Window Functions"
domain: bi-dev-guide-sql
topic: window-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.348Z
estimatedTokens: 2128
keywords: [Window, Functions, function, lets, perform, calculations, selection—or, window"—of, rows, current, row, Unlike, regular, aggregate, avg]
---

# Window Functions

> A window function lets you perform calculations on a selection—or "window"—of rows that
  are related to the current row. Unlike a regular aggregate function, such as avg(), sum(), or count(), the row output of a window function isn’t grouped into a
  single row.

# Window Functions

A window function lets you perform calculations on a selection—or "window"—of rows that are related to the current row. Unlike a regular aggregate function, such as avg(), sum(), or count(), the row output of a window function isn’t grouped into a single row.

A window function takes this syntax.

```

```

| Name | Description |
| --- | --- |
| window function | There are two types of window functions.An aggregate function performed over a specified group of rows related to the current row. SQL for CRM Analytics supports these aggregate functions.avg()sum()min()max()count()percentile_disc()percentile_cont()A ranking function that returns a rank value for each row in the partition. SQL for CRM Analytics supports these rank functions.rank()dense_rank()cume_dist()row_number() |
| projection expression | The expression that serves as the input to the window function. |
| PARTITION BY | Optional. Splits query results into smaller partitions based on the reset_group. When provided, the window function resets after it runs on each part. When you don't include PARTITION BY, all rows are treated as part of a single partition and the function doesn't reset. |
| reset_group | One or more columns that reset the windowing aggregation function when their value (or values) change. |
| ORDER BY | Optional. Provides a sorting order for rows in each partition. If ordering rows in a partition isn't relevant to your query, then don't include this clause.ORDER BY within a window function isn’t the sorting order for your query’s results.To specify the order of query results, include the ORDER BY clause at the end of your query. |
| order_clause | The expressions by which to order the results within a window function partition. |
| frame_clause | Specifies a subset of rows within the current partition that make up the window "frame." The frame has a start and end value, such as ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING. If no end value is specified, the frame's end value defaults to the current row. For example, for ROWS UNBOUNDED PRECEDING, the frame starts at the beginning of the partition and ends at the current row. See the Example Frame Clause Values table for more examples. |
| label | The output column name. |

| Frame Clause Value | Description |
| --- | --- |
| ROWS UNBOUNDED PRECEDING | From the beginning of the partition to the current row. |
| ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW | From the beginning of the partition to the current row. |
| ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING | From the current row to the last row in the partition. |
| ROWS BETWEEN UNBOUNDED PRECEDING TO number PRECEDING | From the beginning of the partition to number rows before the current row. |
| ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING | From the beginning of the partition to the end of the partition. Aggregates the full partition. |
| ROWS BETWEEN CURRENT ROW AND number FOLLOWING | From the current row to number rows after the current row in the partition. |

A ranking function returns a ranking value for each row in a partition.

| Function Name | Description |
| --- | --- |
| RANK() | Returns a ranking value for each row within a partition. If values are tied, RANK() assigns them the same ranking value and skips over the next ranking. For example, if 2 items are ranked at 2, the next-ranked value is 4. |
| DENSE_RANK() | Returns a ranking value for each row within a partition. Unlike RANK(), DENSE_RANK() doesn’t skip over a rank value if multiple entries are tied. If 2 items are ranked at 2, the next-ranked value is 3. |
| CUME_DIST() | Returns the cumulative distribution between entries in a reset group. |
| ROW_NUMBER() | Returns the sequential number of a row in a partition, starting at 1. |

## Aggregation Example

Windowing in SQL for CRM Analytics is available for grouped queries only. This example looks at flights grouped by origin. The query has 3 window functions that demonstrate variations on the 3 parts of a windowing function: partitioning, ordering, and framing.

```

```

| origin | sum1 | sum2 | sum3 | sum4 |
| --- | --- | --- | --- | --- |
| PHX | 1500 | 1500 | 1500 | 5430 |
| SFO | 1950 | 3450 | 1950 | 5430 |
| OAK | 1980 | 5430 | 1980 | 5430 |

This query first executes the WHERE and GROUP BY clauses, so that each expression operates on flights whose destination is LAX. Each group has a column that contains the sum of all of its respective flights' prices.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

The WHERE, GROUP, and HAVING clauses execute before windowing functions.

The subset of data with which we're concerned looks like this.

| Origin | Price |
| --- | --- |
| PHX | 400 |
| PHX | 500 |
| PHX | 600 |
| SFO | 550 |
| SFO | 650 |
| SFO | 750 |
| OAK | 560 |
| OAK | 660 |
| OAK | 760 |

We've included sum(price) as sum1 in this example for demonstration purposes only. The window functions return the same results regardless of whether sum(price) is included in the SELECT statement. sum(price) is a regular aggregate function. The expressions that follow it use sum() as a window function.

Here's the output for the first part of the query calculation.

```

```

| Origin | sum1 |
| --- | --- |
| PHX | 1500 |
| SFO | 1950 |
| OAK | 1980 |

Let's break down the windowing functions line by line.

The first windowing function is: sum(sum(price)) OVER (ORDER BY sum(price) ROWS UNBOUNDED PRECEDING) as sum2. The window function sum() takes the argument sum(price) as the input for the window function sum2. The clause after OVER specifies the rows and the order in which the function operates on them. Since there’s no partitioning clause, all of the rows belong to the same partition.

The rows are sorted in ascending order of sum(price). ROWS UNBOUNDED PRECEDING says apply this operation—sum(sum(price))—from the beginning of the partition to the current row. Because the query is already grouped by origin, there’s only one value corresponding to each origin. For PHX, that means taking the sum of 1500. For the next row, SFO, the function calculates the sum of sum1 in addition to the unbounded preceding ones—the sum1 value of PHX, 1500 + 1950. For the last group, OAK, the function sums up the OAK total in addition to the two preceding rows, 1500 + 1950 + 1980. This window function computes a running sum of sum(price), ordered by sum(price).

The second windowing function is: sum(sum(price)) OVER (PARTITION BY origin ORDER BY sum(price) ROWS UNBOUNDED PRECEDING). Partitioning by origin returns the groupings that the query established with the initial GROUP BY clause. By including the clause ROWS UNBOUNDED PRECEDING, we take the sum of all of the preceding rows within a particular origin. Since each origin's prices are already summed up, taking the sum is just each summed value. The results are the same as the results for sum1.

The third windowing function is: sum(sum(price)) OVER (ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as sum4. Since partitioning isn't specified, all rows are part of the same partition. ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING starts the frame at the first row of the partition and continues to the last row. The function aggregates the full partition, which in this example is all of the rows.

## Ranking Example

This example demonstrates the differences between the RANK() and DENSE\_RANK() functions.

```

```

| origin | s | rnk | denserank |
| --- | --- | --- | --- |
| LAX | 5400 | 8 | 1 |
| HI | 3300 | 6 | 2 |
| SJC | 3300 | 6 | 2 |
| ASE | 2700 | 5 | 3 |
| ORD | 2400 | 4 | 4 |
| OAK | 1980 | 3 | 5 |
| SFO | 1950 | 2 | 6 |
| PHX | 1500 | 1 | 7 |

The RANK() function assigns the sum of the prices for all flights from LAX the highest rank. Because the DENSE\_RANK() function specifies to order the rows descending, it assigns LAX the rank 1.

Since HI and SJC’s sums are the same value, 3300, instead of assigning them values of 7 and 6, RANK() skips over 7. It assigns them both the rank 6. By contrast, DENSE\_RANK() assigns consecutive ranking values. It assigns HI and SJC the value 2. HI and SJC have the next highest descending value after LAX, which has the ranking value 1. The next value DENSE\_RANK() assigns to ASE is 3.

#### See Also

-   [Aggregate Functions](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_intro.htm "Aggregate functions perform operations across columns.")

## Code Examples

```
<window function>(<projection expression>) OVER ([PARTITION BY <reset groups>] [ORDER BY order_clause] <frame_clause>) AS <label>
```

```
SELECT origin, sum(price) as sum1,
sum(sum(price)) OVER (ORDER BY sum(price) ROWS UNBOUNDED PRECEDING) as sum2,
sum(sum(price)) OVER (PARTITION BY origin ORDER BY sum(price) ROWS UNBOUNDED PRECEDING) as sum3,
sum(sum(price)) OVER (ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS sum4
FROM "FlightsData"
WHERE dest='LAX'
GROUP BY origin
ORDER BY sum1
```

```
SELECT origin, sum(price) as sum1
FROM "FlightsData"
WHERE dest='LAX'
GROUP BY origin
```

```
SELECT origin, SUM(price) as s,
    RANK() OVER (ORDER BY SUM(price) ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as rnk,
    DENSE_RANK() OVER (ORDER BY SUM(price) DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as denserank
FROM "FlightsData"
GROUP BY origin
```

## Related Topics

- Aggregate Functions (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_aggregate_intro.htm)
