---
title: "Pin Capability"
domain: chatterapi
topic: pin-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.348Z
estimatedTokens: 179
keywords: [Pin, Capability, feed, element, users, permission]
---

# Pin Capability

> If a feed element has this capability, users who have permission can pin it to a
    feed.

# Pin Capability

If a feed element has this capability, users who have permission can pin it to a feed.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isPinnableByMe | Boolean | Specifies whether the context user can pin or unpin the entity to the feed (true) or not (false). | Small, 41.0 | 41.0 |
| isPinned | Boolean | Specifies whether the entity is pinned (true) or not pinned (false) to the feed. | Small, 41.0 | 41.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
