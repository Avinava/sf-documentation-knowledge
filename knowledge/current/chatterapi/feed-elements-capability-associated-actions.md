---
title: "Feed Elements Capability, Associated Actions"
domain: chatterapi
topic: feed-elements-capability-associated-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.121Z
estimatedTokens: 216
keywords: [Feed, Elements, Capability, Associated, Actions, Access, element]
---

# Feed Elements Capability, Associated Actions

> Access the associated actions capability of a feed
    element.

# Feed Elements Capability, Associated Actions

Access the associated actions capability of a feed element.

Resource

```

```

```

```

Available version

33.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response bodies for GET

[Associated Actions Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_associated_actions_capability.htm#connect_responses_associated_actions_capability "If a feed element has this capability, it has platform actions associated with it.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/associated-actions
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/associated-actions
```

## Related Topics

- Associated Actions Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_associated_actions_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
