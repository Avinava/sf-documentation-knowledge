---
title: "Product Media"
domain: chatterapi
topic: product-media
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.533Z
estimatedTokens: 468
keywords: [Product, Media, associated]
---

# Product Media

> Media associated with a product.

# Product Media

Media associated with a product.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alternateText | String | Alternative text for the product media. | Small, 49.0 | 49.0 |
| contentVersionId | String | ID of the latest published content version if the media is stored as a ContentDocument. If the image is a customer-provided external URL, the value is null. Not supported in enhanced CMS workspaces. | Small, 49.0 | 49.0 |
| id | String | ID of the product image. | Small, 49.0 | 49.0 |
| mediaType | String | Type of product media. Values are:DocumentImageVideo | Small, 49.0 | 49.0 |
| sortOrder | Integer | Sort order of a media item within a media group. | Small, 49.0 | 49.0 |
| thumbnailUrl | String | URL of the thumbnail for product media. If a value exists, it should be used for the thumbnail whether the image is natively uploaded or hosted externally. Not supported in enhanced CMS workspaces. | Small, 49.0 | 49.0 |
| title | String | Title of the product media. | Small, 49.0 | 49.0 |
| url | String | URL of the product media. | Small, 49.0 | 49.0 |

#### See Also

-   [Cart Item Product](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_product_summary.htm "Product summary for a cart item.")

-   [Product Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm "Details of a product.")

-   [Product Media Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media_group.htm "Media group associated with a product.")

-   [Product Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_summary.htm "Product summary.")

-   [Order Item Summary Product](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_product.htm "Product mapped to an order item summary.")

## Related Topics

- Cart Item Product (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_product_summary.htm)
- Product Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm)
- Product Media Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media_group.htm)
- Product Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_summary.htm)
- Order Item Summary Product (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_item_summary_product.htm)
