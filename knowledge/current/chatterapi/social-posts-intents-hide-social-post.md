---
title: "Social Posts Intents, Hide Social Post"
domain: chatterapi
topic: social-posts-intents-hide-social-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.685Z
estimatedTokens: 184
keywords: [Social, Posts, Intents, Hide, Post, unhide, network]
---

# Social Posts Intents, Hide Social Post

> Hide or unhide a social post on its social network.

# Social Posts Intents, Hide Social Post

Hide or unhide a social post on its social network.

Resource

```

```

Available version

46.0–61.0

HTTP methods

DELETE, PUT

Use PUT to hide a post. Use DELETE to unhide a post.

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Response body for PUT

[Hide Social Post Intent](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_hide_social_post_intent_output.htm "Hide intent for a social post.")

## Code Examples

```
/connect/social-engagement/social-posts/socialPostId/intents/hide/socialAccountId
```

## Related Topics

- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Hide Social Post Intent (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_hide_social_post_intent_output.htm)
