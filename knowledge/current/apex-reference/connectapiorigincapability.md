---
title: "ConnectApi.OriginCapability"
domain: apex-reference
topic: connectapiorigincapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.316Z
estimatedTokens: 205
keywords: [ConnectApi.OriginCapability, feed, element, capability, created, action.]
---

# ConnectApi.OriginCapability

> If a feed element has this capability, it was created by a feed
      action.

# ConnectApi.OriginCapability

If a feed element has this capability, it was created by a feed action.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actor | ConnectApi.UserSummary | The user who executed the feed action. | 33.0 |
| originRecord | ConnectApi.Reference | A reference to the feed element containing the feed action. | 33.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.UserSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
