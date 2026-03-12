---
title: "Feed Elements Capability, Files"
domain: chatterapi
topic: feed-elements-capability-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.206Z
estimatedTokens: 192
keywords: [Feed, Elements, Capability, Files, Access, element]
---

# Feed Elements Capability, Files

> Access the files capability of a feed element.

# Feed Elements Capability, Files

Access the files capability of a feed element.

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

[Files Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_content_capability.htm "If a feed element has this capability, it has one or more file attachments.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/files
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/files
```

## Related Topics

- Files Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_content_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
