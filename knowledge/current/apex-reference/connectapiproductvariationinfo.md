---
title: "ConnectApi.ProductVariationInfo"
domain: apex-reference
topic: connectapiproductvariationinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.689Z
estimatedTokens: 182
keywords: [ConnectApi.ProductVariationInfo, Product, variation, attributes, metadata, mappings, attribute, combinations, IDs]
---

# ConnectApi.ProductVariationInfo

> Product variation attributes, metadata, and mappings of attribute
      combinations to variation product IDs.

# ConnectApi.ProductVariationInfo

Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributesTo​ProductMappings | List<ConnectApi.​ProductAttributes​ToProductEntry> | List ordered by ProductAttribute.Sequence values that map the attribute value combinations to the variation product ID. | 50.0 |
| variationAttributeInfo | Map<String, ConnectApi.​ProductAttributeInfo> | Map of field API name to product attribute information. | 51.0 |

#### See Also

-   [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm "Details of a product.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ProductAttributes​ToProductEntry (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attributes_to_product_entry.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ProductAttributeInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_attribute_info.htm)
- ConnectApi.ProductDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm)
