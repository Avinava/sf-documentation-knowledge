---
title: "ConnectApi.PinCapability"
domain: apex-reference
topic: connectapipincapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.388Z
estimatedTokens: 222
keywords: [ConnectApi.PinCapability, feed, element, capability, users, who, permission, pin, feed.]
---

# ConnectApi.PinCapability

> If a feed element has this capability, users who have permission can
      pin it to a feed.

# ConnectApi.PinCapability

If a feed element has this capability, users who have permission can pin it to a feed.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isPinnableByMe | Boolean | Specifies whether the context user can pin or unpin the entity to the feed (true) or not (false). | 41.0 |
| isPinned | Boolean | Specifies whether the entity is pinned (true) or not pinned (false) to the feed. | 41.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
