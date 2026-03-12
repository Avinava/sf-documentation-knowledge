---
title: "Insurance Get Eligible Clauses Input"
domain: insurance-developer-guide
topic: insurance-get-eligible-clauses-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.828Z
estimatedTokens: 173
keywords: [Insurance, Eligible, Clauses, Input, representation, product]
---

# Insurance Get Eligible Clauses Input

> Input representation for get eligible insurance product clauses.

# Insurance Get Eligible Clauses Input

Input representation for get eligible insurance product clauses.

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

## Code Examples

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
