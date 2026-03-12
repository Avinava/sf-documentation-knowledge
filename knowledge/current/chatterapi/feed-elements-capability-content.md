---
title: "Feed Elements Capability, Content"
domain: chatterapi
topic: feed-elements-capability-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.176Z
estimatedTokens: 197
keywords: [Feed, Elements, Capability, Content, Access, element]
---

# Feed Elements Capability, Content

> Access the content capability of a feed element.

# Feed Elements Capability, Content

Access the content capability of a feed element.

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

[Content Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm#connect_responses_content_capability "If a comment has this capability, it has a file attachment.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/content
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/content
```

## Related Topics

- Content Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
