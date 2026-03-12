---
title: "Feed Elements Capability, Banner"
domain: chatterapi
topic: feed-elements-capability-banner
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.124Z
estimatedTokens: 199
keywords: [Feed, Elements, Capability, Banner, Access, element]
---

# Feed Elements Capability, Banner

> Access the banner capability of a feed element.

# Feed Elements Capability, Banner

Access the banner capability of a feed element.

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

[Banner Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_capability.htm#connect_responses_banner_capability "If this feed element has this capability, it has a banner motif and style.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/banner
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/banner
```

## Related Topics

- Banner Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
