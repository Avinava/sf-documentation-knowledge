---
title: "ConnectApi.BannerCapability"
domain: apex-reference
topic: connectapibannercapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.332Z
estimatedTokens: 244
keywords: [ConnectApi.BannerCapability, feed, element, capability, banner, motif, style]
---

# ConnectApi.BannerCapability

> If a feed element has this capability,
it has a banner motif and style.

# ConnectApi.BannerCapability

If a feed element has this capability, it has a banner motif and style.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| motif | ConnectApi.Motif | A banner motif. | 31.0 |
| style | ConnectApi.BannerStyle | Decorates a feed item with a color and set of icons. Possible value:Announcement—An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | 31.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.Motif (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm)
- ConnectApi.BannerStyle (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
