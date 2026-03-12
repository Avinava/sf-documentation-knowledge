---
title: "ConnectApi.ReturnOrderLineItemFeeInputRepresentation"
domain: apex-reference
topic: connectapireturnorderlineitemfeeinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.524Z
estimatedTokens: 603
keywords: [ConnectApi.ReturnOrderLineItemFeeInputRepresentation, Data, creating, ReturnOrderLineItem, represents, fee.]
---

# ConnectApi.ReturnOrderLineItemFeeInputRepresentation

> Data for creating a ReturnOrderLineItem that represents a return
      fee.

# ConnectApi.ReturnOrderLineItemFeeInputRepresentation

Data for creating a ReturnOrderLineItem that represents a return fee.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Value used to calculate the fee amount, as described by the amountType. It must be a positive value. | Required | 56.0 |
| amountType | String | Describes how the fee amount is calculated. It can have one of these values:AmountTaxOnly—Value of amount is the tax-only adjustment only. Available in version 65.0 and later.AmountWithTax—Value of amount is the fee amount, including tax.AmountWithoutTax—Value of amount is the fee amount, not including tax. Tax is calculated on the value and added.Percentage—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalPrice and TotalTaxAmount of the associated OrderItemSummary, prorated for the quantity being returned.PercentageGross—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalLineAmountWithTax of the associated OrderItemSummary, prorated for the quantity being returned.ProductOnly—Value of amount is the product-only adjustment only. Available in version 65.0 and later. | Required | 56.0 |
| description | String | Description of the fee. | Required | 56.0 |
| product2Id | String | ID of the product representing the fee. | Required | 56.0 |
| reason | String | Reason for the fee. The value must match an entry in the ReturnOrderLineItem object’s ReasonForReturn picklist. | Required | 56.0 |

#### See Also

-   [ConnectApi.ReturnOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order.htm "Data for creating a ReturnOrder and ReturnOrderLineItems.")

-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")

-   [ConnectApi.ReturnOrderLineItemInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order_line_item.htm "Data for creating a ReturnOrderLineItem for an order item being returned, including data to create ReturnOrderLineItems representing any return fees associated with it.")

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ReturnOrderInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order.htm)
- createReturnOrder(returnOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm)
- ConnectApi.ReturnOrderLineItemInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order_line_item.htm)
