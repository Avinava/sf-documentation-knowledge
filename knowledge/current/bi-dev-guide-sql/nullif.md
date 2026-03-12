---
title: "NULLIF()"
domain: bi-dev-guide-sql
topic: nullif
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.224Z
estimatedTokens: 144
keywords: [NULLIF, function, shorthand, searched, case, statement, two, equal, expressions]
---

# NULLIF()

> Use the nullif() function as shorthand for a
  searched case statement where two equal expressions return null.

# NULLIF()

Use the nullif() function as shorthand for a searched case statement where two equal expressions return null.

nullif() takes the following syntax. Its two arguments are the expressions that you want to compare.

```

```

In this example, the query returns null for all City values that are Aberdeen. If the City value is not Aberdeen, then it returns the City value.

Here’s how to write the query as a case statement.

```

```

Here's how to write the same query using nullif().

```

```

| City |
| --- |
| Aberdeen |
| Akron |
| Albuquerque |
| Alexandria |

## Code Examples

```
nullif(fieldName1, fieldName2)
```

```
SELECT CASE WHEN City='Aberdeen'
THEN NULL
ELSE City
END AS City
FROM "Superstore"
GROUP BY City;
```

```
SELECT NULLIF(City, 'Aberdeen') as City
FROM "Superstore"
GROUP BY City;
```
