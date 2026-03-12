---
title: "ConnectApi.OrderSummaryProductLookupOutput"
domain: apex-reference
topic: connectapiordersummaryproductlookupoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.302Z
estimatedTokens: 202
keywords: [ConnectApi.OrderSummaryProductLookupOutput, Order, summary, product, lookup, output.]
---

# ConnectApi.OrderSummaryProductLookupOutput

> Order summary product lookup output.

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

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm)
- ConnectApi.ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
