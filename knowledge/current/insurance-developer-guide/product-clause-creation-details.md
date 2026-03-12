---
title: "Product Clause Creation Details"
domain: insurance-developer-guide
topic: product-clause-creation-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.560Z
estimatedTokens: 148
keywords: [Product, Clause, Creation, Output, representation, bulk, clauses]
---

# Product Clause Creation Details

> Output representation for the bulk creation of product clauses.

# Product Clause Creation Details

Output representation for the bulk creation of product clauses.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Clause Error[] | List of errors that occurred during processing. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the bulk creation operation is successful (true) or not (false). | Big, 65.0 | 65.0 |
| productClauses | Product Clauses [] | List of product clauses that are successfully created. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "productClauses": [
    {
      "productClauseId": "0j4xx0000000001AAA",
      "apiName": "AutoGlassClause_2025"
    }
  ],
  "errors": []
}
```

## Related Topics

- Product Clause Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_product_clause_error.htm)
- Product Clauses [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_create_product_clause_output.htm)
