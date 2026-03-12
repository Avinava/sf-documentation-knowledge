---
title: "FETCH Clause"
domain: bi-dev-guide-sql
topic: fetch-clause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.102Z
estimatedTokens: 249
keywords: [FETCH, Clause, number, rows, SQL]
---

# FETCH Clause

> The FETCH clause specifies the number of rows to
  return. If no FETCH clause is specified, then SQL returns all
  rows.

# FETCH Clause

The FETCH clause specifies the number of rows to return. If no FETCH clause is specified, then SQL returns all rows.

FETCH follows this syntax. FETCH {FIRST||NEXT} count {ROW|ROWS} ONLY

FIRST

Returns the count of rows beginning from the first row in the dataset.

NEXT

Returns the count of rows that immediately follow the current row.

count

Optional. The number of rows to return. If you don't specify a count, FETCH returns one row by default.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_sql)

#### Note

FETCH FIRST ROW ONLY is the same as FETCH FIRST 1 ROW ONLY.

In this example, because there’s an offset of one row, FETCH starts from the second value of the City column, ordered ascending. The query returns the next three rows, which are the second, third, and fourth rows.

```

```

| City |
| --- |
| Abilene |
| Abilene |
| Akron |

Here, the query returns the first row.

```

```

| City |
| --- |
| Aberdeen |

## Code Examples

```
SELECT City
FROM "Superstore"
OFFSET 1
ORDER BY City
FETCH NEXT 3 ROWS ONLY;
```

```
SELECT City
FROM "Superstore"
ORDER BY City
FETCH FIRST ROW ONLY;
```
