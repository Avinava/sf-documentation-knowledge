---
title: "GROUP BY Clause"
domain: bi-dev-guide-sql
topic: group-by-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.119Z
estimatedTokens: 321
keywords: [GROUP, Clause, organizes, rows, SELECT, statement, groups, apply, aggregate, function, count, sum, number, items, respectively]
---

# GROUP BY Clause

> The GROUP BY clause organizes the rows returned
  from a SELECT statement into groups. Within each group, you
  can apply an aggregate function, like count() or sum() to get the number of items or sum, respectively.

# GROUP BY Clause

The GROUP BY clause organizes the rows returned from a SELECT statement into groups. Within each group, you can apply an aggregate function, like count() or sum() to get the number of items or sum, respectively.

In this example, the SELECT query counts the number of rows for each category and groups the counts by category.

```

```

| Category | cnt |
| --- | --- |
| Furniture | 2,121 |
| Office Supplies | 6,026 |
| Technology | 1,847 |

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

Grouping by ordinal number is not supported. You can't refer to a results column or an expression created by input values by its index value. To shorten a lengthy expression in your query, use an alias. For example, this query throws an error.

```

```

## Code Examples

```
SELECT Category, COUNT(*) AS "cnt"
FROM "Superstore"
GROUP BY Category;
```

```
SELECT Category, City, count(*) as cnt
FROM "Superstore"
GROUP BY Category, City
```

```
SELECT Category, City, count(*) as cnt
FROM "Superstore"
GROUP BY 1, 2
```
