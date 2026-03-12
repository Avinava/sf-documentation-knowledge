---
title: "Use Aliases with  GROUP BY"
domain: soql-sosl
topic: use-aliases-with-group-by
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.727Z
estimatedTokens: 244
keywords: [Aliases, GROUP, alias, any, aggregated, SELECT, statement, SOQL, query, identify, you’re, processing, results, code]
---

# Use Aliases with  GROUP BY

> You can use an alias for any field or aggregated field in a SELECT statement in a SOQL query. Use a field alias to identify the field when
		you’re processing the query results in your code.

# Use Aliases with GROUP BY

You can use an alias for any field or aggregated field in a SELECT statement in a SOQL query. Use a field alias to identify the field when you’re processing the query results in your code.

Specify the alias directly after the associated field. For example, the following query contains two aliases: n for the Name field, and max for the MAX(Amount) aggregated field.

```

```

Any aggregated field in a SELECT list that does not have an alias automatically gets an implied alias with a format expri, where i denotes the order of the aggregated fields with no explicit aliases. The value of i starts at 0 and increments for every aggregated field with no explicit alias.

In this example, MAX(Amount) has an implied alias of expr0, and MIN(Amount) has an implied alias of expr1.

```

```

In this query, MIN(Amount) has an explicit alias of min, MAX(Amount) has an implied alias of expr0, and SUM(Amount) has an implied alias of expr1.

```

```

## Code Examples

```
SELECT Name n, MAX(Amount) max
FROM Opportunity
GROUP BY Name
```

```
SELECT Name, MAX(Amount), MIN(Amount)
FROM Opportunity
GROUP BY Name
```

```
SELECT Name, MAX(Amount), MIN(Amount) min, SUM(Amount)
FROM Opportunity
GROUP BY Name
```
