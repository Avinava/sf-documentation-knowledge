---
title: "Commerce Webstore Product Categories Children"
domain: chatterapi
topic: commerce-webstore-product-categories-children
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.471Z
estimatedTokens: 494
keywords: [Commerce, Webstore, Product, Categories, Children, specific, parent, category, top-level, store]
---

# Commerce Webstore Product Categories Children

> Get product categories for a specific parent product category or get
      all the top-level product categories for the store.

# Commerce Webstore Product Categories Children

Get product categories for a specific parent product category or get all the top-level product categories for the store.

Resource

```

```

Available version

52.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 52.0 |
| excludeFields | Boolean | Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false. | Optional | 52.0 |
| excludeMedia | Boolean | Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false. | Optional | 52.0 |
| fields | String[] | Comma-separated list of field names.If this list is unspecified, all fields are returned. There is no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence. | Optional | 52.0 |
| mediaGroups | String[] | Comma-separated list of developer names of media group records.If this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence. | Optional | 52.0 |
| parentProduct​CategoryId | String | ID of the product category for which you want to get all the children product categories. If unspecified, returns all the top-level product categories for the store. | Optional | 52.0 |

Response body for GET

[Product Category Detail Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_detail_collection.htm "Collection of product category details.")

## Code Examples

```
/commerce/webstores/webstoreId/product-categories/children
```

## Related Topics

- Product Category Detail Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_detail_collection.htm)
