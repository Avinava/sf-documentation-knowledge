---
title: "ConnectApi.RecordSnapshotCapability"
domain: apex-reference
topic: connectapirecordsnapshotcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:11.515Z
estimatedTokens: 207
keywords: [ConnectApi.RecordSnapshotCapability, capability, snapshotted, record, event]
---

> If a feed element has this capability, it contains all the snapshotted
      fields of a record for a single create record event.

# ConnectApi.RecordSnapshotCapability

If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| recordView | ConnectApi.​RecordView | A record representation that includes metadata and data so you can display the record easily. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.​RecordView (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
