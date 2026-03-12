---
title: "Feed Elements Capability, Chatter Likes"
domain: chatterapi
topic: feed-elements-capability-chatter-likes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.147Z
estimatedTokens: 217
keywords: [Feed, Elements, Capability, Chatter, Likes, Access, element]
---

# Feed Elements Capability, Chatter Likes

> Access information about the chatter likes capability for a feed
      element.

# Feed Elements Capability, Chatter Likes

Access information about the chatter likes capability for a feed element.

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

GET

Response

[Chatter Likes Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm#connect_responses_chatter_likes_capability "If a feed element has this capability, the context user can like it. Exposes information about existing likes.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/chatter-likes
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/chatter-likes
```

## Related Topics

- Chatter Likes Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
