---
title: "createReturnOrder(returnOrderInput)"
domain: apex-reference
topic: createreturnorderreturnorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.734Z
keywords: [createReturnOrder, returnOrderInput, Create, ReturnOrder, ReturnOrderLineItems, items, belonging, OrderSummary., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, See]
---

# createReturnOrder(returnOrderInput)

> Create a ReturnOrder and ReturnOrderLineItems for items belonging to
      an OrderSummary.

### createReturnOrder(returnOrderInput)

Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ReturnOrderOutputRepresentation createReturnOrder(ConnectApi.ReturnOrderInputRepresentation returnOrderInput)

#### Parameters

returnOrderInput

Type: [ConnectApi.ReturnOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order.htm "Data for creating a ReturnOrder and ReturnOrderLineItems.")

Data for creating a ReturnOrder and ReturnOrderLineItems.

#### Return Value

Type: [ConnectApi.ReturnOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_order_output.htm "ID of the created ReturnOrder.")

#### See Also

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")