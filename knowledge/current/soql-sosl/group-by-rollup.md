---
title: "GROUP BY ROLLUP"
domain: soql-sosl
topic: group-by-rollup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.760Z
estimatedTokens: 1338
keywords: [GROUP, ROLLUP, clause, SOQL, query, add, subtotals, aggregated, data, results, action, calculate, don’t, maintain, logic]
---

# GROUP BY ROLLUP

> Use the GROUP BY ROLLUP optional clause in a SOQL
    query to add subtotals for aggregated data in query results. This action enables the query to
    calculate subtotals so that you don’t have to maintain that logic in your code.

# GROUP BY ROLLUP

Use the GROUP BY ROLLUP optional clause in a SOQL query to add subtotals for aggregated data in query results. This action enables the query to calculate subtotals so that you don’t have to maintain that logic in your code.

You can use GROUP BY ROLLUP with [aggregate functions](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more."), such as SUM() and COUNT(fieldName).

```

```

A query with a GROUP BY ROLLUP clause returns the same aggregated data as an equivalent query with a GROUP BY clause. It also returns multiple levels of subtotal rows. You can include up to three fields in a comma-separated list in a GROUP BY ROLLUP clause.

The GROUP BY ROLLUP clause adds subtotals at different levels, aggregating from right to left through the list of grouping columns. The order of rollup fields is important. A query that includes three rollup fields returns the following rows for totals:

-   First-level subtotals for each combination of fieldName1 and fieldName2. Results are grouped by fieldName3.
-   Second-level subtotals for each value of fieldName1. Results are grouped by fieldName2 and fieldName3.
-   One grand total row.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

-   You can't combine GROUP BY and GROUP BY ROLLUP syntax in the same statement. For example, GROUP BY ROLLUP(field1), field2 is not valid as all grouped fields must be within the parentheses.
-   If you want to compile a cross-tabular report including subtotals for every possible combination of fields in a GROUP BY clause, use [GROUP BY CUBE](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_cube.htm "Use the GROUP BY CUBE clause in a SOQL query to add subtotals for all combinations of a grouped field in the query results. This action is useful for compiling cross-tabular reports of data. For example, you can create a cross-tabular query to calculate a sum, an average, or another aggregate function and then group the results by two sets of values: one horizontally, the other, vertically.") instead.

## Grouping By One Rollup Field

This simple example rolls the results up by one field:

```

```

The following table shows the query results. Note that the aggregated results include an extra row with a null value for LeadSource that gives a grand total for all the groupings. Since there is only one rollup field, there are no other subtotals.

| LeadSource | cnt |
| --- | --- |
| Web | 7 |
| Phone Inquiry | 4 |
| Partner Referral | 4 |
| Purchased List | 7 |
| null | 22 |

## Grouping By Two Rollup Fields

This example rolls the results up by two fields:

```

```

This table shows the query results that include first-level subtotals and grand total rows. These examples use the COUNT(fieldName) aggregate function, but the syntax works with any aggregate function. You can also group by three rollup fields, which returns even more subtotal rows.

| Status | LeadSource | cnt | Comment |
| --- | --- | --- | --- |
| Open - Not Contacted | Web | 1 | One lead with Status = Open - Not Contacted and LeadSource = Web |
| Open - Not Contacted | Phone Inquiry | 1 | One lead with Status = Open - Not Contacted and LeadSource = Phone Inquiry |
| Open - Not Contacted | Purchased List | 1 | One lead with Status = Open - Not Contacted and LeadSource = Purchased List |
| Open - Not Contacted | null | 3 | First-level subtotal for all leads with Status = Open - Not Contacted |
| Working - Contacted | Web | 4 | Four leads with Status = Working - Contacted and LeadSource = Web |
| Working - Contacted | Phone Inquiry | 1 | One lead with Status = Working - Contacted and LeadSource = Phone Inquiry |
| Working - Contacted | Partner Referral | 3 | Three leads with Status = Working - Contacted and LeadSource = Partner Referral |
| Working - Contacted | Purchased List | 4 | Four leads with Status = Working - Contacted and LeadSource = Purchased List |
| Working - Contacted | null | 12 | First-level subtotal for all leads with Status = Working - Contacted |
| Closed - Converted | Web | 1 | One lead with Status = Closed - Converted and LeadSource = Web |
| Closed - Converted | Phone Inquiry | 1 | One lead with Status = Closed - Converted and LeadSource = Phone Inquiry |
| Closed - Converted | Purchased List | 1 | One lead with Status = Closed - Converted and LeadSource = Purchased List |
| Closed - Converted | null | 3 | First-level subtotal for all leads with Status = Closed - Converted |
| Closed - Not Converted | Web | 1 | One lead with Status = Closed - Not Converted and LeadSource = Web |
| Closed - Not Converted | Phone Inquiry | 1 | One lead with Status = Closed - Not Converted and LeadSource = Phone Inquiry |
| Closed - Not Converted | Partner Referral | 1 | One lead with Status = Closed - Not Converted and LeadSource = Partner Referral |
| Closed - Not Converted | Purchased List | 1 | One lead with Status = Closed - Not Converted and LeadSource = Purchased List |
| Closed - Not Converted | null | 4 | First-level subtotal for all leads with Status = Closed - Not Converted |
| null | null | 22 | Grand total of 22 leads |

## Code Examples

```
[GROUP BY ROLLUP (fieldName[,...])]
```

```
SELECT LeadSource, COUNT(Name) cnt
FROM Lead
GROUP BY ROLLUP(LeadSource)
```

```
SELECT Status, LeadSource, COUNT(Name) cnt
FROM Lead
GROUP BY ROLLUP(Status, LeadSource)
```

## Related Topics

- aggregate functions (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm)
- GROUP BY CUBE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_cube.htm)
