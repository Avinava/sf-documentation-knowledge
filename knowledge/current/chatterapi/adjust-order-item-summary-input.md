---
title: "Adjust Order Item Summary Input"
domain: chatterapi
topic: adjust-order-item-summary-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.955Z
estimatedTokens: 529
keywords: [Adjust, Order, Item, Summary, Input, Price, adjustments, summaries, together, adjustment, options, adjusting, items, process, fulfilled]
---

# Adjust Order Item Summary Input

> Price adjustments to order item summaries that together make up a price adjustment to
    an order, with options for adjusting items in the process of being fulfilled.

# Adjust Order Item Summary Input

Price adjustments to order item summaries that together make up a price adjustment to an order, with options for adjusting items in the process of being fulfilled.

Root XML tag

<adjustOrderItemSummaryInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustItems | Adjust Item Input[] | List of price adjustments to order item summaries. | Required | 49.0 |
| allocatedItems​ChangeOrderType | String | Process to use for order item summary quantities that are currently being fulfilled, defined as QuantityAllocated - QuantityFulfilled. Values are:Disallowed—When distributing the adjustment, ignore any quantities being fulfilled. If an order item summary’s entire quantity is being fulfilled, return an error. This is the default value.InFulfillment—When distributing the adjustment, include quantities being fulfilled. Create a separate change order for the adjustments made to those quantities.PreFulfillment—When distributing the adjustment, include quantities being fulfilled. Include the adjustments made to those quantities in the change order for pre-fulfillment quantity adjustments. | Optional | 55.0 |
| individualLineItemTaxAdjustments | Boolean | Specifies whether to create multiple lines for each tax adjustment or one line with all tax adjustments. The default value is false. | Optional | 59.0 |

#### See Also

-   [Order Summaries, Preview Adjust](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_adjust.htm "Retrieve the expected results of adjusting the price of one or more OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The response data contains the financial changes that would result from submitting the proposed adjustment.")

-   [Order Summaries, Submit Adjust](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_adjust.htm "Adjust the price of one or more OrderItemSummaries from an OrderSummary, and create corresponding change orders.")

## Code Examples

```
{
  "adjustItems": [{
    "reason": "Unknown",
    "amount": -45,
    "adjustmentType": "AmountWithoutTax",
    "orderItemSummaryId": "10uxx0000004EXLAA2",
    "description": "foobar"
  }],
  "allocatedItemsChangeOrderType": "Disallowed"
}
```

## Related Topics

- Adjust Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_adjust_item_input.htm)
- Order Summaries, Preview Adjust (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_adjust.htm)
- Order Summaries, Submit Adjust (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_adjust.htm)
