---
title: "Commerce Product Summary"
domain: chatterapi
topic: commerce-product-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.806Z
estimatedTokens: 407
keywords: [Commerce, Product, Summary, representation, search, results]
---

# Commerce Product Summary

> Summary representation of a product in product search results.

# Commerce Product Summary

Summary representation of a product in product search results.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| defaultImage | Product Media | Default image of the product. | Small, 55.0 | 55.0 |
| fields | Map<String, Field Value> | Map of fields belonging to the product. | Medium, 55.0 | 55.0 |
| id | String | ID of the product. | Small, 55.0 | 55.0 |
| isConfigurationAllowed | Boolean | Specifies whether the product is configurable for dynamic bundles (true) or not (false). | Small, 65.0 | 65.0 |
| name | String | Name of the product. | Small, 55.0 | 55.0 |
| prices | Pricing Result Line Item | Prices of the product. | Medium, 55.0 | 55.0 |
| productClass | String | Class of product. Values are:BundleSetSimpleVariationVariationParent | Small, 55.0 | 55.0 |
| productSelling​ModelInformation | Commerce Product Selling Model Information | Product selling model information for the product. | Small, 59.0 | 59.0 |
| productVariation​Info | Product Variation Info | Product variation attributes, metadata, and mappings of attribute combinations to variation product IDs. This field isn't available in stores with displayable fields enabled. | Small, 63.0 | 63.0 |
| purchaseQuantity​Rule | Purchase Quantity Rule | If one exists, purchase quantity rule for the product. | Small, 58.0 | 58.0 |
| urlName | String | SEO-friendly URL name for the product. | Small, 59.0 | 59.0 |
| variationAttribute​Set | Product Attribute Set Summary | Variation attribute set that’s associated with the product. | Small, 55.0 | 55.0 |

## Related Topics

- Product Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Field Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_field_value.htm)
- Pricing Result Line Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pricing_result_line_item.htm)
- Commerce Product Selling Model Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_product_selling_model.htm)
- Product Variation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm)
- Purchase Quantity Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_purchase_quantity_rule.htm)
- Product Attribute Set Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set_summary.htm)
