---
title: "Pin Capability Input"
domain: chatterapi
topic: pin-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.479Z
estimatedTokens: 152
keywords: [Pin, Capability, Input, unpin, feed, element]
---

# Pin Capability Input

> Pin or unpin a feed element to a feed.

# Pin Capability Input

Pin or unpin a feed element to a feed.

Root XML tag

<pinCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityId | String | ID of the entity to pin or unpin. In version 41.0 and later, entityId must be a feed item ID. In version 41.0–42.0, only one feed item can be pinned per feed. In version 43.0 and later, three feed items can be pinned per feed. | Required | 41.0 |
| isPinned | Boolean | Specifies whether to pin (true) or unpin (false) the entity. | Required | 41.0 |

## Code Examples

```
{
   "entityId":"0D5B000000TW7uh",
   "isPinned": "true"
}
```
