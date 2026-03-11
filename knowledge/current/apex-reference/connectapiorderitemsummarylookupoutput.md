---
title: "ConnectApi.OrderItemSummaryLookupOutput"
domain: apex-reference
topic: connectapiorderitemsummarylookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.474Z
keywords: [ConnectApi.OrderItemSummaryLookupOutput]
---

# ConnectApi.OrderItemSummaryLookupOutput

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