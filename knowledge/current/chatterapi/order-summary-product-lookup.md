---
title: "Order Summary Product Lookup"
domain: chatterapi
topic: order-summary-product-lookup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.174Z
estimatedTokens: 224
keywords: [Order, Summary, Product, Lookup, output]
---

# Order Summary Product Lookup

> Order summary product lookup output.

# Order Summary Product Lookup

Order summary product lookup output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canViewProduct | Boolean | Specifies whether the context user can view the product (true) or not (false). | Small, 58.0 | 58.0 |
| errorCode | String | Error code captured during product load. | Small, 58.0 | 58.0 |
| errorMessage | String | Error message captured during product load. | Small, 58.0 | 58.0 |
| fields | Map<String, ​Record Field> | Map of requested product fields. | Small, 58.0 | 58.0 |
| id | String | Id of the product | Small, 58.0 | 58.0 |
| media | Product Media | Associated product media. | Small, 58.0 | 58.0 |
| variationAttributes | Map<String, Order Summary ​Product Attribute> | Variation attributes (color, size, and so on) associated with the product. | Small, 58.0 | 58.0 |

## Related Topics

- ​Record
                Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Product Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Order Summary ​Product
                Attribute (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_product_attribute.htm)
