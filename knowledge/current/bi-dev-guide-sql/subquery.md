---
title: "Subquery"
domain: bi-dev-guide-sql
topic: subquery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.303Z
estimatedTokens: 524
keywords: [Subquery, query, nested, inside, SELECT, statement, Nesting, queries, perform, multi-step, operations, Simple, Subqueries, UNION]
---

# Subquery

> A subquery is a query that is nested inside a SELECT statement. Nesting queries allows you to perform multi-step
  operations.

# Subquery

A subquery is a query that is nested inside a SELECT statement. Nesting queries allows you to perform multi-step operations.

A subquery follows this syntax.

```

```

To pass fields to a math or string function in a subquery, include it in the outer query’s WHERE clause. If you use it in the innermost query, SQL throws an error.

## Simple Example

This query returns the sum of all profits and the max profit value from the Superstore dataset where all the profits are greater than zero. Values greater than zero mean that no losses are reflected in the results.

```

```

CRM Analytics first runs the innermost query: SELECT Profit FROM "Superstore" WHERE Profit > 0.

The output from this query becomes the dataset on which the outer query operates.

```

```

Optionally, you can refer to an inner query by its alias, if you choose to use one. In the outermost query, you can refer to sumProfit as d.sumProfit, as shown in the example, or you can refer to it simply as sumProfit.

```

```

| sumProfit | maxProfit |
| --- | --- |
| 442,649.60 | 8,399.98 |

## Subqueries with UNION ALL

The UNION ALL operator combines the results of two datasets into one. It doesn't remove any duplicate rows. This example includes UNION ALL after a subquery.

The first part of this example, up to the UNION ALL statement, returns the total profit and the maximum profit values from the Superstore dataset. After the UNION ALL statement, the query returns the total and maximum profit values from the ClearanceSales dataset. Note that ClearanceSales is intended for example purposes only.

```

```

| total | max_profit |
| --- | --- |
| 442,649.60 | 8,399.98 |
| 286,397.02 | 4,519.50 |

You can also include UNION ALL within a subquery. This example finds all the names in the Superstore and Opportunity datasets that contain "an." The outer query then filters for names that have counts over 30 and returns that subset of results.

```

```

| name | count |
| --- | --- |
| Emily Phan | 31 |
| Jonathan Doherty | 32 |
| Matt Abelman | 34 |
| Han Solo | 654 |
| Indiana Jones | 583 |

## Code Examples

```
SELECT field
FROM ( select_statement || union_all )
```

```
SELECT d.sumProfit, maxProfit
FROM (
   SELECT SUM(Profit) as sumProfit, MAX(Profit) as maxProfit
   FROM (
       SELECT Profit
       FROM "Superstore"
       WHERE Profit > 0
       )
   ) as d;
```

```
SELECT SUM(Profit) as sumProfit, MAX(Profit) as maxProfit
FROM (innermost query);
```

```
SELECT d.sumProfit, maxProfit FROM (nested subqueries as d);
```

```
SELECT d.sumProfit as total, maxProfit as max_profit
   FROM (
       SELECT SUM(Profit) as sumProfit, MAX(Profit) as maxProfit
       FROM (
           SELECT Profit
           FROM "Superstore"
           WHERE Profit > 0
           )
       ) as d
UNION ALL (
   SELECT SUM("Profit") as total, MAX("Profit") as max_profit
   FROM "ClearanceSales"
   GROUP BY ()
)
```
