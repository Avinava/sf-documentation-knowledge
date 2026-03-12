---
title: "WHERE Clause"
domain: bi-dev-guide-sql
topic: where-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.326Z
estimatedTokens: 331
keywords: [Clause, SQL, query, retrieves, every, row, dataset, restrict, results, conditional, expression]
---

# WHERE Clause

> By default, a SQL query retrieves every row in your dataset. Use the optional WHERE clause to restrict your query results to a conditional
  expression.

# WHERE Clause

By default, a SQL query retrieves every row in your dataset. Use the optional WHERE clause to restrict your query results to a conditional expression.

The conditional expression in the WHERE clause takes the following syntax.

```

```

```

```

| Count |
| --- |
| 510 |

You can add multiple field expressions to conditional expressions with logical operators.

```

```

| Count |
| --- |
| 1,257 |

The WHERE clause supports these operators.

| Type | Operator Name | Supported Types |
| --- | --- | --- |
| Comparison Operators | !=, = | Numeric, String, Boolean |
|  | <, <=, >, >= | Numeric, String |
|  | IN, NOT IN | Numeric, String |
| Null Operators | IS NULL, IS NOT NULL | Numeric |
| Logical Operators | AND, OR, NOT | Boolean |

The left operand of a comparison operator must be a valid field. The right operand cannot be a field. Arithmetic operators (e.g. +, -, /, \*, %) between supported types can be used on the right hand side.

WHERE is limited to comparisons within a single column.

In a non-nested query (a non-subquery), you can’t pass fields to a math or string function in a WHERE clause. You can pass a constant. To pass fields to a math or string function in a subquery, include it in the outer query’s WHERE clause. If you use it in the innermost query, SQL throws an error.

## Code Examples

```
fieldExpression [logicalOperator fieldExpression2][...]
```

```
SELECT COUNT(*) as Count
FROM "Superstore"
WHERE City = 'San Francisco';
```

```
SELECT COUNT(*) as Count FROM "Superstore"
WHERE City = 'Los Angeles' OR City = 'San Francisco';
```
