---
title: "HAVING"
domain: soql-sosl
topic: having
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.766Z
estimatedTokens: 414
keywords: [HAVING, clause, SOQL, query, filter, results, aggregate, functions]
---

# HAVING

> HAVING is an optional clause that can be used in a
		SOQL query to filter results that aggregate functions return.

# HAVING

HAVING is an optional clause that can be used in a SOQL query to filter results that aggregate functions return.

You can use a HAVING clause with a GROUP BY clause to filter the results returned by [aggregate functions](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more."), such as SUM(). The HAVING clause is similar to a WHERE clause. The difference is that you can include aggregate functions in a HAVING clause, but not in a WHERE clause.

Similar to a WHERE clause, the HAVING clause supports all the comparison operators, such as =, in conditional expressions, which can contain multiple conditions using the logical AND, OR, and NOT operators.

```

```

havingConditionExpression specifies one or more conditional expressions using aggregate functions to filter the query results.

For example, you can use a GROUP BY clause to determine how many leads are associated with each LeadSource value with the following query:

```

```

However, if you are only interested in LeadSource values that have generated more than 100 leads, you can filter the results by using a HAVING clause. For example:

```

```

This example query returns accounts with duplicate names.

```

```

This example query is invalid as City is not included in the GROUP BY clause:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

A HAVING clause can't contain any semi-join or anti-join subqueries.

## Code Examples

```
[HAVING havingConditionExpression]
```

```
SELECT LeadSource, COUNT(Name)
FROM Lead
GROUP BY LeadSource
```

```
SELECT LeadSource, COUNT(Name)
FROM Lead
GROUP BY LeadSource
HAVING COUNT(Name) > 100
```

```
SELECT Name, Count(Id)
FROM Account
GROUP BY Name
HAVING Count(Id) > 1
```

```
SELECT LeadSource, COUNT(Name)
FROM Lead
GROUP BY LeadSource
HAVING COUNT(Name) > 100 and City LIKE 'San%'
```

## Related Topics

- aggregate functions (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm)
