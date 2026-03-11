---
title: "ConnectApi.ReturnOrderLineItemInputRepresentation"
domain: apex-reference
topic: connectapireturnorderlineiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.550Z
keywords: [ConnectApi.ReturnOrderLineItemInputRepresentation, See]
---

# ConnectApi.ReturnOrderLineItemInputRepresentation

# ConnectApi.ReturnOrderLineItemInputRepresentation

Data for creating a ReturnOrderLineItem for an order item being returned, including data to create ReturnOrderLineItems representing any return fees associated with it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| canReduceShipping | Boolean | Whether to refund any associated shipping charge. | Required | 50.0 |
| orderItemSummaryId | String | ID of the associated OrderItemSummary. If the OrderItemSummary already has an associated ReturnOrderLineItem, then you must specify a different reasonForReturn. Duplicating the reason breaks the financial calculations. | Required | 50.0 |
| quantityExpected | Double | Quantity expected to be returned. This value also applies to any fees specified in returnOrderLineItemFees. | Required | 50.0 |
| quantityReceived | Double | Quantity already physically returned. | Optional | 50.0 |
| reasonForReturn | String | Reason for the return. The value must match an entry in both the OrderSummaryChange Reason field and the ReturnOrderLineItem object’s ReasonForReturn picklist. | Required if the returnOrder​LifeCycleType is MANAGED. | 50.0 |
| returnOrder​LineItemFees | List<ConnectApi.​ReturnOrder​LineItemFee​InputRepresentation> | List of input data for return fees associated with the order item being returned. A ReturnOrderLineItem of Type Fee is created to represent each fee. | Optional | 56.0 |

#### See Also

-   [ConnectApi.ReturnOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order.htm "Data for creating a ReturnOrder and ReturnOrderLineItems.")
    
-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")