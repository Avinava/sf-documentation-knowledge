---
title: "Social Posts Intents, Like Social Post"
domain: chatterapi
topic: social-posts-intents-like-social-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.687Z
estimatedTokens: 183
keywords: [Social, Posts, Intents, Post, unlike, network]
---

# Social Posts Intents, Like Social Post

> Like or unlike a social post in its social network.

# Social Posts Intents, Like Social Post

Like or unlike a social post in its social network.

Resource

```

```

Available version

46.0–61.0

HTTP methods

DELETE, PUT

Use PUT to like a post. Use DELETE to unlike a post.

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Response body for PUT

[Like Social Post Intent](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_social_post_intent_output.htm "Like intent on a social post.")

## Code Examples

```
/connect/social-engagement/social-posts/socialPostId/intents/likes/socialAccountId
```

## Related Topics

- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Like Social Post Intent (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like_social_post_intent_output.htm)
