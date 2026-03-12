---
title: "Feed Elements Capability, Extensions"
domain: chatterapi
topic: feed-elements-capability-extensions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.203Z
estimatedTokens: 197
keywords: [Feed, Elements, Capability, Extensions, Access, element]
---

# Feed Elements Capability, Extensions

> Access the extensions capability of a feed element.

# Feed Elements Capability, Extensions

Access the extensions capability of a feed element.

Resource

```

```

```

```

Available version

40.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET

[Extensions Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_extensions_capability.htm "If a feed element has this capability, it has one or more extensions associated with it.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/extensions
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/extensions
```

## Related Topics

- Extensions Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_extensions_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
