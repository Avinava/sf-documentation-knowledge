---
title: "ConnectApi.ChangeItemFee​InputRepresentation"
domain: apex-reference
topic: connectapichangeitemfeeinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.613Z
estimatedTokens: 844
keywords: [ConnectApi.ChangeItemFee​InputRepresentation, Input, representation, Change, Item, Fee]
---

# ConnectApi.ChangeItemFee​InputRepresentation

> Input representation for Change Item Fee Input

# ConnectApi.ChangeItemFee​InputRepresentation

Input representation for Change Item Fee Input

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Positive value used to calculate the fee amount, as described by the amountType. | Required | 57.0 |
| amountType | String | Describes how the fee amount is calculated. Valid values are:AmountWithTax—Value of amount is the fee amount, including tax.AmountWithoutTax—Value of amount is the fee amount, not including tax. Tax is calculated on the value and added.Percentage—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalPrice and TotalTaxAmount of the associated OrderItemSummary, prorated for the quantity being returned.PercentageGross—Value of amount is a percentage. To determine the fee amount, amount is divided by 100, and then multiplied by the TotalLineAmountWithTax of the associated OrderItemSummary, prorated for the quantity being returned. | Required | 57.0 |
| description | String | Description of the fee. | Required | 57.0 |
| priceBookEntryId | String | ID of the price book entry associated with the fee product. | Required unless price books are optional in the org | 57.0 |
| product2Id | String | ID of the product representing the fee. | Required | 57.0 |
| reason | String | Reason for the fee. The value must match an entry in the OrderProductSummaryChange object’s Reason picklist. | Required | 57.0 |

#### See Also

-   [ConnectApi.ChangeInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change.htm "A list of changes to OrderItemSummaries that make up an order change, such as a cancel or return.")

-   [ConnectApi.ChangeItemInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_item.htm "Change to an order item summary, such as a return or cancel. You specify whether to prorate the associated shipping charge based on the price change. The order item summary can’t be a shipping charge.")

-   [previewCancel(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_previewCancel_1 "Retrieve the expected change order values for canceling one or more OrderItemSummaries from an OrderSummary, without actually executing the cancel.")

-   [previewReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_previewReturn_1 "Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.")

-   [submitCancel(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitCancel_1 "Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order.")

-   [submitReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitReturn_1 "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ChangeInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change.htm)
- ConnectApi.ChangeItemInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_item.htm)
- previewCancel(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- previewReturn(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- submitCancel(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- submitReturn(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
