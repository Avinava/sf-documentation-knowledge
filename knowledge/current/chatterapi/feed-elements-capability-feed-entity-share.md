---
title: "Feed Elements Capability, Feed Entity Share"
domain: chatterapi
topic: feed-elements-capability-feed-entity-share
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.253Z
estimatedTokens: 203
keywords: [Feed, Elements, Capability, Entity, Share, Access, element]
---

# Feed Elements Capability, Feed Entity Share

> Access the feed entity share capability of a feed
    element.

# Feed Elements Capability, Feed Entity Share

Access the feed entity share capability of a feed element.

Resource

```

```

```

```

Available version

39.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET

[Feed Entity Share Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_share_capability.htm "If a feed element or comment has this capability, a feed entity is shared with it.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/feed-entity-share
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/feed-entity-share
```

## Related Topics

- Feed Entity Share Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_share_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
