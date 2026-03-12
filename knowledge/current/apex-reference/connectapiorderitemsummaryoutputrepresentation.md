---
title: "ConnectApi.OrderItemSummaryOutputRepresentation"
domain: apex-reference
topic: connectapiorderitemsummaryoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.287Z
estimatedTokens: 123
keywords: [OrderItemSummary, failed, FulfillmentOrder, multiple, fulfillment, orders]
---

# ConnectApi.OrderItemSummaryOutputRepresentation

> Details of an OrderItemSummary from a failed FulfillmentOrder in a
      create multiple fulfillment orders request.

# ConnectApi.OrderItemSummaryOutputRepresentation

Details of an OrderItemSummary from a failed FulfillmentOrder in a create multiple fulfillment orders request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​ErrorResponse> | List of errors specific to the OrderItemSummary, if any. | 50.0 |
| orderItemSummaryId | String | ID of the OrderItemSummary. | 50.0 |
| quantity | Double | Quantity of the OrderItemSummary. | 50.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
