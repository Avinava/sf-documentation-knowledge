---
title: "ConnectApi.OrderItemSummaryProduct"
domain: apex-reference
topic: connectapiorderitemsummaryproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.292Z
estimatedTokens: 229
keywords: [ConnectApi.OrderItemSummaryProduct, Product, item, mapped, order, summary]
---

# ConnectApi.OrderItemSummaryProduct

> Product item mapped to the order item summary.

# ConnectApi.OrderItemSummaryProduct

Product item mapped to the order item summary.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canViewProduct | Boolean | Specifies whether the context user can view the product (true) or not (false). | 51.0 |
| errorCode | String | Error code for the product with errors. | 51.0 |
| errorMessage | String | Error message for the product with errors. | 51.0 |
| fields | Map<String, ConnectApi.​RecordField> | Map of the product fields queried. | 51.0 |
| media | ConnectApi.​ProductMedia | Associated product media. | 51.0 |
| productAttributes | ConnectApi.​ProductAttributeSet​Summary | Summary of the product attributes. | 51.0 |
| productId | String | ID of the product. | 51.0 |

#### See Also

-   [ConnectApi.OrderItemSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary.htm "Order item summary.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- ConnectApi.​RecordField (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordField.htm)
- ConnectApi.​ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
- ConnectApi.​ProductAttributeSet​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_set_summary.htm)
- ConnectApi.OrderItemSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary.htm)
