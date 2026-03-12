---
title: "ConnectApi.PinCapabilityInput"
domain: apex-reference
topic: connectapipincapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.539Z
estimatedTokens: 139
keywords: [ConnectApi.PinCapabilityInput, Pin, unpin, feed, element]
---

# ConnectApi.PinCapabilityInput

> Pin or unpin a feed element to a feed.

# ConnectApi.PinCapabilityInput

Pin or unpin a feed element to a feed.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityId | String | ID of the entity to pin or unpin. In version 41.0 and later, entityId must be a feed item ID. In version 41.0–42.0, only one feed item can be pinned per feed. In version 43.0 and later, three feed items can be pinned per feed. | Required | 41.0 |
| isPinned | Boolean | Specifies whether to pin (true) or unpin (false) the entity. | Required | 41.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
