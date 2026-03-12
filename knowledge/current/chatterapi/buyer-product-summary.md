---
title: "Buyer Product Summary"
domain: chatterapi
topic: buyer-product-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.403Z
estimatedTokens: 294
keywords: [Buyer, Product, Summary, Output, representation]
---

# Buyer Product Summary

> Output representation of the buyer product summary.

# Buyer Product Summary

Output representation of the buyer product summary.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canViewProduct | Boolean | Specifies whether the context user can view the product (true) or not (false). | Small, 63.0 | 63.0 |
| error | Error Response | Error response representation for buyer product summary. | Small, 63.0 | 63.0 |
| fields | Map<String, Record Field> | Collection of fields from product. | Small, 63.0 | 63.0 |
| id | String | Id of the product. | Small, 63.0 | 63.0 |
| image | Product Media | Media details associated with a product. | Small, 63.0 | 63.0 |
| name | String | Name of the product. | Small, 63.0 | 63.0 |
| purchaseQuantityRule | Purchase Quantity Rule | Rule that restricts the quantity of a product that can be purchased. | Small, 65.0 | 65.0 |
| sku | String | SKU of the product. | Small, 63.0 | 63.0 |
| success | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 63.0 | 63.0 |
| variation​Attributes | Product Attribute Summary[] | Summary details of a product attribute. | Small, 63.0 | 63.0 |

## Related Topics

- Error Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Product Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Purchase Quantity
                Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_purchase_quantity_rule.htm)
- Product Attribute Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_summary.htm)
