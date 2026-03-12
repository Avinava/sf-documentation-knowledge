---
title: "ConnectApi.OrderItemSummaryLookupOutput"
domain: apex-reference
topic: connectapiorderitemsummarylookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.234Z
estimatedTokens: 205
keywords: [ConnectApi.OrderItemSummaryLookupOutput, Order, item, summary, lookup, output.]
---

# ConnectApi.OrderItemSummaryLookupOutput

> Order item summary lookup output.

# ConnectApi.OrderItemSummaryLookupOutput

Order item summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentAggregates | ConnectApi.OrderItemSummaryAdjustmentAggregates | Adjustment aggregates for the order item summary. | 58.0 |
| adjustments | List<ConnectApi.OrderSummaryAdjustment> | Adjustments associated with the order item summary. | 58.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order item summary record. | 58.0 |
| fields | Map<String, ConnectApi.RecordField> | Map of requested order item summary fields. | 58.0 |
| id | String | ID of the order item summary. | 58.0 |
| product | ConnectApi.OrderSummaryProductLookupOutput | Details of the product associated with order item summary. | 58.0 |

## Related Topics

- ConnectApi.OrderItemSummaryAdjustmentAggregates (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_aggregates.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OrderSummaryAdjustment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm)
- ConnectApi.OrderSummaryProductLookupOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_product_lookup_output.htm)
