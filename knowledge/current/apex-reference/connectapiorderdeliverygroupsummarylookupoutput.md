---
title: "ConnectApi.OrderDeliveryGroupSummaryLookupOutput"
domain: apex-reference
topic: connectapiorderdeliverygroupsummarylookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.455Z
keywords: [ConnectApi.OrderDeliveryGroupSummaryLookupOutput]
---

# ConnectApi.OrderDeliveryGroupSummaryLookupOutput

# ConnectApi.OrderDeliveryGroupSummaryLookupOutput

Order delivery group summary lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order delivery group summary record. | 58.0 |
| deliveryMethod | ConnectApi.OrderDeliveryMethodLookupOutput | Delivery method associated with order the delivery group summary. | 58.0 |
| fields | Map<String, ConnectApi.RecordFieldConnectApi.RecordField> | Map of requested order delivery group summary fields. | 58.0 |
| id | String | ID of the order delivery group summary. | 58.0 |
| lineItems | List<ConnectApi.OrderSummaryLookupOutput> | Line items associated with the order delivery group summary. | 58.0 |