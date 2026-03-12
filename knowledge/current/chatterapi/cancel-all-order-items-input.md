---
title: "Cancel All Order Items Input"
domain: chatterapi
topic: cancel-all-order-items-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.155Z
estimatedTokens: 198
keywords: [Cancel, Order, Items, Input, Cancellation]
---

# Cancel All Order Items Input

> Cancellation of all items in an order.

# Cancel All Order Items Input

Cancellation of all items in an order.

Root XML tag

cancelAllOrderItemsInput

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeItemFees | Change Item Fee with Tax Input | List of input data for fees, including taxes, associated with the order items being canceled. | Optional | 63.0 |
| excludedItems | String[] | List of items excluded from cancellation. | Optional | 63.0 |
| reason | String | Reason for the cancellation. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object. | Required | 63.0 |
| reasonText | String | Reason text used for the return insights. The value has a max of 255 characters. | Optional | 63.0 |

## Related Topics

- Change Item Fee with Tax
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_fee_with_tax_input.htm)
