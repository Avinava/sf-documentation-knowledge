---
title: "ConnectApi.ChangeItemInputRepresentation"
domain: apex-reference
topic: connectapichangeiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.608Z
estimatedTokens: 666
keywords: [ConnectApi.ChangeItemInputRepresentation, Change, order, item, summary, such, cancel., specify, whether, prorate, associated, shipping, charge, based, price, change., can’t, charge.]
---

# ConnectApi.ChangeItemInputRepresentation

> Change to an order item summary, such as a return or cancel. You specify whether to
    prorate the associated shipping charge based on the price change. The order item summary can’t
    be a shipping charge.

# ConnectApi.ChangeItemInputRepresentation

Change to an order item summary, such as a return or cancel. You specify whether to prorate the associated shipping charge based on the price change. The order item summary can’t be a shipping charge.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeItemFees | List<ChangeItemFee> | List of input data for fees associated with the order item being returned or canceled. | Optional | 57.0 |
| orderItemSummaryId | String | ID of the order item summary. | Required | 48.0 |
| quantity | Double | Quantity to change. Use a positive value. For example, a value of 2 means “cancel or return 2 units.” | Required | 48.0 |
| reason | String | Reason for the change. The value must match one of the picklist values on the Reason field of the OrderItemSummaryChange object. | Required | 48.0 |
| reasonForChangeText | String | Reason text used for the return insights. The value has a max of 255 characters. | Optional | 59.0 |
| shippingReductionFlag | Boolean | Specifies whether to prorate the shipping charge. | Required | 48.0 |

#### See Also

-   [ConnectApi.ChangeInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change.htm "A list of changes to OrderItemSummaries that make up an order change, such as a cancel or return.")

-   [previewCancel(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_previewCancel_1 "Retrieve the expected change order values for canceling one or more OrderItemSummaries from an OrderSummary, without actually executing the cancel.")

-   [previewReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_previewReturn_1 "Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.")

-   [submitCancel(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitCancel_1 "Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order.")

-   [submitReturn(orderSummaryId, changeInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_submitReturn_1 "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ChangeItemFee (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_item_fee.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.ChangeInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change.htm)
- previewCancel(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- previewReturn(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- submitCancel(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
- submitReturn(orderSummaryId, changeInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm)
