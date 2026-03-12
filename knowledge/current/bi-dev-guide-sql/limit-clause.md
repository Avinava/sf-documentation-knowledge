---
title: "LIMIT Clause"
domain: bi-dev-guide-sql
topic: limit-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.151Z
estimatedTokens: 185
keywords: [LIMIT, Clause, maximum, number, rows, SQL]
---

# LIMIT Clause

> The LIMIT clause specifies the maximum number of
  rows to return. If no LIMIT clause is specified, then SQL
  returns all rows.

# LIMIT Clause

The LIMIT clause specifies the maximum number of rows to return. If no LIMIT clause is specified, then SQL returns all rows.

LIMIT follows the syntax LIMIT {count}.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_sql)

#### Important

When working with two or more columns, make sure to use LIMIT with an ORDER BY clause, so that your results are returned in a specified order. Otherwise, results return in an order you may not want. ORDER BY is optional for working with a single column.

Here’s an example.

```

```

This query returns the cities in the first three rows of the dataset.

| City |
| --- |
| Aberdeen |
| Abilene |
| Akron |
| Akron |
| Akron |

## Code Examples

```
SELECT City
FROM "Superstore"
ORDER BY City
LIMIT 5;
```
