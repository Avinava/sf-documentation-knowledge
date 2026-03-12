---
title: "Feed Elements Capability, Chatter Likes Items"
domain: chatterapi
topic: feed-elements-capability-chatter-likes-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.153Z
estimatedTokens: 696
keywords: [Feed, Elements, Capability, Chatter, Likes, Items, Access, element, unlike]
---

# Feed Elements Capability, Chatter Likes Items

> Access a page of likes for a feed element. Like or unlike a feed
      element.

# Feed Elements Capability, Chatter Likes Items

Access a page of likes for a feed element. Like or unlike a feed element.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, PATCH, POST

PATCH is supported in version 39.0 and later.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Specifies the number of the page you want returned. If you don’t specify a value, the first page is returned. | Optional | 32.0 |
| pageSize | Integer | Specifies the number of likes per page. Valid values are from 1 to 100. If you don't specify a size, the default is 25. | Optional | 32.0 |

Response body for GET

[Like Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm#connect_responses_like_page "Page of Chatter likes.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isLikedBy​CurrentUser | Boolean | Specifies whether the context user likes (true) or unlikes (false) the feed element. | Required | 39.0 |

Response body for PATCH

[Like Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm#connect_responses_like_page "Page of Chatter likes.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Request parameters for POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

[Like](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm#connect_responses_like "Chatter like.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/chatter-likes/items
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/chatter-likes/items
```

## Related Topics

- Like Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Like (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm)
