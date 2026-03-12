---
title: "Commerce Webstore Product Children"
domain: chatterapi
topic: commerce-webstore-product-children
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.487Z
estimatedTokens: 806
keywords: [Commerce, Webstore, Product, Children, collection, child, products, parent]
---

# Commerce Webstore Product Children

> Get a collection of child products related to a parent
    product.

# Commerce Webstore Product Children

Get a collection of child products related to a parent product.

This resource respects buyer View Product entitlements, allowing access only to users authorized to view product data. It supports bundle and set products but is not available for simple, variation, or variation-parent products.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Dynamic bundles are supported only in Commerce B2B stores. The Commerce Webstore Product Children API doesn't support them in D2C stores.

Resource

```

```

Resource example

```

```

```

```

Available version

57.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 57.0 |
| excludeAttribute​SetInfo | Boolean | Specifies whether the attribute set information for the product is returned (false) or not (true). If unspecified, defaults to false. | Optional | 57.0 |
| excludeFields | Boolean | Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false. | Optional | 57.0 |
| excludeMedia | Boolean | Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false. | Optional | 57.0 |
| excludeQuantity​Rule | Boolean | Specifies whether the quantity rule information for the product is returned (false) or not (true). If unspecified, defaults to false. | Optional | 57.0 |
| fields | StringList | Comma-separated list of field names.If this list is empty or unspecified, all fields are returned. There’s no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence. | Optional | 57.0 |
| includeProduct​SellingModels | Boolean | Indicates whether product selling model options are returned (true) or not (false). Default value is false. | Optional | 63.0 |
| mediaGroups | StringList | Comma-separated list of developer names of media group records. Possible values:AttachmentproductDetailImageproductListImageIf this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence.For product bundles, only the producListImage is returned. | Optional | 57.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 20. | Optional | 57.0 |
| pageToken | String | Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned. | Optional | 57.0 |

Response body for GET

[Product Child Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_child_collection.htm "Collection of child products related to a parent product.")

## Code Examples

```
/commerce/webstores/webstoreId/products/productId/children
```

```
https://yourInstance.salesforce.com/services/data/v63.0/commerce/webstores​/0ZExx000000004tGAA/products/01txx0000006iGyAAI/children
```

```
https://yourInstance.salesforce.com/services/data/v63.0/commerce/webstores​/0ZExx000000004tGAA/products/01txx0000006iGyAAI/children?​mediaGroups=productListImage&pageToken=eyJwIjoyMCwibyI6MH0%3D&includeProductSellingModels=true
```

## Related Topics

- Product Child Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_child_collection.htm)
