---
title: "ConnectApi.ProductMedia"
domain: apex-reference
topic: connectapiproductmedia
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.604Z
estimatedTokens: 451
keywords: [ConnectApi.ProductMedia, Media, associated, product]
---

# ConnectApi.ProductMedia

> Media associated with a product.

# ConnectApi.ProductMedia

Media associated with a product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| alternateText | String | Alternative text for the product media. | 49.0 |
| contentVersionId | String | ID of the latest published content version if the media is stored as a ContentDocument. If the image is a customer-provided external URL, the value is null. Not supported in enhanced CMS workspaces. | 49.0 |
| id | String | ID of the product image. | 49.0 |
| mediaType | ConnectApi.​ProductMediaType | Type of product media. Values are:DocumentImageVideo | 49.0 |
| sortOrder | Integer | Sort order of a media item within a media group. | 49.0 |
| thumbnailUrl | String | URL of the thumbnail for product media. If a value exists, it should be used for the thumbnail whether the image is natively uploaded or hosted externally. Not supported in enhanced CMS workspaces. | 49.0 |
| title | String | Title of the product media. | 49.0 |
| url | String | URL of the product media. | 49.0 |

#### See Also

-   [ConnectApi.CartItemProduct](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_product_summary.htm "Product summary for a cart item.")

-   [ConnectApi.ProductDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm "Details of a product.")

-   [ConnectApi.ProductMediaGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media_group.htm "Media group associated with a product.")

-   [ConnectApi.OrderItemSummaryProduct](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_product.htm "Product item mapped to the order item summary.")

-   [ConnectApi.ProductSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_summary.htm "Product summary.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ProductMediaType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.CartItemProduct (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_product_summary.htm)
- ConnectApi.ProductDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_detail.htm)
- ConnectApi.ProductMediaGroup (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media_group.htm)
- ConnectApi.OrderItemSummaryProduct (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_product.htm)
- ConnectApi.ProductSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_summary.htm)
