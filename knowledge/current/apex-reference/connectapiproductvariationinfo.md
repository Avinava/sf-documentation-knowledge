---
title: "ConnectApi.ProductVariationInfo"
domain: apex-reference
topic: connectapiproductvariationinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.766Z
keywords: [ConnectApi.ProductVariationInfo, See]
---

# ConnectApi.ProductVariationInfo

# ConnectApi.ProductVariationInfo

Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributesTo​ProductMappings | List<ConnectApi.​ProductAttributes​ToProductEntry> | List ordered by ProductAttribute.Sequence values that map the attribute value combinations to the variation product ID. | 50.0 |
| variationAttributeInfo | Map<String, ConnectApi.​ProductAttributeInfo> | Map of field API name to product attribute information. | 51.0 |

#### See Also

-   [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm "Details of a product.")