---
title: "Product Clause Update Details"
domain: insurance-developer-guide
topic: product-clause-update-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.703Z
estimatedTokens: 140
keywords: [Product, Clause, Output, representation, updated]
---

# Product Clause Update Details

> Output representation of the details for an updated product clause.

# Product Clause Update Details

Output representation of the details for an updated product clause.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Clause Error[] | List of errors that occurred during processing. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the update operation is successful (true) or not (false). | Big, 65.0 | 65.0 |
| productClauseId | String | ID of the product clause that's updated. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "productClauseId": "0j4xx0000000001AAA",
  "errors": []
}
```

## Related Topics

- Product Clause Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_product_clause_error.htm)
