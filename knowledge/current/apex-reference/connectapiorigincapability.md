---
title: "ConnectApi.OriginCapability"
domain: apex-reference
topic: connectapiorigincapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.533Z
keywords: [ConnectApi.OriginCapability, See]
---

# ConnectApi.OriginCapability

# ConnectApi.OriginCapability

If a feed element has this capability, it was created by a feed action.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actor | ConnectApi.UserSummary | The user who executed the feed action. | 33.0 |
| originRecord | ConnectApi.Reference | A reference to the feed element containing the feed action. | 33.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")