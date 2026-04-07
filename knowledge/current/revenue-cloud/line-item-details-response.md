---
title: "Line Item Details Response"
domain: revenue-cloud
topic: line-item-details-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:46.344Z
estimatedTokens: 134
keywords: [Line, Item, pricing, process, execution, items]
---

> Output representation of the pricing process execution details for the line
    items.

# Line Item Details Response

Output representation of the pricing process execution details for the line items.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| lineItemId | String | ID of the line item that the pricing process is executed for. | Small, 63.0 | 63.0 |
| status | String | Specifies whether the pricing process execution for the line item is successful or has failed. Valid values are:SuccessFailure | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "lineItemDetailsList": [
    {
      "lineItemId": "LineItem1",
      "status": "Success"
    },
    {
      "lineItemId": "LineItem2",
      "status": "Success"
    },
    {
      "lineItemId": "LineItem3",
      "status": "Failure"
    }
  ]
}
```
