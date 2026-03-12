---
title: "Eligible Promotions Input"
domain: revenue-cloud
topic: eligible-promotions-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.994Z
estimatedTokens: 162
keywords: [Eligible, Promotions, Input, representation, line, items, includes, accept, item, IDs, sales, transaction]
---

# Eligible Promotions Input

> Input representation of the request to get eligible promotions for line items. This
    representation includes the details to accept line item IDs and a sales transaction
    ID.

# Eligible Promotions Input

Input representation of the request to get eligible promotions for line items. This representation includes the details to accept line item IDs and a sales transaction ID.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lineItemIds | String[] | List of line item IDs to evaluate for promotions. The object type is auto-determined from the sales transaction ID. | Required | 66.0 |
| salesTransactionId | String | The sales transaction ID, such as an order ID or a quote ID, for the promotion evaluation. | Required | 66.0 |

## Code Examples

```
{
  "salesTransactionId": "0Q0xx0000004EOECA2",
  "lineItemIds": [
    "0QLxx0000004E7eGAE",
    "0QLxx0000004GCeGAM",
    "0QLxx0000004E7gGAE"
  ]
}
```
