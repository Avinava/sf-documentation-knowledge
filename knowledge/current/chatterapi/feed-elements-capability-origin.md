---
title: "Feed Elements Capability, Origin"
domain: chatterapi
topic: feed-elements-capability-origin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.221Z
estimatedTokens: 217
keywords: [Feed, Elements, Capability, Origin, Access, element, created, action]
---

# Feed Elements Capability, Origin

> Access the origin capability of a feed element. If a feed element
      has this capability, it was created by a feed action.

# Feed Elements Capability, Origin

Access the origin capability of a feed element. If a feed element has this capability, it was created by a feed action.

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

[Origin Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_origin_capability.htm#connect_responses_origin_capability "If a feed element has this capability, it was created by a feed action.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/origin
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/origin
```

## Related Topics

- Origin Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_origin_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
