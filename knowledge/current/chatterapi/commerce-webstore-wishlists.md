---
title: "Commerce Webstore Wishlists"
domain: chatterapi
topic: commerce-webstore-wishlists
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.634Z
estimatedTokens: 663
keywords: [Commerce, Webstore, Wishlists, wishlist]
---

# Commerce Webstore Wishlists

> Get wishlists and create a wishlist.

# Commerce Webstore Wishlists

Get wishlists and create a wishlist.

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
| include​DisplayedList | Boolean | Specifies whether to include the displayed list (true) or not (false). If unspecified, defaults to false. | Optional | 49.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 51.0 |
| product​Fields | String | Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, ProductCode and productcode return the same results.If includeDisplayedList is unspecified or false, productFields is ignored. | Optional | 51.0 |
| sortItemsBy | String | Sort order for wishlist items. Values are:CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.The default sort order is CreatedDateDesc.If includeDisplayedList is unspecified or false, sortItemsBy is ignored. | Optional | 51.0 |
| wishlistId | String | ID of the wishlist. If unspecified, all the wishlist summaries are returned. | Optional | 49.0 |

Response body for GET

[Wishlist Summaries](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_summaries.htm "List of wishlist summaries and the displayed list for the context user.")

Request body for POST

Root XML tag

<wishlistInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the wishlist. | Required | 49.0 |
| products | Wishlist Item Input[] | List of products to add to the wishlist. | Optional | 49.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |

Response body for POST

[Wishlist](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist.htm "Wishlist, including summary and items.")

## Code Examples

```
/commerce/webstores/webstoreId/wishlists
```

```
{
"name":"My List",
"products": [
   {
   "productId": "01tRM000000Osl0YAC"
   },
   {
   "productId": "01tRM000000Oi92YAC"
   },
   {
   "productId": "01tRM000000NJCeYAO"
   }]
}
```

## Related Topics

- Wishlist Summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_summaries.htm)
- Wishlist Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_wishlist_item_input.htm)
- Wishlist (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist.htm)
