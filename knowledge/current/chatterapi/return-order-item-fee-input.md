---
title: "Return Order Item Fee Input"
domain: chatterapi
topic: return-order-item-fee-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.715Z
estimatedTokens: 426
keywords: [Order, Item, Fee, Input, ReturnOrderLineItem, representing, instructions, updating, read-only, Any, remaining, quantity, processed, added, new]
---

# Return Order Item Fee Input

> ID of a ReturnOrderLineItem representing a return fee, and
      instructions for updating it. After the update, the ReturnOrderLineItem is read-only. Any
      remaining quantity of the fee to be processed is added to a new
    ReturnOrderLineItem.

# Return Order Item Fee Input

ID of a ReturnOrderLineItem representing a return fee, and instructions for updating it. After the update, the ReturnOrderLineItem is read-only. Any remaining quantity of the fee to be processed is added to a new ReturnOrderLineItem.

Root XML tag

<returnOrderItemFeeInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| quantityReturned | Double | Quantity of the ReturnOrderLineItem to process. When the fee is a fixed amount, the charge is determined by multiplying the total fee amount by this value divided by the expected quantity. For example, if the fee amount is $10 and the expected quantity is 2, then if the quantityReturned is 1, $5 is charged. This value normally equals the quantity returned of the ReturnOrderLineItem for the returned item that the fee applies to. The value must be greater than zero. If this value plus quantityToCancel is less than the expected quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 56.0 |
| quantityToCancel | Double | Quantity of the ReturnOrderLineItem to remove. This value normally equals the quantity canceled of the ReturnOrderLineItem for the returned item that the fee applies to. This value can also be used to cancel a portion of the fee. The value must be zero or greater. If this value plus quantityReturned is less than the expected quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 56.0 |
| returnOrder​LineItemId | String | ID of the ReturnOrderLineItem representing the return fee. | Required | 56.0 |

## Code Examples

```
{
  "returnOrderLineItemId": "10uxx0000004GKbA23",
  "quantityReturned": "1",
  "quantityToCancel": "0"
}
```
