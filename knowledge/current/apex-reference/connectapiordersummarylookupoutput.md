---
title: "ConnectApi.OrderSummaryLookupOutput"
domain: apex-reference
topic: connectapiordersummarylookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.293Z
estimatedTokens: 207
keywords: [ConnectApi.OrderSummaryLookupOutput, Order, summary, lookup, output.]
---

# ConnectApi.OrderSummaryLookupOutput

> Order summary lookup output.

# ConnectApi.OrderSummaryLookupOutput

Order summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentAggregates | ConnectApi.OrderSummaryAdjustmentAggregates | Adjustment aggregates associated with the order summary. | 58.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order summary. | 58.0 |
| deliveryGroups | List<ConnectApi.OrderDeliveryGroupSummaryLookupOutput> | Delivery groups associated with the order summary. | 58.0 |
| fields | Map<String, ConnectApi.RecordField> | Map of requested order summary fields. | 58.0 |
| id | String | ID of the order summary. | 58.0 |
| orderNumber | String | Reference number of the order summary. | 58.0 |
| status | String | Status associated with the order summary. | 58.0 |

## Related Topics

- ConnectApi.OrderSummaryAdjustmentAggregates (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_aggregates.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OrderDeliveryGroupSummaryLookupOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_lookup_output.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm)
