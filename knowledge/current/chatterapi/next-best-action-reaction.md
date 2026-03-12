---
title: "Next Best Action, Reaction"
domain: chatterapi
topic: next-best-action-reaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.892Z
estimatedTokens: 201
keywords: [Best, Action, Reaction, recommendation]
---

# Next Best Action, Reaction

> Get and delete a recommendation reaction.

# Next Best Action, Reaction

Get and delete a recommendation reaction.

Resource

```

```

Available version

45.0

HTTP methods

GET, DELETE

Users with the Manage Next Best Action Recommendations or Modify All Data permission can get and delete recommendation reactions.

Response body for GET

[Recommendation Reaction](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction.htm "Reaction to a recommendation produced by a recommendation strategy.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/recommendation-strategies/reactions/reactionId
```

## Related Topics

- Recommendation Reaction (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_reaction.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
