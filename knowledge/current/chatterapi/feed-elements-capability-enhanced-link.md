---
title: "Feed Elements Capability, Enhanced Link"
domain: chatterapi
topic: feed-elements-capability-enhanced-link
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.201Z
estimatedTokens: 224
keywords: [Feed, Elements, Capability, Enhanced, Link, Access, element]
---

# Feed Elements Capability, Enhanced Link

> Access the enhanced link capability of a feed
    element.

# Feed Elements Capability, Enhanced Link

Access the enhanced link capability of a feed element.

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

[Enhanced Link Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_enhanced_link_capability.htm#connect_responses_enhanced_link_capability "If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/enhanced-link
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/enhanced-link
```

## Related Topics

- Enhanced Link Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_enhanced_link_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
