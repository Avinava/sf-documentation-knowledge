---
title: "Product Overview"
domain: chatterapi
topic: product-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:20.544Z
estimatedTokens: 546
keywords: [Product, summary, prices, selected, product’s, image]
---

# Product Overview

> Overview of a product, with summary information about prices, selected
      fields, and the product’s default image.

# Product Overview

Overview of a product, with summary information about prices, selected fields, and the product’s default image.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| defaultImage | Product Media | Media representation of the product's default image. | Small, 54.0 | 54.0 |
| error | Error Response | Error code and error message. | Big, 54.0 | 54.0 |
| fields | Map<String, String> | Map of fields belonging to the product. | Medium, 54.0 | 54.0 |
| id | String | ID of the product. | Small, 54.0 | 54.0 |
| isConfiguration​Allowed | Boolean | Indicates whether the product supports configuration (true) or not (false). For dynamic bundles, this field is always true, and for static bundles, it is false. When true, buyers can configure the bundle by selecting which child components to include or exclude before adding it to the cart. | Small, 65.0 | 65.0 |
| name | String | Name of the product. | Small, 63.0 | 63.0 |
| prices | Pricing Result Line Item | Price of the product.To get pricing information for products in version 58 and later, use Commerce Webstore Pricing Products. | Medium, 54.0 | 54.0–57.0 |
| productClass | String | Class of the product. Possible values are:BundleSetSimpleVariationVariationParent | Small, 63.0 | 63.0 |
| productSelling​Models | Product Selling Model[] | Product selling models information for the product. | Small, 63.0 | 63.0 |
| purchaseQuantity​Rule | Purchase Quantity Rule | Purchase quantity rule information for the product. | Small, 63.0 | 63.0 |
| sku | String | SKU of the product. | Small, 54.0 | 54.0 |
| success | Boolean | Represents whether execution was successful and product overview information was retrieved without error. | Small, 54.0 | 54.0 |
| urlName | String | URL name of the product. | Small, 63.0 | 63.0 |
| variationAttribute​Set | Product Attribute Set Summary | Variation attribute set information for the product. | Small, 63.0 | 63.0 |
| variationInfo | Product Variation Info | Details of product variation attributes, metadata, and mappings of attribute combinations to variation product IDs. | Small, 63.0 | 63.0 |

## Related Topics

- Product
                  Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Error
                  Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Pricing Result Line Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pricing_result_line_item.htm)
- Commerce
                    Webstore Pricing Products (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_pricing_products.htm)
- Product Selling Model (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_selling_model.htm)
- Purchase Quantity Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_purchase_quantity_rule.htm)
- Product Attribute Set Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set_summary.htm)
- Product Variation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm)
