---
title: "Bulk Product Clause Input"
domain: insurance-developer-guide
topic: bulk-product-clause-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.793Z
estimatedTokens: 85
keywords: [Bulk, Product, Clause, Input, representation, creating, clauses]
---

# Bulk Product Clause Input

> Input representation for creating one or a list of product clauses.

# Bulk Product Clause Input

Input representation for creating one or a list of product clauses.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productClauses | Product Clause Input[] | Details to create product clauses. | Required | 65.0 |

## Code Examples

```
{
  "productClauses": [
    {
      "apiName": "AutoGlassClause_2025",
      "name": "Auto Glass Clause",
      "effectiveDate": "2025-01-01",
      "expirationDate": "2025-12-31",
      "insuranceClauseId": "0j1xx0000000001AAA",
      "rootProduct": "01t000000003CCC",
      "productPath": "01t000000003DDD",
      "variableMappings": [
        {
      "variable": "DeductibleAmount",
      "variableType": "Currency",
      "attribute": "WaiverAmount"
        }]
    }
  ]
}
```

## Related Topics

- Product Clause Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_create_product_clause_input.htm)
