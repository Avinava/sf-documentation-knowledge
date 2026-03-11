---
title: "ConnectApi.OrderSummaryLookupOutput"
domain: apex-reference
topic: connectapiordersummarylookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.514Z
keywords: [ConnectApi.OrderSummaryLookupOutput]
---

# ConnectApi.OrderSummaryLookupOutput

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