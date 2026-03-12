---
title: "Threaded Comment"
domain: chatterapi
topic: threaded-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.918Z
estimatedTokens: 271
keywords: [Threaded, Comment, context, parent, comments, post]
---

# Threaded Comment

> Get a threaded comment in context of its parent comments and
      post.

# Threaded Comment

Get a threaded comment in context of its parent comments and post.

Resource

```

```

```

```

Available version

44.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 44.0 |

Response body for GET

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

If the comment doesn’t support the comments capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm#connect_error_responses "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/comments/commentId/thread-context
```

```
/connect/communities/communityId/chatter/comments/commentId/thread-context
```

## Related Topics

- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- 404: Not Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
