---
title: "Insurance Eligible Product Clauses Get (POST)"
domain: insurance-developer-guide
topic: insurance-eligible-product-clauses-get-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.195Z
estimatedTokens: 264
keywords: [Insurance, Eligible, Product, Clauses, POST, quoteId, contextId]
---

# Insurance Eligible Product Clauses Get (POST)

> Get eligible product clauses based on quoteId and
  contextId.

# Insurance Eligible Product Clauses Get (POST)

Get eligible product clauses based on quoteId and contextId.

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
| contextId | String | ID of context. | Required if quoteId isn't specified | 65.0 |
| instanceKey | String[] | List of product instance IDs from the root product to the target quote line item. | Required if quoteLineItemId isn't specified | 65.0 |
| quoteId | String | ID of the quote. | Required if contextId isn't specified | 65.0 |
| quoteLine​ItemId | String | ID of the quote line item. | Required if instanceKey isn't specified | 65.0 |

Response body for POST

[Insurance Get Eligible Product Clauses](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_get_eligible_clauses_output.htm "Output representation for eligible clauses.")

## Code Examples

```
/connect/insurance/product-clauses/eligible-product-clauses
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/product-clauses/eligible-product-clauses
```

```
{
  "contextId": "0000000i18tq18g0025175944829641764efd423f7dc44b98dd1e829086efc59",
  "instanceKey": [
    "a3Nxx000000CmikEAC"
  ],
  "quoteId": "0Q0xx000000Dm3jCAC",
  "quoteLineItemId": "0QLxx000000E5d1OAC"
}
```

## Related Topics

- Insurance Get Eligible
       Product Clauses (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_get_eligible_clauses_output.htm)
