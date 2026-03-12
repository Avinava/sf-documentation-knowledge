---
title: "Insurance Product Clause Bulk (POST)"
domain: insurance-developer-guide
topic: insurance-product-clause-bulk-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.230Z
estimatedTokens: 177
keywords: [Insurance, Product, Clause, Bulk, POST, multiple, clauses, once]
---

# Insurance Product Clause Bulk (POST)

> Create one or multiple product clauses at once.

# Insurance Product Clause Bulk (POST)

Create one or multiple product clauses at once.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productClauses | Product Clause Input[] | Details to create product clauses. | Required | 65.0 |

Response body for POST

[Product Clause Creation Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_create_product_clause_list_output.htm "Output representation for the bulk creation of product clauses.")

## Code Examples

```
/connect/insurance/product-clauses/bulk
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-clauses/bulk
```

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
- Product Clause Creation
       Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_create_product_clause_list_output.htm)
