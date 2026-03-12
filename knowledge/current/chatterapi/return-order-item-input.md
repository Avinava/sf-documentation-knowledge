---
title: "Return Order Item Input"
domain: chatterapi
topic: return-order-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.719Z
estimatedTokens: 456
keywords: [Order, Item, Input, ReturnOrderLineItem, instructions, updating, read-only, Any, remaining, quantity, added, new]
---

# Return Order Item Input

> ID of a ReturnOrderLineItem and instructions for updating it. After
      the update, the ReturnOrderLineItem is read-only. Any remaining quantity to be returned is
      added to a new ReturnOrderLineItem.

# Return Order Item Input

ID of a ReturnOrderLineItem and instructions for updating it. After the update, the ReturnOrderLineItem is read-only. Any remaining quantity to be returned is added to a new ReturnOrderLineItem.

Root XML tag

<returnOrderItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| quantityReceived | Double | The quantity of the ReturnOrderLineItem that has been received. The value must be zero or greater. This value isn’t used by any standard features, but is provided for use in customizations. | Required | 52.0 |
| quantityRejected | Double | The quantity of the ReturnOrderLineItem that has been rejected for return. The value must be zero or greater. This value isn’t used by any standard features, but is provided for use in customizations. | Required | 52.0 |
| quantityReturned | Double | The quantity of the ReturnOrderLineItem that has been returned. The value must be greater than zero. If this value plus quantityToCancel is less than the expected return quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 52.0 |
| quantityToCancel | Double | The quantity of the ReturnOrderLineItem to remove because it’s not being returned. The value must be zero or greater. If this value plus quantityReturned is less than the expected return quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 52.0 |
| reasonForRejection | String | The reason why the rejected quantity, if any, was rejected. This value isn’t used by any standard features, but is provided for use in customizations. | Optional | 52.0 |
| returnOrder​LineItemId | String | The ID of the ReturnOrderLineItem. | Required | 52.0 |

## Code Examples

```
{
  "returnOrderLineItemId": "10uxx0000004GKbAAM",
  "quantityReturned": "1",
  "quantityToCancel": "0",
  "quantityReceived": "1",
  "quantityRejected": "0",
  "reasonForRejection": "N/A"
}
```
