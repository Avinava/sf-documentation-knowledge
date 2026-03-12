---
title: "Product Variation Info"
domain: chatterapi
topic: product-variation-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.614Z
estimatedTokens: 187
keywords: [Product, Variation, Info, attributes, metadata, mappings, attribute, combinations, IDs]
---

# Product Variation Info

> Product variation attributes, metadata, and mappings of attribute
      combinations to variation product IDs.

# Product Variation Info

Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributesTo​ProductMappings | Product Attributes to Product Entry[] | List ordered by ProductAttribute.Sequence values that map the attribute value combinations to the variation product ID. | Small, 50.0 | 50.0 |
| variationAttribute​Info | Map<String, Product Attribute Info> | Map of field API name to product attribute information. | Small, 51.0 | 51.0 |

#### See Also

-   [Product Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm "Details of a product.")

## Related Topics

- Product Attributes to Product Entry (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attributes_to_product_entry.htm)
- Product Attribute Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_info.htm)
- Product Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm)
