---
title: "Boolean Expressions in SELECT Clause"
domain: bi-dev-guide-sql
topic: boolean-expressions-in-select-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.991Z
estimatedTokens: 204
keywords: [Expressions, SELECT, Clause, expression, logical, statement, either]
---

# Boolean Expressions in SELECT Clause

> A boolean expression is a logical statement that returns either
   true or
   false.

# Boolean Expressions in SELECT Clause

A boolean expression is a logical statement that returns either true or false.

A boolean expression in SELECT follows this syntax: SELECT boolean\_expression as alias.

This example demonstrates a query that satisfies one numerical logical condition.

```

```

| Profits |
| --- |
| true |
| true |
| true |
| false |
| true |

This example demonstrates a query that satisfies two numerical logical conditions.

```

```

| Profits |
| --- |
| true |
| false |
| true |
| false |
| true |

This example demonstrates a text comparison.

```

```

| A Names |
| --- |
| false |
| false |
| false |
| false |
| true |

#### See Also

-   [SELECT Clause](atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_select.htm "The SELECT clause retrieves columns from a table.")

## Code Examples

```
SELECT Profit > 0 as Profits FROM "Superstore" LIMIT 5;
```

```
SELECT Profit > 0 and Profit < 100 as Profits FROM "Superstore" LIMIT 5;
```

```
SELECT Customer_Name LIKE 'A%' as "A Names" FROM "Superstore" LIMIT 5;
```

## Related Topics

- SELECT Clause (atlas.en-us.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_select.htm)
