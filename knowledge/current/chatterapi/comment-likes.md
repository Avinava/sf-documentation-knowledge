---
title: "Comment Likes"
domain: chatterapi
topic: comment-likes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.909Z
estimatedTokens: 322
keywords: [Comment, Likes, unlike]
---

# Comment Likes

> Get information about the likes for a comment. Like or unlike a
      comment.

# Comment Likes

Get information about the likes for a comment. Like or unlike a comment.

Resource

```

```

```

```

Available version

23.0

Requires Chatter

Yes

HTTP methods

GET, PATCH, POST

PATCH is supported in version 39.0 and later.

Request parameters for GET

| Parameter Name | Type | Description |
| --- | --- | --- |
| page | Integer | Specifies the number of the page you want returned. |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isLikedBy​CurrentUser | Boolean | Specifies whether the context user likes (true) or unlikes (false) the comment. | Required | 39.0 |

Response body for GET and PATCH

[Like Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm "Page of Chatter likes.")

Request parameters for POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

Response body for POST

[Like](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm "Chatter like.")

## Code Examples

```
/chatter/comments/commentId/likes
```

```
/connect/communities/communityId/chatter/comments/commentId/likes
```

## Related Topics

- Like Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_page.htm)
- Like (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm)
