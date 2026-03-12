---
title: "Return Order Line Item Input"
domain: chatterapi
topic: return-order-line-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.730Z
estimatedTokens: 465
keywords: [Order, Line, Item, Input, Data, creating, ReturnOrderLineItem, including, ReturnOrderLineItems, representing, any, fees, associated]
---

# Return Order Line Item Input

> Data for creating a ReturnOrderLineItem for an order item being
      returned, including data to create ReturnOrderLineItems representing any return fees
      associated with it.

# Return Order Line Item Input

Data for creating a ReturnOrderLineItem for an order item being returned, including data to create ReturnOrderLineItems representing any return fees associated with it.

Root XML tag

<returnOrderLineItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| canReduceShipping | Boolean | Whether to refund any associated shipping charge. | Required | 50.0 |
| orderItemSummaryId | String | ID of the associated OrderItemSummary. If the OrderItemSummary already has an associated ReturnOrderLineItem, then you must specify a different reasonForReturn. Duplicating the reason breaks the financial calculations. | Required | 50.0 |
| quantityExpected | Double | Quantity expected to be returned. This value also applies to any fees specified in returnOrderLineItemFees. | Required | 50.0 |
| quantityReceived | Double | Quantity already physically returned. | Optional | 50.0 |
| reasonForReturn | String | Reason for the return. The value must match an entry in both the OrderSummaryChange Reason field and the ReturnOrderLineItem object’s ReasonForReturn picklist. | Required if the returnOrder​LifeCycleType is MANAGED. | 50.0 |
| returnOrderLine​ItemFees | Return Order Line Item Fee Input[] | List of input data for return fees associated with the order item being returned. A ReturnOrderLineItem of Type Fee is created to represent each fee. | Optional | 56.0 |

#### See Also

-   [Return Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_input.htm "Data for creating a ReturnOrder and ReturnOrderLineItems.")

-   [Return Orders](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_return_orders.htm "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")

## Code Examples

```
{
  "quantityExpected": "1",
  "reasonForReturn": "Not Satisfied",
  "canReduceShipping": false,
  "orderItemSummaryId": "10uxx0000004GKbAAM",
  "quantityReceived": "0",
  "returnOrderLineItemFees": [
    {
      "amount": "10",
      "amountType": "AmountWithoutTax",
      "description": "Restocking Fee",
      "product2Id": "10uxx0000004GKbAAM",
      "reason": "Other"
    }
  ]
}
```

## Related Topics

- Return Order Line Item Fee Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_line_item_fee_input.htm)
- Return Order Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_return_order_input.htm)
- Return Orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_return_orders.htm)
