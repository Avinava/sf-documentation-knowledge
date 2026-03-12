---
title: "Commerce Webstore Wishlist Item"
domain: chatterapi
topic: commerce-webstore-wishlist-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.620Z
estimatedTokens: 193
keywords: [Commerce, Webstore, Wishlist, Item]
---

# Commerce Webstore Wishlist Item

> Delete a wishlist item.

# Commerce Webstore Wishlist Item

Delete a wishlist item.

Resource

```

```

Available version

49.0

HTTP methods

DELETE

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 49.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/commerce/webstores/webstoreId/wishlists/wishlistId/wishlist-items/wishlistItemId
```

## Related Topics

- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
