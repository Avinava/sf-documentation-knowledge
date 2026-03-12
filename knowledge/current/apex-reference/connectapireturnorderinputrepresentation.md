---
title: "ConnectApi.ReturnOrderInputRepresentation"
domain: apex-reference
topic: connectapireturnorderinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.686Z
estimatedTokens: 435
keywords: [Data, creating, ReturnOrder, ReturnOrderLineItems]
---

# ConnectApi.ReturnOrderInputRepresentation

> Data for creating a ReturnOrder and
    ReturnOrderLineItems.

# ConnectApi.ReturnOrderInputRepresentation

Data for creating a ReturnOrder and ReturnOrderLineItems.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryId | String | ID of the OrderSummary containing the items to be returned. The OrderSummary’s OrderLifeCycleType must be Managed. | Required | 50.0 |
| refundInstructionsHint | List<ConnectApi.​RefundInstructionsHint​InputRepresentation> | The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing. | Optional | 65.0 |
| returnOrder​LifeCycleType | String | The LifeCycleType of the ReturnOrder. Possible values are:Managed—Process the ReturnOrder using the APIs and actions. It can generate change orders and affects financial fields and rollup calculations.Unmanaged—The ReturnOrder is for tracking purposes only. It isn’t involved in any financial calculations and doesn’t generate any change orders. The system doesn’t prevent the creation of duplicate ReturnOrderLineItems in an unmanaged ReturnOrder for the same OrderItem. | Required | 51.0 |
| returnOrderLineItems | List<ConnectApi.​ReturnOrderLineItem​InputRepresentation> | List of data for creating ReturnOrderLineItems. | At least one element is required | 50.0 |
| status | String | Status to assign the ReturnOrder. This value must match an entry in the ReturnOrder object’s Status picklist. | Required | 51.0 |

#### See Also

-   [createReturnOrder(returnOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_createReturnOrder_1 "Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary.")

## Related Topics

- ConnectApi.​RefundInstructionsHint​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order_line_item.htm)
- ConnectApi.​ReturnOrderLineItem​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_return_order_line_item.htm)
- createReturnOrder(returnOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm)
