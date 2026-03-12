---
title: "Change Item Fee Input"
domain: chatterapi
topic: change-item-fee-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.229Z
estimatedTokens: 807
keywords: [Change, Item, Fee, Input, representation]
---

# Change Item Fee Input

> Input representation for Change Item Fee Input

# Change Item Fee Input

Input representation for Change Item Fee Input

Root XML tag

<changeItemFeeInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Positive value used to calculate the fee amount, as described by the amountType. | Required | 57.0 |
| amountType | String | Describes how the fee amount is calculated. Valid values are:AmountWithTax—Value of amount is the fee amount, including tax.AmountWithoutTax—Value of amount is the fee amount, not including tax. Tax is calculated on the value and added.Percentage—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalPrice and TotalTaxAmount of the associated OrderItemSummary, prorated for the quantity being returned.PercentageGross—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalLineAmountWithTax of the associated OrderItemSummary, prorated for the quantity being returned. | Required | 57.0 |
| description | String | Description of the fee. | Required | 57.0 |
| priceBookEntryId | String | ID of the price book entry associated with the fee product. | Required unless price books are optional in the org | 57.0 |
| product2Id | String | ID of the product representing the fee. | Required | 57.0 |
| reason | String | Reason for the fee. The value must match an entry in the OrderProductSummaryChange object’s Reason picklist. | Required | 57.0 |

#### See Also

-   [Order Summaries, Preview Cancel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_cancel.htm "Retrieve the expected change order values for canceling one or more OrderItemSummaries from an OrderSummary, without actually executing the cancel.")

-   [Order Summaries, Preview Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_return.htm "Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.")

-   [Order Summaries, Submit Cancel](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_cancel.htm "Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order.")

-   [Order Summaries, Submit Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")

-   [Change Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_input.htm "A list of changes to order item summaries that make up an order change, such as a cancel or return.")

-   [Change Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_input.htm "Change to an OrderItemSummary, such as a return or cancel. You specify whether to prorate the associated shipping charge based on the price change. The OrderItemSummary can’t be a shipping charge.")

## Code Examples

```
{
  "amount": "10",
  "amountType": "AmountWithoutTax",
  "description": "Restocking Fee",
  "product2Id": "10uxx0000004GKbAAM",
  "reason": "Other"
}
```

## Related Topics

- Order Summaries, Preview Cancel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_cancel.htm)
- Order Summaries, Preview Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_return.htm)
- Order Summaries, Submit Cancel (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_cancel.htm)
- Order Summaries, Submit Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm)
- Change Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_input.htm)
- Change Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_input.htm)
