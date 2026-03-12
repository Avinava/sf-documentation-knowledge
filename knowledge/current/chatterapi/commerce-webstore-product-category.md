---
title: "Commerce Webstore Product Category"
domain: chatterapi
topic: commerce-webstore-product-category
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.476Z
estimatedTokens: 399
keywords: [Commerce, Webstore, Product, Category]
---

# Commerce Webstore Product Category

> Get a product category.

# Commerce Webstore Product Category

Get a product category.

Resource

```

```

Available version

49.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |
| excludeFields | Boolean | Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false. | Optional | 49.0 |
| excludeMedia | Boolean | Specifies whether the media groups of the category are returned (false) or not (true). If unspecified, defaults to false. | Optional | 49.0 |
| fields | String[] | Comma-separated list of field names.If this list is unspecified, all fields are returned. There is no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence. | Optional | 49.0 |
| mediaGroups | String[] | Comma-separated list of developer names of media group records.If this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence. | Optional | 49.0 |

Response body for GET

[Product Category Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_detail.htm "Details of a product category.")

## Code Examples

```
/commerce/webstores/webstoreId/product-categories/productCategoryId
```

## Related Topics

- Product Category Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_detail.htm)
