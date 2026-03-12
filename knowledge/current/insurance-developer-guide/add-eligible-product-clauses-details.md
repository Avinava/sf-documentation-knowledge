---
title: "Add Eligible Product Clauses Details"
domain: insurance-developer-guide
topic: add-eligible-product-clauses-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.515Z
estimatedTokens: 159
keywords: [Add, Eligible, Product, Clauses, Output, representation, adding]
---

# Add Eligible Product Clauses Details

> Output representation for adding eligible product clauses.

# Add Eligible Product Clauses Details

Output representation for adding eligible product clauses.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Clause Error[] | List of errors that occurred during processing. | Big, 65.0 | 65.0 |
| quoteLineItem​InsProduct​ClauseIds | String[] | List of unique IDs for all insurance product clauses that are created for the specified quote line item | Big, 65.0 | 65.0 |
| success | Boolean | Indicates whether the operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "success": true,
  "quoteLineItemInsProductClauseIds": [
    "a1Cxx0000000001AAA"
  ],
  "errors": []
}
```

## Related Topics

- Product Clause Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_product_clause_error.htm)
