---
title: "Product Attributes to Product Entry"
domain: chatterapi
topic: product-attributes-to-product-entry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.443Z
estimatedTokens: 255
keywords: [Product, Attributes, Entry, Mapping, attribute, combination, variation]
---

# Product Attributes to Product Entry

> Mapping of an attribute value combination to a variation product
      ID.

# Product Attributes to Product Entry

Mapping of an attribute value combination to a variation product ID.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canonicalKey | String | Attribute API values concatenated with an underscore (_) based on the sequence number of the attributes in the attribute set. | Small, 50.0 | 50.0 |
| productId | String | Variation product ID for the selection of attributes. | Small, 50.0 | 50.0 |
| selected​Attributes | Product Attribute Selection Info[] | Ordered list of attribute values and metadata that can be used to form a key that maps to product ID. | Small, 50.0 | 50.0 |
| urlName | String | Variant URL name for the selection of attributes. | Small, 59.0 | 59.0 |

#### See Also

-   [Product Variation Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm "Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.")

## Related Topics

- Product Attribute Selection Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_selection_info.htm)
- Product Variation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm)
