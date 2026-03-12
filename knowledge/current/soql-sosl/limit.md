---
title: "LIMIT"
domain: soql-sosl
topic: limit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.768Z
estimatedTokens: 132
keywords: [LIMIT, clause, added, SELECT, statement, SOQL, query, specify, maximum, number, rows]
---

# LIMIT

> LIMIT is an optional clause that can be added to a
      SELECT statement of a SOQL query to specify the maximum
    number of rows to return.

# LIMIT

LIMIT is an optional clause that can be added to a SELECT statement of a SOQL query to specify the maximum number of rows to return.

The syntax for LIMIT is:

```

```

For example:

```

```

This query returns the first 125 Account records whose Industry is Media.

You can use LIMIT with count() as the fieldList to count up to the maximum specified.

You can't use a LIMIT clause in a query that uses an aggregate function, but does not use a GROUP BY clause. For example, the following query is invalid:

```

```

## Code Examples

```
SELECT fieldList
FROM objectType
[WHERE conditionExpression] 
  [LIMIT numberOfRows]
```

```
SELECT Name
FROM Account
WHERE Industry = 'Media' LIMIT 125
```

```
SELECT MAX(CreatedDate)
FROM Account LIMIT 1
```
