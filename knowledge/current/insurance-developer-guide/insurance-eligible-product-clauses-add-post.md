---
title: "Insurance Eligible Product Clauses Add (POST)"
domain: insurance-developer-guide
topic: insurance-eligible-product-clauses-add-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.154Z
estimatedTokens: 332
keywords: [Insurance, Eligible, Product, Clauses, Add, POST, selected, quote, context]
---

# Insurance Eligible Product Clauses Add (POST)

> Add selected eligible product clauses to a quote or
  context.

# Insurance Eligible Product Clauses Add (POST)

Add selected eligible product clauses to a quote or context.

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
| contextId | String | ID of the context. | Required if quoteId isn't specified | 65.0 |
| instanceKey | String[] | List of product instance IDs from the root product to the target quote line item. | Required if quoteLineItemId isn't specified | 65.0 |
| insurance​Product​Clauses | Insurance Product Clause Input[] | List of insurance product clauses to add. | Required | 65.0 |
| options | Add Eligible Product Clauses Options Input | Options for adding eligible product clauses. | Optional | 65.0 |
| quoteId | String | ID of the quote. | Required if contextId isn't specified | 65.0 |
| quoteLine​ItemId | String | ID of the quote line item. | Required if instanceKey isn't specified | 65.0 |

Response body for POST

[Add Eligible Product Clauses Details](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_add_eligible_product_clauses_output.htm "Output representation for adding eligible product clauses.")

## Code Examples

```
/connect/insurance/product-clauses/add-eligible-product-clauses
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-clauses/add-eligible-product-clauses
```

```
{
  "quoteId": "0Q0xx0000000001AAA",
  "quoteLineItemId": "0QLxx0000000002BBB",
  "contextId": "0j5xx0000000003CCC",
  "instanceKey": ["Auto", "Liability"],
  "insuranceProductClauses": [
    {
      "insuranceProductClauseId": "0j4xx0000000004DDD",
      "effectiveDate": "2025-01-01",
      "expirationDate": "2025-12-31"
    }
  ],
  "options": {
    "saveContext": false
  }
}
```

## Related Topics

- Insurance Product Clause Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_product_clause_input.htm)
- Add Eligible Product Clauses Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_add_eligible_product_clauses_options_input.htm)
- Add Eligible Product Clauses
       Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_add_eligible_product_clauses_output.htm)
