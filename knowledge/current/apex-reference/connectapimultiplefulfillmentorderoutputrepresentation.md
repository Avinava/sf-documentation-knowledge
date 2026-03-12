---
title: "ConnectApi.MultipleFulfillmentOrderOutputRepresentation"
domain: apex-reference
topic: connectapimultiplefulfillmentorderoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.032Z
estimatedTokens: 155
keywords: [responses, individual, FulfillmentOrder, creation, attempts, multiple, fulfillment, orders]
---

# ConnectApi.MultipleFulfillmentOrderOutputRepresentation

> A list of responses for the individual FulfillmentOrder creation
      attempts from a request to create multiple fulfillment orders.

# ConnectApi.MultipleFulfillmentOrderOutputRepresentation

A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| invoicesMap |  |  | 50.0 |
| fulfillmentOrders | List<ConnectApi.​FulfillmentGroup​OutputRepresentation> | A list of response data for created and failed FulfillmentOrders. | 50.0 |

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​FulfillmentGroup​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_group_output.htm)
