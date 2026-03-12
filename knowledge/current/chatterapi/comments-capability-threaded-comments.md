---
title: "Comments Capability, Threaded Comments"
domain: chatterapi
topic: comments-capability-threaded-comments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.874Z
estimatedTokens: 288
keywords: [Comments, Capability, Threaded, Access, comment]
---

# Comments Capability, Threaded Comments

> Access the comments capability for a comment.

# Comments Capability, Threaded Comments

Access the comments capability for a comment.

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
| threaded​Comments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify a value, the default is false. | Optional | 44.0 |

Response body for GET

[Comments Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm#connect_responses_comments_capability "If a feed element or comment has this capability, the context user can add a comment.")

If the comment doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/comments/commentId/capabilities/comments
```

```
/connect/communities/communityId/chatter/comments/commentId/capabilities/comments
```

## Related Topics

- Comments Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
