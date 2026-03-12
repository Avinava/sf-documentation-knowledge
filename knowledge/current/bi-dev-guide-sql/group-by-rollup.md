---
title: "GROUP BY ROLLUP"
domain: bi-dev-guide-sql
topic: group-by-rollup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.124Z
estimatedTokens: 458
keywords: [GROUP, ROLLUP, sub-clause, creates, displays, aggregations, column, data, results, output, order, query]
---

# GROUP BY ROLLUP

> ROLLUP is a sub-clause of GROUP BY that creates and displays aggregations of column data. The
  results output of ROLLUP is based on column order in your
  query.

# GROUP BY ROLLUP

ROLLUP is a sub-clause of GROUP BY that creates and displays aggregations of column data. The results output of ROLLUP is based on column order in your query.

ROLLUP supports the following aggregate functions.

-   Average
-   Count
-   Min
-   Max
-   Sum

This example first groups the results by category and sub-category, and runs Sum(Profit), an aggregate function on each resulting row. By modifying the GROUP BY clause with ROLLUP, the query "rolls up" the results into subtotals and grand totals.

```

```

Notice how GROUP BY ROLLUP (Category, Sub\_Category) creates groups for each column combination:

```

```

The query first groups the total profit for each subcategory of a given category. Next, it groups is the total profit for a single category. Once each category's total profit is accounted for, the query generates the total profit for all categories.

| Category | Sub-Category | TotalProfit |
| --- | --- | --- |
| Furniture | Bookcases | -3,472.56 |
|  | Chairs | 25,590.17 |
|  | Furnishings | 13,059.14 |
|  | Tables | -17,725.48 |
|  | - | 18,451.27 |
| Office Supplies | Appliances | 18,138.01 |
|  | Art | 6,527.79 |
|  | Binders | 30,221.76 |
|  | Envelopes | 6,964.18 |
|  | Fasteners | 949.52 |
|  | Labels | 5,546.25 |
|  | Paper | 34,053.57 |
|  | Storage | 21,278.83 |
|  | Supplies | -1,189.1 |
|  | - | 122,490.8 |

You can also group by multiple columns. This query generates the group of cities that contain stores in each category. The count column shows how many stores there are in each city.

```

```

Here are the first ten results.

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

## Code Examples

```
SELECT Category, Sub_Category, Sum(Profit) as TotalProfit
FROM "Superstore"
GROUP BY ROLLUP(Category, Sub_Category);
```

```
Category, Sub-Category
Category
() — null
```

```
SELECT Category, City, count(*) as cnt
FROM "Superstore"
GROUP BY Category, City
```
