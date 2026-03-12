---
title: "Feed Entity Share Capability Input"
domain: chatterapi
topic: feed-entity-share-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.673Z
estimatedTokens: 153
keywords: [Feed, Entity, Share, Capability, Input, post, comment]
---

# Feed Entity Share Capability Input

> Share a feed entity with a feed post or comment.

# Feed Entity Share Capability Input

Share a feed entity with a feed post or comment.

Root XML tag

<feedEntityShareCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| feedEntityId | String | ID of the feed entity to share with the feed post or comment. | Required | 39.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
{
   "feedEntityId" : "0D5B000000QEfX4"
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
