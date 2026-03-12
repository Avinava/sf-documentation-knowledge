---
title: "Comment Capability, Editability"
domain: chatterapi
topic: comment-capability-editability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.880Z
estimatedTokens: 191
keywords: [Comment, Capability, Editability, Determines, whether, context, user, edit]
---

# Comment Capability, Editability

> Determines whether the context user can edit a
    comment.

# Comment Capability, Editability

Determines whether the context user can edit a comment.

Resource

```

```

```

```

Available version

34.0

Requires Chatter

Yes

HTTP methods

GET

Response body for GET

[Feed Entity Is Editable](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_is_editable.htm "Indicates whether the context user can edit a feed element or comment.")

If the comment doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/comments/commentId/capabilities/edit/is-editable-by-me
```

```
/connect/communities/communityId/chatter/comments/commentId/capabilities/edit/is-editable-by-me
```

## Related Topics

- Feed Entity Is Editable (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_is_editable.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
