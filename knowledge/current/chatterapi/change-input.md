---
title: "Change Input"
domain: chatterapi
topic: change-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.224Z
estimatedTokens: 385
keywords: [Change, Input, changes, order, item, summaries, cancel]
---

# Change Input

> A list of changes to order item summaries that make up an order change, such as a
    cancel or return.

# Change Input

A list of changes to order item summaries that make up an order change, such as a cancel or return.

Root XML tag

<changeInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeItems | Change Item Input[] | List of changes to OrderItemSummaries. | Required | 48.0 |

#### See Also

-   [Order Summaries, Preview Cancel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_cancel.htm "Retrieve the expected change order values for canceling one or more OrderItemSummaries from an OrderSummary, without actually executing the cancel.")

-   [Order Summaries, Preview Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_return.htm "Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.")

-   [Order Summaries, Submit Cancel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_cancel.htm "Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order.")

-   [Order Summaries, Submit Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")

## Code Examples

```
{
  "changeItems": [
    {
      "orderItemSummaryId": "10uxx0000004FYDAA2",
      "quantity": 1.0,
      "reason": "Wrong Item",
      "shippingReductionFlag": true
    }
  ]
}
```

## Related Topics

- Change Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_input.htm)
- Order Summaries, Preview Cancel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_cancel.htm)
- Order Summaries, Preview Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_return.htm)
- Order Summaries, Submit Cancel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_cancel.htm)
- Order Summaries, Submit Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm)
