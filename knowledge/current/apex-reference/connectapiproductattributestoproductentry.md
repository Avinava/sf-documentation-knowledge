---
title: "ConnectApi.ProductAttributesToProductEntry"
domain: apex-reference
topic: connectapiproductattributestoproductentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.656Z
keywords: [ConnectApi.ProductAttributesToProductEntry, See]
---

# ConnectApi.ProductAttributesToProductEntry

# ConnectApi.ProductAttributesToProductEntry

Mapping of an attribute value combination to a variation product ID.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canonicalKey | String | Attribute API values concatenated with an underscore (_) based on the sequence number of the attributes in the attribute set. | 50.0 |
| productId | String | Variation product ID for the selection of attributes. | 50.0 |
| selectedAttributes | List<ConnectApi.​ProductAttribute​SelectionInfo> | Ordered list of attribute values and metadata that can be used to form a key that maps to product ID. | 50.0 |
| urlName | String | Variant URL name for the selection of attributes. | 59.0 |

#### See Also

-   [ConnectApi.ProductVariationInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_variation_info.htm "Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.")