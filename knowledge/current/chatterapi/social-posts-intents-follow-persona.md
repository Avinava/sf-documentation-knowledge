---
title: "Social Posts Intents, Follow Persona"
domain: chatterapi
topic: social-posts-intents-follow-persona
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.682Z
estimatedTokens: 301
keywords: [Social, Posts, Intents, Follow, Persona, stop, post, network]
---

# Social Posts Intents, Follow Persona

> Follow or stop following a social persona of a social post on its
      social network.

# Social Posts Intents, Follow Persona

Follow or stop following a social persona of a social post on its social network.

Resource

```

```

The socialPostId is the ID of the social post authored by the social persona to follow or stop following. The socialAccountId is the ID of the social account that follows or stops following the social persona.

Available version

45.0–61.0

HTTP methods

PUT, DELETE

Use PUT to follow a social persona of a social post. Use DELETE to stop following a social persona of a social post.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

PUT takes no request parameters nor a request body.

Response body for PUT

[Follow Social Persona Intent](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_follow_social_persona_intent_output.htm "Follow intent for a social persona.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/social-engagement/social-posts/socialPostId/intents/follow/socialAccountId
```

## Related Topics

- Follow Social Persona Intent (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_follow_social_persona_intent_output.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
