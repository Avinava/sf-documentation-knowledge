---
title: "GROUP BY"
domain: soql-sosl
topic: group-by
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.725Z
estimatedTokens: 381
keywords: [GROUP, option, SOQL, query, avoid, iterating, individual, results, specify, records, instead, processing]
---

# GROUP BY

> You can use the GROUP BY option in a SOQL query to
		avoid iterating through individual query results. That is, you specify a group of records
		instead of processing many individual records.

# GROUP BY

You can use the GROUP BY option in a SOQL query to avoid iterating through individual query results. That is, you specify a group of records instead of processing many individual records.

You can use GROUP BY with [aggregate functions](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more."), such as SUM() or MAX(), to summarize the data and enable you to roll up query results rather than having to process the individual records in your code.

```

```

fieldGroupByList specifies a list of one or more fields, separated by commas, that you want to group by. If the list of fields in a SELECT clause includes an aggregate function, you must include all non-aggregated fields in the GROUP BY clause.

For example, to determine how many leads are associated with each LeadSource value without using GROUP BY, you could run the following query:

```

```

You would then write some code to iterate through the query results and increment counters for each LeadSource value. You can use GROUP BY to get the same results without the need to write any extra code. For example:

```

```

You can use a GROUP BY clause without an aggregated function to query all the distinct values, including null, for an object. The following query returns the distinct set of values stored in the LeadSource field.

```

```

## Code Examples

```
[GROUP BY fieldGroupByList]
```

```
SELECT LeadSource FROM Lead
```

```
SELECT LeadSource, COUNT(Name)
FROM Lead
GROUP BY LeadSource
```

```
SELECT LeadSource
FROM Lead
GROUP BY LeadSource
```

## Related Topics

- aggregate functions (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm)
