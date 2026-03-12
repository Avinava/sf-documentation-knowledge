---
title: "ConnectApi.ProductCategoryMediaGroup"
domain: apex-reference
topic: connectapiproductcategorymediagroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.556Z
estimatedTokens: 247
keywords: [ConnectApi.ProductCategoryMediaGroup, Media, group, associated, product, category]
---

# ConnectApi.ProductCategoryMediaGroup

> Media group associated with a product category.

# ConnectApi.ProductCategoryMediaGroup

Media group associated with a product category.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| developerName | String | API name of the product category media group. | 49.0 |
| id | String | ID of the product category media group. | 49.0 |
| mediaItems | List<ConnectApi.​ProductCategoryMedia> | List of media items within a product category media group. | 49.0 |
| name | String | Name of the product category media group. | 49.0 |
| usageType | ConnectApi.​ProductMedia​UsageType | Usage type of a product media item within a media group. Values are:Attachment—Product media group with product documents as attachments.Banner—Product category media group with banner images of the product.Listing—Product media group with listing images of the product.Standard—Product media group with standard images and videos of the product.Tile—Product category media group with tile images of the product. | 49.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ProductCategoryMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_category_media.htm)
- ConnectApi.​ProductMedia​UsageType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
