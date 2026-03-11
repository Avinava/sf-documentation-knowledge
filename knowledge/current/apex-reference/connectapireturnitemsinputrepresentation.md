---
title: "ConnectApi.ReturnItemsInputRepresentation"
domain: apex-reference
topic: connectapireturnitemsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.535Z
keywords: [ConnectApi.ReturnItemsInputRepresentation, See]
---

# ConnectApi.ReturnItemsInputRepresentation

# ConnectApi.ReturnItemsInputRepresentation

Data about products and delivery charges to return, as well as associated return fees.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| refundInstructionsHint | List<ConnectApi.​RefundInstructionsHint​InputRepresentation> | The payment credit sequence, credit types, and refund sequence that provide information for optimal refund processing. | Optional | 65.0 |
| returnOrderItem​DeliveryCharges | List<ConnectApi.​ReturnOrderItem​DeliveryCharge​InputRepresentation> | List of ReturnOrderLineItems to return that represent delivery charges. | Optional | 52.0 |
| returnOrderItemFees | List<ConnectApi.​ReturnOrderItemFee​InputRepresentation> | List of ReturnOrderLineItems to process that represent return fees. | Optional | 56.0 |
| returnOrderItems | List<ConnectApi.​ReturnOrderItem​InputRepresentation> | List of ReturnOrderLineItems to process that represent products, along with data about how to process them. | Required | 52.0 |

#### See Also

-   [returnItems(returnOrderId, returnItemsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ReturnOrder_static_methods.htm#apex_ConnectAPI_ReturnOrder_returnItems_1 "Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity.")