---
title: "Social Persona Intents, Follow"
domain: chatterapi
topic: social-persona-intents-follow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.675Z
estimatedTokens: 280
keywords: [Social, Persona, Intents, Follow, stop, network]
---

# Social Persona Intents, Follow

> Follow or stop following a social persona on its social
      network.

# Social Persona Intents, Follow

Follow or stop following a social persona on its social network.

Resource

```

```

The socialPersonaId is the ID of the social persona to follow or stop following. The socialAccountId is the ID of the social account that follows or stops following the social persona.

Available version

45.0–61.0

HTTP methods

PUT, DELETE

Use PUT to follow a social persona. Use DELETE to stop following a social persona.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

PUT takes no request parameters nor a request body.

Response body for PUT

[Follow Social Persona Intent](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_follow_social_persona_intent_output.htm "Follow intent for a social persona.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/social-engagement/social-persona/socialPersonaId/intents/follow/socialAccountId
```

## Related Topics

- Follow Social Persona Intent (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_follow_social_persona_intent_output.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
