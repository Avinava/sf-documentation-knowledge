---
title: "ORDER BY Clause"
domain: bi-dev-guide-sql
topic: order-by-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.230Z
estimatedTokens: 398
keywords: [ORDER, Clause, SELECT, rows, unspecified, sort, ascending, descending]
---

# ORDER BY Clause

> SELECT returns rows in an unspecified order by
  default. To sort returned rows in ascending or descending order, use the ORDER BY clause.

# ORDER BY Clause

SELECT returns rows in an unspecified order by default. To sort returned rows in ascending or descending order, use the ORDER BY clause.

ORDER BY takes the following syntax.

```

```

This example shows how ORDER BY works with multiple fields.

```

```

Here, the SELECT statement orders by the State and Category columns. Alabama and Furniture are the first alphabetized fields for their respective columns. For all of the rows where State is equal to Alabama and Category is equal to Furniture, SQL returns the Sub-Category column values without any order. When State is equal to Alabama, and Category has displayed all of the Furniture values, the Category column displays Office Supplies, the next value in alphabetical order.

| State | Category | Sub-Category |
| --- | --- | --- |
| Alabama | Furniture | Chairs |
| Alabama | Furniture | Chairs |
| Alabama | Furniture | Chairs |
| Alabama | Furniture | Chairs |
| Alabama | Furniture | Furnishings |
| Alabama | Furniture | Tables |
| Alabama | Furniture | Chairs |
| Alabama | Furniture | Furnishings |
| Alabama | Furniture | Tables |
| Alabama | Furniture | Furnishings |
| Alabama | Furniture | Tables |
| Alabama | Furniture | Chairs |
| Alabama | Office Supplies | Appliances |

To order the columns in ascending or descending order, use the keywords ASC and DSC. The order is ascending by default. To sort fields that contain null values, specify NULLS FIRST or NULLS LAST. By default, null values are treated as the largest. In ascending order, they are ordered last. In descending order, they are first.

## Code Examples

```
ORDER BY field_name(s) [ ASC | DESC ] [ NULLS { FIRST | LAST }]
```

```
SELECT State, Category, Sub_Category FROM "Superstore" ORDER BY State, Category;
```
