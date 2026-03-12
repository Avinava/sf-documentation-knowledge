---
title: "Feed Elements Capability, Media References"
domain: chatterapi
topic: feed-elements-capability-media-references
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.215Z
estimatedTokens: 200
keywords: [Feed, Elements, Capability, Media, References, Access, element]
---

# Feed Elements Capability, Media References

> Access the media references capability of a feed
    element.

# Feed Elements Capability, Media References

Access the media references capability of a feed element.

Resource

```

```

```

```

Available version

41.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET

[Media Reference Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_media_reference_capability.htm "If a feed element has this capability, it has one or more media references.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/media-references
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/media-references
```

## Related Topics

- Media Reference Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_media_reference_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
