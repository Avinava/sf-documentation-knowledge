---
title: "Feed Elements Capability, Call Collaboration"
domain: chatterapi
topic: feed-elements-capability-call-collaboration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.140Z
estimatedTokens: 200
keywords: [Feed, Elements, Capability, Call, Collaboration, Access, element]
---

# Feed Elements Capability, Call Collaboration

> Access the call collaboration capability of a feed
    element.

# Feed Elements Capability, Call Collaboration

Access the call collaboration capability of a feed element.

Resource

```

```

```

```

Available version

51.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET

[Call Collaboration Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_call_collaboration_capability.htm "If a feed element has this capability, it has a recording comment.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/call-collaboration
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/call-collaboration
```

## Related Topics

- Call Collaboration Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_call_collaboration_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
