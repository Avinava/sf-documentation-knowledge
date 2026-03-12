---
title: "ConnectApi.ReturnOrderItemFeeInputRepresentation"
domain: apex-reference
topic: connectapireturnorderitemfeeinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.512Z
estimatedTokens: 647
keywords: [ConnectApi.ReturnOrderItemFeeInputRepresentation, ReturnOrderLineItem, representing, fee, instructions, updating, it., After, update, read-only., Any, remaining, quantity, processed, added, new, ReturnOrderLineItem.]
---

# ConnectApi.ReturnOrderItemFeeInputRepresentation

> ID of a ReturnOrderLineItem representing a return fee, and
      instructions for updating it. After the update, the ReturnOrderLineItem is read-only. Any
      remaining quantity of the fee to be processed is added to a new
    ReturnOrderLineItem.

# ConnectApi.ReturnOrderItemFeeInputRepresentation

ID of a ReturnOrderLineItem representing a return fee, and instructions for updating it. After the update, the ReturnOrderLineItem is read-only. Any remaining quantity of the fee to be processed is added to a new ReturnOrderLineItem.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| quantityReturned | Double | Quantity of the ReturnOrderLineItem to process. When the fee is a fixed amount, the charge is determined by multiplying the total fee amount by this value divided by the expected quantity. For example, if the fee amount is $10 and the expected quantity is 2, then if the quantityReturned is 1, $5 is charged. This value normally equals the quantity returned of the ReturnOrderLineItem for the returned item that the fee applies to. The value must be greater than zero. If this value plus quantityToCancel is less than the expected quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 56.0 |
| quantityToCancel | Double | Quantity of the ReturnOrderLineItem to remove. This value normally equals the quantity canceled of the ReturnOrderLineItem for the returned item that the fee applies to. This value can also be used to cancel a portion of the fee. The value must be zero or greater. If this value plus quantityReturned is less than the expected quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 56.0 |
| returnOrder​LineItemId | String | ID of the ReturnOrderLineItem representing the return fee. | Required | 56.0 |

#### See Also

-   [ConnectApi.ReturnItemsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm "Data about products and delivery charges to return, as well as associated return fees.")

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ReturnItemsInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm)
- returnItems(returnOrderId, returnItemsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm)
