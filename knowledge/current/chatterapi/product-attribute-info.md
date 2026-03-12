---
title: "Product Attribute Info"
domain: chatterapi
topic: product-attribute-info
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:20.418Z
estimatedTokens: 454
keywords: [Product, Attribute, Info]
---

# Product Attribute Info

> Product attribute information.

# Product Attribute Info

Product attribute information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allowableValues | String[] | Active attribute picklist values that can be used to create variations. These values are determined by the order of the picklist values in Object Manager. | Small, 50.0 | 50.0 |
| apiName | String | API name of the attribute. | Small, 50.0 | 50.0 |
| availableValues | String[] | Attribute picklist values that are available for the product in the store. These values are sorted by the order of values in the allowableValues property. | Small, 50.0 | 50.0 |
| fieldEnumOrId | String | Field ID for custom fields or enumeration value for standard fields. | Small, 50.0 | 50.0 |
| groupedBy | Boolean | Indicates if the attribute is used to determine grouping. | Small, 50.0 | 64.0 |
| label | String | Label of the attribute. | Small, 50.0 | 50.0 |
| objectName | String | Name of the object that contains the field. | Small, 50.0 | 50.0 |
| options | Product Attribute Value Metadata[] | List of product attribute value metadata. | Small, 63.0 | 63.0 |
| sequence | Integer | Sequence value determined by the order of the attributes under Commerce Setup for the attribute set. | Small, 50.0 | 50.0 |
| viewType | String | View type for product attributes. Values are:ColorSwatchDropdownPill | Small, 63.0 | 63.0 |

#### See Also

-   [Product Attribute Set Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set_info.htm "Product attribute set metadata.")

-   [Product Variation Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm "Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs.")

## Related Topics

- Product Attribute Value Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_value_metadata.htm)
- Product Attribute Set Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set_info.htm)
- Product Variation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm)
