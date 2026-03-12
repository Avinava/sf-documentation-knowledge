---
title: "GROUPING( fieldName ) )"
domain: soql-sosl
topic: grouping-fieldname-
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.763Z
estimatedTokens: 176
keywords: [GROUPING, fieldName, function, SELECT, HAVING, ORDER, clauses]
---

# GROUPING( fieldName ) )

> You can use the GROUPING(fieldName) function in SELECT, HAVING, and ORDER BY clauses.

# GROUPING( fieldName ) )

You can use the GROUPING(fieldName) function in SELECT, HAVING, and ORDER BY clauses.

Use the GROUPING(fieldName) function to determine whether a row is a subtotal or field when you use GROUP BY ROLLUP or GROUP BY CUBE in SOQL queries.

GROUPING(fieldName) returns 1 if the row is a subtotal for the field, and 0 otherwise.

```

```

For more details, see [Identify Subtotals with GROUP BY](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_grouping.htm "When you use the GROUP BY ROLLUP or GROUP BY CUBE clause in a SOQL query to add the subtotals, you can identify whether the row is a subtotal for a field using the GROUPING(fieldName) function.").

## Code Examples

```
SELECT LeadSource, Rating,
    GROUPING(LeadSource) grpLS, GROUPING(Rating) grpRating,
    COUNT(Name) cnt
FROM Lead
GROUP BY ROLLUP(LeadSource, Rating)
```

## Related Topics

- Identify Subtotals with GROUP BY (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_grouping.htm)
