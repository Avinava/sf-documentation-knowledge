---
title: "UNION Operator"
domain: bi-dev-guide-sql
topic: union-operator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.318Z
estimatedTokens: 398
keywords: [UNION, Operator, combine, results, two, SELECT, statements, joined, number, columns, data, corresponding]
---

# UNION Operator

> Use the UNION operator to combine the results of
  two or more SELECT statements. The joined statements must
  have the same number of columns and the same data types for corresponding columns.

# UNION Operator

Use the UNION operator to combine the results of two or more SELECT statements. The joined statements must have the same number of columns and the same data types for corresponding columns.

SQL for CRM Analytics supports UNION ALL only. This clause returns all results—it doesn't remove duplicate values. Let's see what happens when we combine two SELECT statements that retrieve the Cities field.

```

```

The query returns all City results in an unspecified order.

| City |
| --- |
| Henderson |
| Henderson |
| Los Angeles |
| Fort Lauderdale |
| Fort Lauderdale |
| Los Angeles |
| Los Angeles |
| Los Angeles |
| Los Angeles |
| Los Angeles |

To include an ORDER BY or LIMIT clause when using the UNION operator, you must enclose the first SELECT statement in parentheses so that the SQL parser can identify the UNION operator.

In this example, ORDER BY City DESC applies to the results of the full query, not only the second SELECT clause. The results display in reverse alphabetical order for the combined set of the City field.

```

```

| City |
| --- |
| Yuma |
| Yuma |
| Yuma |
| Yuma |
| Yuma |
| Yuma |
| Yuma |
| Yuma |
| Yucaipa |
| Yucaipa |
| York |

If you include parentheses around the second SELECT statement, the query returns results from the first SELECT statement in ascending order and the second in descending order.

```

```

The first ten results show values from the first SELECT statement in ascending order.

| City |
| --- |
| Aberdeen |
| Abilene |
| Akron |
| Akron |
| Akron |
| Akron |
| Akron |
| Akron |
| Akron |
| Akron |

## Code Examples

```
SELECT City From "Superstore" UNION ALL SELECT City from "Superstore";
```

```
(SELECT City
FROM "Superstore"
ORDER BY City ASC)
UNION ALL
SELECT City
FROM "Superstore"
ORDER BY City DESC;
```

```
(SELECT City
FROM "Superstore"
ORDER BY City ASC)
UNION ALL
(SELECT City
FROM "Superstore"
ORDER BY City DESC);
```
