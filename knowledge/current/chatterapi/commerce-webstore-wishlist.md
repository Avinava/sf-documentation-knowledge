---
title: "Commerce Webstore Wishlist"
domain: chatterapi
topic: commerce-webstore-wishlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.614Z
estimatedTokens: 699
keywords: [Commerce, Webstore, Wishlist]
---

# Commerce Webstore Wishlist

> Get, update the name of, and delete a wishlist.

# Commerce Webstore Wishlist

Get, update the name of, and delete a wishlist.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Available version

49.0

HTTP methods

GET, PATCH, DELETE

PATCH is supported in version 50.0 and later.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 51.0 |
| product​Fields | String | Comma-separated list of custom product fields. Fields aren’t case-sensitive. For example, ProductCode and productcode return the same results. | Optional | 51.0 |
| sortItemsBy | String | Sort order for wishlist items. Values are:CreatedDateAsc—Sorts by oldest creation date.CreatedDateDesc—Sorts by most recent creation date.The default sort order is CreatedDateDesc. | Optional | 51.0 |

Response body for GET

[Wishlist](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist.htm "Wishlist, including summary and items.")

Request body for PATCH

Root XML tag

<wishlistUpdateInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Update a wishlist name. | Required | 50.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 50.0 |

Response body for PATCH

[Wishlist Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_summary.htm "Summary of a wishlist.")

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 51.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/commerce/webstores/webstoreId/wishlists/wishlistId
```

```
{
"name":"My List"
}
```

## Related Topics

- Wishlist (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist.htm)
- Wishlist Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_summary.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
