---
title: "ConnectApi.MuteCapability"
domain: apex-reference
topic: connectapimutecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.034Z
estimatedTokens: 202
keywords: [ConnectApi.MuteCapability, feed, element, capability, users, mute]
---

# ConnectApi.MuteCapability

> If a feed element has this capability, users can mute it.

# ConnectApi.MuteCapability

If a feed element has this capability, users can mute it. Muted feed elements are visible in the muted feed, and invisible in all other feeds that respect mute.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isMutedByMe | Boolean | Indicates whether the context user muted the feed element. | 35.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
