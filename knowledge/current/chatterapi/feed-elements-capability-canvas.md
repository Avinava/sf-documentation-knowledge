---
title: "Feed Elements Capability, Canvas"
domain: chatterapi
topic: feed-elements-capability-canvas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.142Z
estimatedTokens: 197
keywords: [Feed, Elements, Capability, Canvas, Access, element]
---

# Feed Elements Capability, Canvas

> Access the canvas capability of a feed element.

# Feed Elements Capability, Canvas

Access the canvas capability of a feed element.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response bodies for GET

[Canvas Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_canvas_capability.htm#connect_responses_canvas_capability "If a feed element has this capability, it renders a canvas app.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/canvas
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/canvas
```

## Related Topics

- Canvas Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_canvas_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
