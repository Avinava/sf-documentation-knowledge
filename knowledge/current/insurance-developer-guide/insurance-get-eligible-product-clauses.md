---
title: "Insurance Get Eligible Product Clauses"
domain: insurance-developer-guide
topic: insurance-get-eligible-product-clauses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.576Z
estimatedTokens: 144
keywords: [Insurance, Eligible, Product, Clauses, Output, representation]
---

# Insurance Get Eligible Product Clauses

> Output representation for eligible clauses.

# Insurance Get Eligible Product Clauses

Output representation for eligible clauses.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Clause Error[] | List of errors that occurred during the API operation. | Big, 65.0 | 65.0 |
| insurance​Product​Clauses | Insurance Product Clause Details[] | List of insurance product clauses. | Big, 65.0 | 65.0 |
| success | Boolean | Indicates whether the operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "insuranceProductClauses": [
    {
      "category": "Manual",
      "clauseName": "Manual Clause 1",
      "description": "This is a manually added clause.",
      "effectiveDate": "2025-10-01T12:00:00.000Z",
      "expirationDate": "2026-10-01T12:00:00.000Z",
      "insuranceProductClauseId": "a4Lxx000000Cde1EAC",
      "type": "Clause"
    }
  ],
  "success": true
}
```

## Related Topics

- Product Clause Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_product_clause_error.htm)
- Insurance Product Clause Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_product_clause.htm)
