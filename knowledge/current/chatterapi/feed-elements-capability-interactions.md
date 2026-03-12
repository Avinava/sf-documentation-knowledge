---
title: "Feed Elements Capability, Interactions"
domain: chatterapi
topic: feed-elements-capability-interactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.208Z
estimatedTokens: 198
keywords: [Feed, Elements, Capability, Interactions, Access, element]
---

# Feed Elements Capability, Interactions

> Access the interactions capability of a feed
    element.

# Feed Elements Capability, Interactions

Access the interactions capability of a feed element.

Resource

```

```

```

```

Available version

37.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET

[Interactions Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_interactions_capability.htm "If a feed element has this capability, it has information about user interactions.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/interactions
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/interactions
```

## Related Topics

- Interactions Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_interactions_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
