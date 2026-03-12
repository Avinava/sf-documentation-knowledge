---
title: "Product Category Media"
domain: chatterapi
topic: product-category-media
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.466Z
estimatedTokens: 387
keywords: [Product, Category, Media, associated]
---

# Product Category Media

> Media associated with a product category.

# Product Category Media

Media associated with a product category.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| alternateText | String | Alternative text for the product category media. | Small, 49.0 | 49.0 |
| contentVersionId | String | ID of the latest published content version if the media is stored as a ContentDocument. If the image is a customer-provided external URL, the value is null. Not supported in enhanced CMS workspaces. | Small, 49.0 | 49.0 |
| id | String | ID of the product category image. | Small, 49.0 | 49.0 |
| mediaType | String | Type of product media. Values are:DocumentImageVideo | Small, 49.0 | 49.0 |
| sortOrder | Integer | Sort order of a media item inside a media group. | Small, 49.0 | 49.0 |
| thumbnailUrl | String | URL of the thumbnail for product media. If a value exists, it should be used for the thumbnail whether the image is natively uploaded or hosted externally. Not supported in enhanced CMS workspaces. | Small, 49.0 | 49.0 |
| title | String | Title of the product category media. | Small, 49.0 | 49.0 |
| url | String | URL of the product category media. | Small, 49.0 | 49.0 |

#### See Also

-   [Product Category Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_detail.htm "Details of a product category.")

-   [Product Category Media Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_media_group.htm "Media group associated with a product category.")

## Related Topics

- Product Category Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_detail.htm)
- Product Category Media Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_media_group.htm)
