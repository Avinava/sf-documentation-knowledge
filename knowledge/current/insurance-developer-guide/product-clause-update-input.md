---
title: "Product Clause Update Input"
domain: insurance-developer-guide
topic: product-clause-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.910Z
estimatedTokens: 142
keywords: [Product, Clause, Input, representation, updating]
---

# Product Clause Update Input

> Input representation for updating a product clause.

# Product Clause Update Input

Input representation for updating a product clause.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date from which the product clause is valid. | Optional | 65.0 |
| expirationDate | String | Date from which the product clause is no longer valid. | Optional | 65.0 |
| variable​Mappings | Product Clause Variable Mapping Input[] | Variable mappings for the product clause that must be updated. | Optional | 65.0 |

## Code Examples

```
{
  "effectiveDate": "2026-01-01",
  "expirationDate": "2026-12-31",
  "variableMappings": [
    {
      "id": "a1Bxx0000000001AAA",
      "variable": "LimitAmount",
      "attribute": "NewCoverageLimit"
    }
  ]
}
```

## Related Topics

- Product Clause Variable Mapping Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_product_clause_variable_mapping_input.htm)
