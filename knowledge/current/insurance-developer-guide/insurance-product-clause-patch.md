---
title: "Insurance Product Clause (PATCH)"
domain: insurance-developer-guide
topic: insurance-product-clause-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.227Z
estimatedTokens: 297
keywords: [Insurance, Product, Clause, PATCH, root]
---

# Insurance Product Clause (PATCH)

> Update an existing product clause for a root product.

# Insurance Product Clause (PATCH)

Update an existing product clause for a root product.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

PATCH

Path parameter for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productClauseId | String | ID of the product clause that must be updated. | Required | 65.0 |

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date from which the product clause is valid. | Optional | 65.0 |
| expirationDate | String | Date from which the product clause is no longer valid. | Optional | 65.0 |
| variable​Mappings | Product Clause Variable Mapping Input[] | Variable mappings for the product clause that must be updated. | Optional | 65.0 |

Response body for PATCH

[Product Clause Update Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_update_product_clause_output.htm "Output representation of the details for an updated product clause.")

## Code Examples

```
/connect/insurance/product-clauses/productClauseId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-clauses/0j4xx0000000001AAA
```

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
- Product Clause Update
       Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_update_product_clause_output.htm)
