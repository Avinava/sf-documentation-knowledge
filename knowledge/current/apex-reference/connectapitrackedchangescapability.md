---
title: "ConnectApi.TrackedChangesCapability"
domain: apex-reference
topic: connectapitrackedchangescapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.141Z
keywords: [ConnectApi.TrackedChangesCapability, See]
---

# ConnectApi.TrackedChangesCapability

# ConnectApi.TrackedChangesCapability

If a feed element has this capability, it contains all changes to a record for a single tracked change event.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changes | List<ConnectApi.​TrackedChangeItem> | Collection of feed tracked changes. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")