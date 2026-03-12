---
title: "ConnectApi.ReturnOrderItemInputRepresentation"
domain: apex-reference
topic: connectapireturnorderiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.506Z
estimatedTokens: 679
keywords: [ConnectApi.ReturnOrderItemInputRepresentation, ReturnOrderLineItem, instructions, updating, it., After, update, read-only., Any, remaining, quantity, returned, added, new, ReturnOrderLineItem.]
---

# ConnectApi.ReturnOrderItemInputRepresentation

> ID of a ReturnOrderLineItem and instructions for updating it. After
      the update, the ReturnOrderLineItem is read-only. Any remaining quantity to be returned is
      added to a new ReturnOrderLineItem.

# ConnectApi.ReturnOrderItemInputRepresentation

ID of a ReturnOrderLineItem and instructions for updating it. After the update, the ReturnOrderLineItem is read-only. Any remaining quantity to be returned is added to a new ReturnOrderLineItem.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| quantityReceived | Double | The quantity of the ReturnOrderLineItem that has been received. The value must be zero or greater. This value isn’t used by any standard features, but is provided for use in customizations. | Optional | 52.0 |
| quantityRejected | Double | The quantity of the ReturnOrderLineItem that has been rejected for return. The value must be zero or greater. This value isn’t used by any standard features, but is provided for use in customizations. | Optional | 52.0 |
| quantityReturned | Double | The quantity of the ReturnOrderLineItem that has been returned. The value must be greater than zero. If this value plus quantityToCancel is less than the expected return quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Required | 52.0 |
| quantityToCancel | Double | The quantity of the ReturnOrderLineItem to remove because it’s not being returned. The value must be zero or greater. If this value plus quantityReturned is less than the expected return quantity, then the remaining quantity to be returned is added to a new ReturnOrderLineItem. | Optional | 52.0 |
| reasonForRejection | String | The reason why the rejected quantity, if any, was rejected. This value isn’t used by any standard features, but is provided for use in customizations. | Optional | 52.0 |
| returnOrder​LineItemId | String | The ID of the ReturnOrderLineItem. | Required | 52.0 |

#### See Also

-   [ConnectApi.ReturnItemsInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm "Data about products and delivery charges to return, as well as associated return fees.")

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ReturnItemsInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_items.htm)
- returnItems(returnOrderId, returnItemsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm)
