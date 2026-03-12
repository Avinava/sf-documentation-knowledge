---
title: "ConnectApi.OrderDeliveryGroupSummaryLookupOutput"
domain: apex-reference
topic: connectapiorderdeliverygroupsummarylookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:28.208Z
estimatedTokens: 195
keywords: [ConnectApi.OrderDeliveryGroupSummaryLookupOutput, Order, delivery, group, summary, lookup, output.]
---

# ConnectApi.OrderDeliveryGroupSummaryLookupOutput

> Order delivery group summary lookup output.

# ConnectApi.OrderDeliveryGroupSummaryLookupOutput

Order delivery group summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order delivery group summary record. | 58.0 |
| deliveryMethod | ConnectApi.OrderDeliveryMethodLookupOutput | Delivery method associated with order the delivery group summary. | 58.0 |
| fields | Map<String, ConnectApi.RecordFieldConnectApi.RecordField> | Map of requested order delivery group summary fields. | 58.0 |
| id | String | ID of the order delivery group summary. | 58.0 |
| lineItems | List<ConnectApi.OrderSummaryLookupOutput> | Line items associated with the order delivery group summary. | 58.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.OrderDeliveryMethodLookupOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_method_lookup_output.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OrderSummaryLookupOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_lookup_output.htm)
