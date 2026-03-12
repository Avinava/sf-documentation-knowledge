---
title: "Product Details Output"
domain: chatterapi
topic: product-details-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.508Z
estimatedTokens: 441
keywords: [Product, Output]
---

# Product Details Output

> Details about a product.

# Product Details Output

Details about a product.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Product Variation Attribute Output[] | List of variation attributes that define variations of the product. | Big, 55.0 | 55.0 |
| childItems | Product Bundle Child Output | For bundle products only: an array of the individual products that are a part of the bundle. Only applicable for B2B or D2C stores. | Big, 64.0 | 64.0 |
| currencyIsoCode | String | Currency ISO code. | Big, 55.0 | 55.0 |
| description | String | Description of the product. | Big, 55.0 | 55.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 55.0 | 55.0 |
| fields | Map<String, String> | List of the product’s fields. | Big, 55.0 | 55.0 |
| imageGroups | Product Image Group Output[] | List of the product’s image groups. | Big, 55.0 | 55.0 |
| listPrice | Double | List price. | Big, 55.0 | 55.0 |
| name | String | Name. | Big, 55.0 | 55.0 |
| productClass | String | List of variation attributes that define variations of the product. | Big, 64.0 | 64.0 |
| productId | String | Product ID. | Big, 55.0 | 55.0 |
| stockKeepingUnit | String | The product’s class. Possible values are: Bundle, Simple, Variation, Variation Parent, or Set. | Big, 55.0 | 55.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 55.0 | 55.0 |
| totalChildrenCount | Enum | For bundles only: the total number of child products in a bundle. Only applicable for B2B or D2C stores. | Big, 64.0 | 64.0 |
| unitPrice | Double | Unit price. | Big, 55.0 | 55.0 |
| variants | Product Variant Output Representation[] | List of variations of the product. | Big, 55.0 | 55.0 |

## Related Topics

- Product Variation Attribute Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_attribute_output.htm)
- Product Bundle Child Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_bundle_child_output.htm)
- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Product Image Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_image_group_output.htm)
- Product Variant Output Representation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variant_output.htm)
