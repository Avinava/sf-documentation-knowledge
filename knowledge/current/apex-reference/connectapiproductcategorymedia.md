---
title: "ConnectApi.ProductCategoryMedia"
domain: apex-reference
topic: connectapiproductcategorymedia
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.672Z
keywords: [ConnectApi.ProductCategoryMedia, See]
---

# ConnectApi.ProductCategoryMedia

# ConnectApi.ProductCategoryMedia

Media associated with a product category.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| alternateText | String | Alternative text for the product category media. | 49.0 |
| contentVersionId | String | ID of the latest published content version if the media is stored as a ContentDocument. If the image is a customer-provided external URL, the value is null. Not supported in enhanced CMS workspaces. | 49.0 |
| id | String | ID of the product category image. | 49.0 |
| mediaType | ConnectApi.​ProductMediaType | Type of product media. Values are:DocumentImageVideo | 49.0 |
| sortOrder | Integer | Sort order of a media item inside a media group. | 49.0 |
| thumbnailUrl | String | URL of the thumbnail for product media. If a value exists, it should be used for the thumbnail whether the image is natively uploaded or hosted externally. Not supported in enhanced CMS workspaces. | 49.0 |
| title | String | Title of the product category media. | 49.0 |
| url | String | URL of the product category media. | 49.0 |

#### See Also

-   [ConnectApi.ProductCategoryMediaGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_media_group.htm "Media group associated with a product category.")
    
-   [ConnectApi.ProductCategoryDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_detail.htm "Details of a product category.")