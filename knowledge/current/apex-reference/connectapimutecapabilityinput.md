---
title: "ConnectApi.MuteCapabilityInput"
domain: apex-reference
topic: connectapimutecapabilityinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.325Z
keywords: [ConnectApi.MuteCapabilityInput, See]
---

# ConnectApi.MuteCapabilityInput

# ConnectApi.MuteCapabilityInput

Mute or unmute a feed element.

This class is a subclass of [ConnectApi.FeedElementCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element_capability.htm#apex_connectapi_input_feed_element_capability "A feed element capability.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isMutedByMe | Boolean | Indicates whether the feed element is muted for the context user. Default value is false. | Required | 35.0 |

#### See Also

-   [setIsMutedByMe(communityId, feedElementId, isMutedByMe)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_setIsMutedByMe_1 "Mute or unmute a feed element.")