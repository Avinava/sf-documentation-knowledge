---
title: "Comments Capability, Threaded Comments Items"
domain: chatterapi
topic: comments-capability-threaded-comments-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.878Z
estimatedTokens: 322
keywords: [Comments, Capability, Threaded, Items, comment]
---

# Comments Capability, Threaded Comments Items

> Get threaded comments for a comment.

# Comments Capability, Threaded Comments Items

Get threaded comments for a comment.

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
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response, such as currentPageToken or nextPageToken. If you don’t specify a value, the first page is returned. | Optional | 43.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 43.0 |

Response body for GET

[Comment Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm "A page of comments.")

If the comment doesn’t support the comments capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm#connect_error_responses "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/comments/commentId/capabilities/comments/items
```

```
/connect/communities/communityId/chatter/comments/commentId/capabilities/comments/items
```

## Related Topics

- Comment Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm)
- 404: Not Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
