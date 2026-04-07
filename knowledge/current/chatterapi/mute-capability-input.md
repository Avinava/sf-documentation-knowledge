---
title: "Mute Capability Input"
domain: chatterapi
topic: mute-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.129Z
estimatedTokens: 92
keywords: [Mute, Capability, unmute]
---

> Mute or unmute a feed element.

# Mute Capability Input

Mute or unmute a feed element.

Root XML tag

<muteCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isMutedByMe | Boolean | Indicates whether the feed element is muted for the context user. Default value is false. | Required | 35.0 |

## Code Examples

```
{
   "isMutedByMe": true
}
```
