---
title: "Return Order Line Item Fee Input"
domain: chatterapi
topic: return-order-line-item-fee-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.724Z
estimatedTokens: 592
keywords: [Order, Line, Item, Fee, Input, Data, creating, ReturnOrderLineItem]
---

# Return Order Line Item Fee Input

> Data for creating a ReturnOrderLineItem that represents a return
      fee.

# Return Order Line Item Fee Input

Data for creating a ReturnOrderLineItem that represents a return fee.

Root XML tag

<returnOrderLineItemFeeInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Value used to calculate the fee amount, as described by the amountType. It must be a positive value. | Required | 56.0 |
| amountType | String | Describes how the fee amount is calculated. It can have one of these values:AmountTaxOnly—Value of amount is the tax-only adjustment only. Available in version 65.0 and later.AmountWithTax—Value of amount is the fee amount, including tax.AmountWithoutTax—Value of amount is the fee amount, not including tax. Tax is calculated on the value and added.Percentage—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalPrice and TotalTaxAmount of the associated OrderItemSummary, prorated for the quantity being returned.PercentageGross—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalLineAmountWithTax of the associated OrderItemSummary, prorated for the quantity being returned.ProductOnly—Value of amount is the product-only adjustment only. Available in version 65.0 and later. | Required | 56.0 |
| description | String | Description of the fee. | Required | 56.0 |
| product2Id | String | ID of the product representing the fee. | Required | 56.0 |
| reason | String | Reason for the fee. The value must match an entry in the ReturnOrderLineItem object’s ReasonForReturn picklist. | Required | 56.0 |

#### See Also

-   [Return Order Line Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_line_item_input.htm "Data for creating a ReturnOrderLineItem for an order item being returned, including data to create ReturnOrderLineItems representing any return fees associated with it.")

-   [Return Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_input.htm "Data for creating a ReturnOrder and ReturnOrderLineItems.")

-   [Return Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_return_orders.htm "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")

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

- Return Order Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_line_item_input.htm)
- Return Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_input.htm)
- Return Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_return_orders.htm)
