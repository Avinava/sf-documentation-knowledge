---
title: "Change Item Input"
domain: chatterapi
topic: change-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.243Z
estimatedTokens: 632
keywords: [Change, Item, Input, OrderItemSummary, cancel, specify, whether, prorate, associated, shipping, charge, price, can’t]
---

# Change Item Input

> Change to an OrderItemSummary, such as a return or cancel. You
      specify whether to prorate the associated shipping charge based on the price change. The
      OrderItemSummary can’t be a shipping charge.

# Change Item Input

Change to an OrderItemSummary, such as a return or cancel. You specify whether to prorate the associated shipping charge based on the price change. The OrderItemSummary can’t be a shipping charge.

Root XML tag

<changeItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeItemFees | Change Item Fee Input[] | List of input data for fees associated with the order item being returned or canceled. | Optional | 57.0 |
| orderItem​SummaryId | String | ID of the order item summary. | Required | 48.0 |
| quantity | Double | Quantity to change. Use a positive value. For example, a value of 2 means “cancel or return 2 units.” | Required | 48.0 |
| reason | String | Reason for the change. The value must match one of the picklist values on the Reason field of the OrderItemSummaryChange object. | Required | 48.0 |
| reasonForChangeText | String | Reason text used for the return insights. The value has a max of 255 characters. | Optional | 59.0 |
| shippingReduction​Flag | Boolean | Specifies whether to prorate the shipping charge. | Required | 48.0 |

#### See Also

-   [Order Summaries, Preview Cancel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_cancel.htm "Retrieve the expected change order values for canceling one or more OrderItemSummaries from an OrderSummary, without actually executing the cancel.")

-   [Order Summaries, Preview Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_return.htm "Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.")

-   [Order Summaries, Submit Cancel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_cancel.htm "Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order.")

-   [Order Summaries, Submit Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")

-   [Change Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_input.htm "A list of changes to order item summaries that make up an order change, such as a cancel or return.")

## Code Examples

```
{
  "orderItemSummaryId": "10uxx0000004FYDAA2",
  "quantity": 1.0,
  "reason": "Wrong Item",
  "shippingReductionFlag": true
}
```

## Related Topics

- Change Item Fee Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_fee_input.htm)
- Order Summaries, Preview Cancel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_cancel.htm)
- Order Summaries, Preview Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_return.htm)
- Order Summaries, Submit Cancel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_cancel.htm)
- Order Summaries, Submit Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm)
- Change Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_input.htm)
