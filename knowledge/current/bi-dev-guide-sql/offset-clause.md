---
title: "OFFSET Clause"
domain: bi-dev-guide-sql
topic: offset-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.226Z
estimatedTokens: 105
keywords: [OFFSET, Clause, SQL, query, retrieves, every, row, dataset, restrict, results, conditional, expression]
---

# OFFSET Clause

> By default, a SQL query retrieves every row in your dataset. Use the optional WHERE clause to restrict your query results to a conditional
  expression.

# OFFSET Clause

By default, a SQL query retrieves every row in your dataset. Use the optional WHERE clause to restrict your query results to a conditional expression.

OFFSET takes the syntax OFFSET {start}. Start refers to the number of rows to skip before returning rows.

This example skips over rows 1-5. It returns the three subsequent rows, 6-8.

```

```

| City |
| --- |
| Aberdeen |
| Abilene |
| Abilene |

## Code Examples

```
SELECT City
FROM "Superstore"
ORDER BY City
OFFSET 5
LIMIT 3;
```
