---
title: "ConnectApi.OrderSummaryProductLookupOutput"
domain: apex-reference
topic: connectapiordersummaryproductlookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.522Z
keywords: [ConnectApi.OrderSummaryProductLookupOutput]
---

# ConnectApi.OrderSummaryProductLookupOutput

# ConnectApi.OrderSummaryProductLookupOutput

Order summary product lookup output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canViewProduct | Boolean | Specifies whether the context user can view the product (true) or not (false). | 58.0 |
| errorCode | String | Error code captured during product load. | 58.0 |
| errorMessage | String | Error message captured during product load. | 58.0 |
| fields | Map<String, ConnectApi.RecordField> | Map of requested product fields. | 58.0 |
| id | String | Id of the product | 58.0 |
| media | ConnectApi.ProductMedia | Associated product media. | 58.0 |
| variationAttributes | Map<String, ConnectApi.OrderSummaryProductAttribute> | Variation attributes (color, size, and so on) associated with the product. | 58.0 |