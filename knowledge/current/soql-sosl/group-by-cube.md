---
title: "GROUP BY CUBE"
domain: soql-sosl
topic: group-by-cube
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.739Z
estimatedTokens: 1084
keywords: [GROUP, CUBE, clause, SOQL, query, add, subtotals, combinations, grouped, results, action, useful, compiling, cross-tabular, reports]
---

# GROUP BY CUBE

> Use the GROUP BY CUBE clause in a SOQL query to
        add subtotals for all combinations of a grouped field in the query results. This action is
        useful for compiling cross-tabular reports of data. For example, you can create a
        cross-tabular query to calculate a sum, an average, or another aggregate function and then
        group the results by two sets of values: one horizontally, the other,
        vertically.

# GROUP BY CUBE

Use the GROUP BY CUBE clause in a SOQL query to add subtotals for all combinations of a grouped field in the query results. This action is useful for compiling cross-tabular reports of data. For example, you can create a cross-tabular query to calculate a sum, an average, or another aggregate function and then group the results by two sets of values: one horizontally, the other, vertically.

You can use GROUP BY CUBE with [aggregate functions](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more."), such as SUM() and COUNT(fieldName).

```

```

A query with a GROUP BY CUBE clause returns the same aggregated data as an equivalent query with a GROUP BY clause. It also returns additional subtotal rows for each combination of fields specified in the comma-separated grouping list, as well as a grand total. You can include up to three fields in a GROUP BY CUBE clause.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

-   You can't combine GROUP BY and GROUP BY CUBE syntax in the same statement. For example, GROUP BY CUBE(field1), field2 is not valid as all grouped fields must be within the parentheses.
-   If you only want subtotals for a subset of the grouped field combinations, use [GROUP BY ROLLUP](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_rollup.htm "Use the GROUP BY ROLLUP optional clause in a SOQL query to add subtotals for aggregated data in query results. This action enables the query to calculate subtotals so that you don’t have to maintain that logic in your code.") instead.

The following query returns subtotals of accounts for each combination of Type and BillingCountry:

```

```

The following table shows the query results. The query uses ORDER BY GROUPING(Type), GROUPING(BillingCountry) so that the subtotal and grand total rows are returned after the aggregated data rows. This is not necessary, but it can help you when you are iterating through the query results in your code.

| Type | BillingCountry | grpType | grpCty | accts | Comment |
| --- | --- | --- | --- | --- | --- |
| Customer - Direct | null | 0 | 0 | 6 | Six accounts with Type = Customer - Direct with BillingCountry = null |
| Customer - Channel | USA | 0 | 0 | 1 | One account with Type = Customer - Channel with BillingCountry = USA |
| Customer - Channel | null | 0 | 0 | 2 | Two accounts with Type = Customer - Channel with BillingCountry = null |
| Customer - Direct | USA | 0 | 0 | 1 | One account with Type = Customer - Direct with BillingCountry = USA |
| Customer - Channel | France | 0 | 0 | 1 | One account with Type = Customer - Channel with BillingCountry = France |
| null | USA | 0 | 0 | 1 | One account with Type = null with BillingCountry = USA |
| Customer - Channel | null | 0 | 1 | 4 | Subtotal of four accounts with Type = Customer - Channel (grpCty = 1 indicates that result is grouped by the BillingCountry field) |
| Customer - Direct | null | 0 | 1 | 7 | Subtotal of seven accounts with Type = Customer - Direct (grpCty = 1 indicates that result is grouped by the BillingCountry field) |
| null | null | 0 | 1 | 1 | Subtotal of one account with Type = null (grpCty = 1 indicates that result is grouped by the BillingCountry field) |
| null | France | 1 | 0 | 1 | Subtotal of one account with BillingCountry = France (grpType = 1 indicates that result is grouped by the Type field) |
| null | USA | 1 | 0 | 3 | Subtotal of three accounts with BillingCountry = USA (grpType = 1 indicates that result is grouped by the Type field) |
| null | null | 1 | 0 | 8 | Subtotal of eight accounts with BillingCountry = null (grpType = 1 indicates that result is grouped by the Type field) |
| null | null | 1 | 1 | 12 | Grand total of 12 accounts (grpType = 1 and grpCty = 1 indicates this is the grand total) |

You can use these query results to present a cross-tabular reports of the results.

| Type/BillingCountry | USA | France | null | Total |
| --- | --- | --- | --- | --- |
| Customer - Direct | 1 | 0 | 6 | 7 |
| Customer - Channel | 1 | 1 | 2 | 4 |
| null | 1 | 0 | 0 | 1 |
| Total | 3 | 1 | 8 | 12 |

## Code Examples

```
[GROUP BY CUBE (fieldName[,...])]
```

```
SELECT Type, BillingCountry,
    GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty,
    COUNT(id) accts
FROM Account
GROUP BY CUBE(Type, BillingCountry)
ORDER BY GROUPING(Type), GROUPING(BillingCountry)
```

## Related Topics

- aggregate functions (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm)
- GROUP BY ROLLUP (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_rollup.htm)
