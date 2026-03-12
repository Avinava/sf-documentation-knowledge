---
title: "Commerce Webstore Wishlist Items"
domain: chatterapi
topic: commerce-webstore-wishlist-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.626Z
estimatedTokens: 630
keywords: [Commerce, Webstore, Wishlist, Items, add]
---

# Commerce Webstore Wishlist Items

> Get wishlist items or add items to the wishlist.

# Commerce Webstore Wishlist Items

Get wishlist items or add items to the wishlist.

Adding items to wishlists respects buyer View Product entitlements and only users entitled to view product data can access it.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Available version

49.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 49.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 200. If unspecified, the default size is 25. | Optional | 49.0 |
| product​Fields | String | Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, ProductCode and productcode return the same results. | Optional | 51.0 |
| sortItemsBy | String | Sort order for wishlist items. Values are:CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.The default sort order is CreatedDateDesc. | Optional | 51.0 |

Response body for GET

[Wishlist Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_item_collection.htm "Collection of wishlist items.")

Request body for POST

Root XML tag

<wishlistItemInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| productId | String | ID of the product to update or add to the wishlist. | Required | 49.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |

Response body for POST

[Wishlist Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_item.htm "Item in a wishlist to create.")

## Code Examples

```
/commerce/webstores/webstoreId/wishlists/wishlistId/wishlist-items
```

```
{
"productId":"01tRM000000NJCeYAO"
}
```

## Related Topics

- Wishlist Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_item_collection.htm)
- Wishlist Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_item.htm)
