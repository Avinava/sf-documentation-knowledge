---
title: "ConnectApi.OrderSummaryRepresentation"
domain: apex-reference
topic: connectapiordersummaryrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.268Z
estimatedTokens: 260
keywords: [ConnectApi.OrderSummaryRepresentation, Order, summary.]
---

# ConnectApi.OrderSummaryRepresentation

> Order summary.

# ConnectApi.OrderSummaryRepresentation

Order summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentAggregates | ConnectApi.​OrderSummary​AdjustmentAggregates | Adjustment aggregates associated with the order summary. | 55.0 |
| createdDate | Datetime | Created date of the order summary. | 51.0 |
| fields | Map< String, ConnectApi.​RecordField > | Map of requested order summary fields. | 51.0 |
| orderNumber | String | Order number of the order summary. | 51.0 |
| orderSummaryId | String | ID of the order summary. | 51.0 |
| orderedDate | Datetime | Ordered date of the order summary. | 51.0 |
| ownerId | String | ID of the owner of the order summary. | 51.0 |
| status | String | Status of the order summary. | 51.0 |
| totalAmount | String | Total amount of the order summary. | 51.0 |

#### See Also

-   [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")

## Related Topics

- ConnectApi.​OrderSummary​AdjustmentAggregates (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_aggregates.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm)
- ConnectApi.OrderSummaryCollectionRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm)
