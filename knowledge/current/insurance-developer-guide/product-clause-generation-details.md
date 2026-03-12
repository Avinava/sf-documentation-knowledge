---
title: "Product Clause Generation Details"
domain: insurance-developer-guide
topic: product-clause-generation-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.537Z
estimatedTokens: 149
keywords: [Product, Clause, Generation, Output, representation]
---

# Product Clause Generation Details

> Output representation of the details for a clause generation request.

# Product Clause Generation Details

Output representation of the details for a clause generation request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| asyncBulk​RequestId | String | Asynchronous bulk request ID for tracking the clause generation process. | Big, 65.0 | 65.0 |
| errors | Product Clause Error[] | List of errors that occurred during processing. | Big, 65.0 | 65.0 |
| success | Boolean | Indicates whether the operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "success": true,
  "asyncBulkRequestId": "750xx0000000001AAA",
  "errors": []
}
```

## Related Topics

- Product Clause Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_product_clause_error.htm)
