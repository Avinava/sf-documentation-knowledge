---
title: "Identify Subtotals with  GROUP BY"
domain: soql-sosl
topic: identify-subtotals-with-group-by
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.748Z
estimatedTokens: 717
keywords: [Identify, Subtotals, GROUP, ROLLUP, CUBE, clause, SOQL, query, add, whether, row, subtotal, GROUPING, fieldName, function]
---

# Identify Subtotals with  GROUP BY

> When you use the GROUP BY ROLLUP or GROUP BY CUBE clause in a SOQL query to add the
		subtotals, you can identify whether the row is a subtotal for a field using the GROUPING(fieldName) function.

# Identify Subtotals with GROUP BY

When you use the GROUP BY ROLLUP or GROUP BY CUBE clause in a SOQL query to add the subtotals, you can identify whether the row is a subtotal for a field using the GROUPING(fieldName) function.

If you are iterating through the query result to create a report or chart of the data, you have to distinguish between aggregated data and subtotal rows. You can use [GROUPING(fieldName)](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_grouping.htm "You can use the GROUPING(fieldName) function in SELECT, HAVING, and ORDER BY clauses.") to do this. Using GROUPING(fieldName) is more important for interpreting your results when you have more than one field in your GROUP BY ROLLUP or GROUP BY CUBE clause. It is the best way to differentiate between aggregated data and subtotals.

This example query returns subtotals for combinations of the LeadSource and Rating fields. GROUPING(LeadSource) indicates if the row is an aggregated row for the LeadSource field, and GROUPING(Rating) does the same for the Rating field.

```

```

The following table shows the query results.

| LeadSource | Rating | grpLS | grpRating | cnt | Comment |
| --- | --- | --- | --- | --- | --- |
| Web | null | 0 | 0 | 5 | Five leads with LeadSource = Web with no Rating |
| Web | Hot | 0 | 0 | 1 | One lead with LeadSource = Web with Rating = Hot |
| Web | Warm | 0 | 0 | 1 | One lead with LeadSource = Web with Rating = Warm |
| Web | null | 0 | 1 | 7 | Subtotal of seven leads with LeadSource = Web (grpRating = 1 indicates that result is grouped by the Rating field) |
| Phone Inquiry | null | 0 | 0 | 4 | Four leads with LeadSource = Phone Inquiry with no Rating |
| Phone Inquiry | null | 0 | 1 | 4 | Subtotal of four leads with LeadSource = Phone Inquiry (grpRating = 1 indicates that result is grouped by the Rating field) |
| Partner Referral | null | 0 | 0 | 4 | Four leads with LeadSource = Partner Referral with no Rating |
| Partner Referral | null | 0 | 1 | 4 | Subtotal of four leads with LeadSource = Partner Referral (grpRating = 1 indicates that result is grouped by the Rating field) |
| Purchased List | null | 0 | 0 | 7 | Seven leads with LeadSource = Purchased List with no Rating |
| Purchased List | null | 0 | 1 | 7 | Subtotal of seven leads with LeadSource = Purchased List (grpRating = 1 indicates that result is grouped by the Rating field) |
| null | null | 1 | 1 | 22 | Grand total of 22 leads (grpRating = 1 and grpLS = 1 indicates this is the grand total) |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=soql_sosl)

#### Tip

The order of the fields listed in the GROUP BY ROLLUP clause is important. For example, if you are more interested in getting subtotals for each Rating instead of for each LeadSource, switch the field order to GROUP BY ROLLUP(Rating, LeadSource).

## Code Examples

```
SELECT LeadSource, Rating,
    GROUPING(LeadSource) grpLS, GROUPING(Rating) grpRating,
    COUNT(Name) cnt
FROM Lead
GROUP BY ROLLUP(LeadSource, Rating)
```

## Related Topics

- GROUPING(fieldName) (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_grouping.htm)
