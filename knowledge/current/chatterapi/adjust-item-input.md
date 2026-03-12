---
title: "Adjust Item Input"
domain: chatterapi
topic: adjust-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.951Z
estimatedTokens: 602
keywords: [Adjust, Item, Input, price, adjustment, OrderItemSummary, supports, discounts, increases]
---

# Adjust Item Input

> A price adjustment to an OrderItemSummary. It only supports
      discounts, not increases.

# Adjust Item Input

A price adjustment to an OrderItemSummary. It only supports discounts, not increases.

Root XML tag

<adjustItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentType | String | Describes how the amount is calculated. It can have one of these values:AmountTaxOnly—Value of amount is the tax-only adjustment only. Available in version 65.0 and later.AmountWithTax—Value of amount is the adjustment, including tax.AmountWithoutTax—Value of amount is the adjustment, not including tax. Tax is calculated on the value and added.Percentage—Value of amount is a percentage discount. It is divided by 100, and then multiplied by the TotalPrice and TotalTaxAmount of the OrderItemSummary to determine the adjustment amount.ProductOnly——Value of amount is the product-only adjustment only. Available in version 65.0 and later. | Required | 49.0 |
| amount | Double | Value used to calculate the adjustment amount, as described by the adjustmentType. It must be a negative value. | Required | 49.0 |
| description | String | Description of the adjustment. | Optional | 49.0 |
| orderItemSummaryId | String | ID of the OrderItemSummary. | Required | 49.0 |
| reason | String | Reason for the adjustment. The value must match one of the picklist values on the Reason field of the OrderItemSummaryChange object. | Required | 49.0 |

#### See Also

-   [Order Summaries, Preview Adjust](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_adjust.htm "Retrieve the expected results of adjusting the price of one or more OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The response data contains the financial changes that would result from submitting the proposed adjustment.")

-   [Order Summaries, Submit Adjust](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_adjust.htm "Adjust the price of one or more OrderItemSummaries from an OrderSummary, and create corresponding change orders.")

-   [Adjust Order Item Summary Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_adjust_order_item_summary_input.htm "Price adjustments to order item summaries that together make up a price adjustment to an order, with options for adjusting items in the process of being fulfilled.")

## Code Examples

```
{
  "reason": "Unknown",
  "amount": -45,
  "adjustmentType": "AmountWithoutTax",
  "orderItemSummaryId": "10uxx0000004EXLAA2",
  "description": "foobar"
}
```

## Related Topics

- Order Summaries, Preview Adjust (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_adjust.htm)
- Order Summaries, Submit Adjust (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_adjust.htm)
- Adjust Order Item Summary Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_adjust_order_item_summary_input.htm)
