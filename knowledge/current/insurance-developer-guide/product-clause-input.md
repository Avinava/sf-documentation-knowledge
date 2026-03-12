---
title: "Product Clause Input"
domain: insurance-developer-guide
topic: product-clause-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.812Z
estimatedTokens: 278
keywords: [Product, Clause, Input, representation, created]
---

# Product Clause Input

> Input representation for the details of a single product clause to be created.

# Product Clause Input

Input representation for the details of a single product clause to be created.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the product clause. | Required | 65.0 |
| effectiveDate | String | Date from which the clause is valid. | Required | 65.0 |
| expirationDate | String | Date from which the clause is no longer valid. | Required | 65.0 |
| insurance​ClauseId | String | Insurance clause component that's associated with the product clause. | Required | 65.0 |
| name | String | Name of the product clause. | Required | 65.0 |
| productPath | String | Product path of the product clause. | Required | 65.0 |
| productRelated​ComponentId | String | Product-related component that's associated with the product clause. | Optional | 65.0 |
| rootProduct | String | Root product of the product clause. | Required | 65.0 |
| variable​Mappings | Product Clause Variable Mapping Input[] | List of variable mappings for the product clause. | Optional | 65.0 |

## Code Examples

```
{
  "apiName": "DeductibleWaiver_2025",
  "name": "Deductible Waiver Clause",
  "effectiveDate": "2025-01-01",
  "expirationDate": "2025-12-31",
  "insuranceClauseId": "0j1xx0000000004DDD",
  "rootProduct": "01t000000003CCC",
  "productPath": "01t000000003DDD",
  "variableMappings": [
    {
      "variable": "DeductibleAmount",
      "variableType": "Currency",
      "attribute": "WaiverAmount"
    }
  ]
}
```

## Related Topics

- Product Clause Variable Mapping Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_product_clause_variable_mapping_input.htm)
