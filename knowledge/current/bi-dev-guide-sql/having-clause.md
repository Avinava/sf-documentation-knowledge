---
title: "HAVING Clause"
domain: bi-dev-guide-sql
topic: having-clause
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.141Z
estimatedTokens: 945
keywords: [HAVING, Clause, filter, grouped, results, columns, aggregate, functions, grouping, GROUP, ROLLUP]
---

# HAVING Clause

> Use the HAVING clause to filter grouped results
  from grouped columns, aggregate functions, or grouping functions.

# HAVING Clause

Use the HAVING clause to filter grouped results from grouped columns, aggregate functions, or grouping functions.

HAVING follows this syntax: HAVING search-condition.

A search condition can contain boolean expressions, comparison operators, and scalar functions.

## Grouped Columns

This query returns groups of cities that contain furniture stores and their counts. The HAVING clause filters for the Furniture category.

```

```

| Category | City | cnt |
| --- | --- | --- |
| Furniture | Akron | 2 |
|  | Alexandria | 3 |
|  | Allen | 1 |
|  | Allentown | 1 |
|  | Amarillo | 4 |
|  | Anaheim | 8 |
|  | Andover | 1 |
|  | Apopka | 1 |
|  | Apple Valley | 2 |
|  | Arlington | 13 |

You can also write this query using WHERE.

```

```

In the logical execution of a SELECT statement, WHERE filters out rows before any grouping or aggregate function runs. In this example, it selects the rows that can be passed to the aggregate function count(). The WHERE clause comes before a GROUP BY statement. With HAVING, the filtering occurs after all of the rows have been passed to count(). HAVING always comes after a GROUP BY statement. Both HAVING and WHERE run before projection.

## Aggregate Functions

This query returns groups of cities that have more than 150 stores in each category. The HAVING clause filters out values greater than 150 in the aggregate column, cnt.

```

```

| Category | City | cnt |
| --- | --- | --- |
| Furniture | Los Angeles | 154 |
|  | New York City | 192 |
| Office Supplies | Houston | 231 |
|  | Los Angeles | 443 |
|  | New York City | 552 |
|  | Philadelphia | 312 |
|  | San Francisco | 322 |
|  | Seattle | 249 |
| Technology | New York City | 171 |

Using HAVING with an aggregate function automatically implies GROUP BY(). These two queries return the same result.

```

```

```

```

| TotalProfit |
| --- |
| 286,397.02 |

## GROUP BY ROLLUP

Here’s a simple example of how to use HAVING with GROUP BY ROLLUP. The query returns the profit for each Sub-Category, rolls them up into subtotals of each Category, and then sums up the grand total. Here, HAVING filters on positive profits.

```

```

| Category | Sub-Category | TotalProfit |
| --- | --- | --- |
| Furniture | Chairs | 26,590.17 |
|  | Furnishings | 13,059.14 |
|  | - | 18,451.27 |
| Office Supplies | Appliances | 18,138.01 |
|  | Art | 6,527.79 |
|  | Binders | 30,221.76 |
|  | Envelopes | 6,964.18 |
|  | Fasteners | 949.52 |
|  | Labels | 5,546.25 |
|  | Paper | 34,053.57 |
|  | Storage | 21,278.83 |
|  | - | 122,490.8 |
| Technology | Accessories | 41,936.64 |
|  | Copiers | 55,617.82 |
|  | Machines | 3,384.76 |
|  | Phones | 44,515.73 |
|  | - | 145,454.95 |
|  | - | 286,397.02 |

## GROUP BY ROLLUP with GROUPING()

In SQL for CRM Analytics, you can use HAVING() with the GROUP BY ROLLUP subclause and the GROUPING() function. You can use GROUPING() with ROLLUP only; you can't use it on its own.

This example uses the GROUPING() function with the HAVING() function to filter for the subtotals of each category and return the grand total. The GROUPING() function returns 1 for null values that are the result of a ROLLUP, and not null values in your dataset. Here, by setting GROUPING(Sub\_Category) = 1, we know that these Sub-Category values refer to the subtotals of each category.

```

```

| Category | Sub-Category | TotalProfit |
| --- | --- | --- |
| Furniture | - | 18,451.27 |
| Office Supplies | - | 122,490.8 |
| Technology | - | 145,454.95 |
| - | - | 286,397.02 |

#### See Also

-   [WHERE Clause](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_where.htm "By default, a SQL query retrieves every row in your dataset. Use the optional WHERE clause to restrict your query results to a conditional expression.")

## Code Examples

```
SELECT Category, City, count(*) as "cnt" FROM "Superstore" GROUP BY Category, City HAVING Category = 'Furniture' LIMIT 10
```

```
SELECT Category, City, count(*) as "cnt" FROM "Superstore" WHERE Category = 'Furniture' GROUP BY Category, City LIMIT 10
```

```
SELECT Category, City, count(*) as cnt FROM "Superstore"
GROUP BY Category, City HAVING count(*) > 150
```

```
SELECT Sum(Profit) as TotalProfit
FROM "Superstore"
HAVING Sum(Profit) > 0
```

```
SELECT Sum(Profit) as TotalProfit
FROM "Superstore"
GROUP BY ()
HAVING Sum(Profit) > 0
```

## Related Topics

- WHERE Clause (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_where.htm)
