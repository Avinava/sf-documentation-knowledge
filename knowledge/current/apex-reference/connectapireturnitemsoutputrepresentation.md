---
title: "ConnectApi.ReturnItemsOutputRepresentation"
domain: apex-reference
topic: connectapireturnitemsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:28.924Z
estimatedTokens: 574
keywords: [ConnectApi.ReturnItemsOutputRepresentation, Output, Items., Includes, generated, change, order, items, delivery, charges, being, returned, well, any, charged, fees., includes, information, ReturnOrderLineItems, were]
---

# ConnectApi.ReturnItemsOutputRepresentation

> Output of Return Items. Includes the ID of the generated change
      order for items and delivery charges being returned, as well as the ID of the generated change
      order for any charged return fees. Also includes information about any ReturnOrderLineItems
      that were created to represent remaining return quantities.

# ConnectApi.ReturnItemsOutputRepresentation

Output of Return Items. Includes the ID of the generated change order for items and delivery charges being returned, as well as the ID of the generated change order for any charged return fees. Also includes information about any ReturnOrderLineItems that were created to represent remaining return quantities.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changeOrderId | String | ID of the change order created by processing the ReturnOrderLineItems representing returned items and delivery charges. Use this change order to create a credit memo. | 52.0 |
| feeChangeOrderId | String | ID of the change order created by processing the ReturnOrderLineItems representing return fees. Use this change order to create an invoice. | 56.0 |
| RefundInstructionsHint | String | Stores a JSON representation of the payment credit and refund sequences for ensure credit and ensure refund. | 65.0 |
| returnLineItem​Splits | List<ConnectApi.​ReturnOrderItem​SplitLine​OutputRepresentation> | List of properties representing any remaining quantities from partial returns processed by this call. It includes order items, delivery charges, and return fees. Each element of the list includes the ID of a split ReturnOrderLineItem and the ID of the partially processed ReturnOrderLineItem whose remaining quantity it holds. | 52.0 |

#### See Also

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ReturnOrderItem​SplitLine​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_order_item_split_line_output.htm)
- returnItems(returnOrderId, returnItemsInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm)
