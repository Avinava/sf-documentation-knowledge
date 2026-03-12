---
title: "Product Detail"
domain: chatterapi
topic: product-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.502Z
estimatedTokens: 501
keywords: [Product, Detail]
---

# Product Detail

> Details of a product.

# Product Detail

Details of a product.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeSetInfo | Map<String, Product Attribute Set Info> | Map of the attribute set developer name to its metadata. | Small, 50.0 | 50.0 |
| defaultImage | Product Media | Default image of the product. | Small, 49.0 | 49.0 |
| dynamicAttributeCount | Integer | Count of dynamic attributes associated with the product. This field is supported for both simple products and dynamic product bundles. | Small, 66.0 | 66.0 |
| entitlement | Product Entitlement | Entitlement details for the product.To get pricing information for products in version 57 and later, use Commerce Webstore Pricing Products. | Small, 49.0 | 49.0–56.0 |
| fields | Map<String, String> | List of fields for the product. | Small, 49.0 | 49.0 |
| id | String | ID of the product. | Small, 49.0 | 49.0 |
| mediaGroups | Product Media Group[] | List of media groups of the product. | Small, 49.0 | 49.0 |
| primaryProduct​CategoryPath | Product Category Path | Primary category path of the product. | Small, 49.0 | 49.0 |
| productClass | String | Class of product. Values are:BundleSetSimpleVariationVariationParent | Small, 50.0 | 50.0 |
| productSelling​Models | Product Selling Model[] | List of product selling models for the product. | Small, 56.0 | 56.0 |
| purchaseQuantity​Rule | Purchase Quantity Rule | If one exists, purchase quantity rule for the product. | Small, 52.0 | 52.0 |
| urlName | String | SEO-friendly URL name for the product. | Small, 59.0 | 59.0 |
| variationAttribute​Set | Product Attribute Set | Variation attribute set for the product. | Small, 50.0 | 50.0 |
| variationInfo | Product Variation Info | Available and allowable values for variation attributes and a map to resolve variation product IDs from attribute value combinations. | Small, 50.0 | 50.0 |
| variationParentId | String | ID of the variation parent. | Small, 50.0 | 50.0 |

## Related Topics

- Product Attribute Set Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set_info.htm)
- Product Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Product
                Entitlement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_entitlement.htm)
- Commerce
                    Webstore Pricing Products (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_pricing_products.htm)
- Product Media
                Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media_group.htm)
- Product Category
                Path (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_path.htm)
- Product Selling Model (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_selling_model.htm)
- Purchase Quantity Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_purchase_quantity_rule.htm)
- Product Attribute Set (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set.htm)
- Product Variation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm)
