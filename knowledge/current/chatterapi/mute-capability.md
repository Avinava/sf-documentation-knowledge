---
title: "Mute Capability"
domain: chatterapi
topic: mute-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:20.894Z
estimatedTokens: 155
keywords: [Mute, Capability, users]
---

> If a feed element has this capability, users can mute it.

# Mute Capability

If a feed element has this capability, users can mute it. Muted feed elements are visible in the muted feed, and invisible in all other feeds that respect mute.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isMutedByMe | Boolean | Indicates whether the context user muted the feed element. | Small, 35.0 | 35.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
