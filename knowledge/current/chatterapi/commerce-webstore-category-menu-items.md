---
title: "Commerce Webstore Category Menu Items"
domain: chatterapi
topic: commerce-webstore-category-menu-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.314Z
estimatedTokens: 305
keywords: [Commerce, Webstore, Category, Menu, Items, Retrieve, product, parent, item, store]
---

# Commerce Webstore Category Menu Items

> Retrieve product category menu items for the given parent item and
      store.

# Commerce Webstore Category Menu Items

Retrieve product category menu items for the given parent item and store.

Resource

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addHomeMenuItem | Boolean | Indicates if a home menu item should be included. The default value is false. | Optional | 64.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 64.0 |
| includeImageUrl | Boolean | Indicates if the image URL should be included for root items. | Optional | 64.0 |
| maxItems | Integer | Maximum number of category items to be retrieved. | Optional | 64.0 |
| maxLevels | Integer | Maximum number of hierarchical levels to be retrieved. | Optional | 64.0 |
| publishStatus | String | Publish status of the storefront. | Optional | 64.0 |

Response body for GET

[Navigation Menu Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_item_collection.htm "Collection of navigation menu items.")

## Code Examples

```
/commerce/webstores/webstoreId/category-menu-items
```

## Related Topics

- Navigation Menu Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_item_collection.htm)
