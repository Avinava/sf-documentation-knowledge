---
title: "Return Order Item Split Line Output"
domain: chatterapi
topic: return-order-item-split-line-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.999Z
estimatedTokens: 236
keywords: [Order, Item, Split, Line, Output, change, created, ReturnOrderLineItem, read-only, Items, API, partial, quantity, creates, new]
---

# Return Order Item Split Line Output

> After a change order is created for a ReturnOrderLineItem, that
      ReturnOrderLineItem is read-only. If the Return Items API is used to return a partial
      quantity, it creates a new “split” ReturnOrderLineItem to hold the remaining quantity to be
      returned. In that case, it returns this output property, which contains the IDs of the
      original and split ReturnOrderLineItems.

# Return Order Item Split Line Output

After a change order is created for a ReturnOrderLineItem, that ReturnOrderLineItem is read-only. If the Return Items API is used to return a partial quantity, it creates a new “split” ReturnOrderLineItem to hold the remaining quantity to be returned. In that case, it returns this output property, which contains the IDs of the original and split ReturnOrderLineItems.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 52.0 | 52.0 |
| new​ReturnOrderItemId | String | ID of the new ReturnOrderLineItem that holds the remaining return quantity. | Big, 52.0 | 52.0 |
| original​ReturnOrderItemId | String | ID of the original ReturnOrderLineItem. | Big, 52.0 | 52.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 52.0 | 52.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
