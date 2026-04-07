---
title: "Record Snapshot Capability"
domain: chatterapi
topic: record-snapshot-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:22.628Z
estimatedTokens: 158
keywords: [Record, Snapshot, Capability, snapshotted, event]
---

> If a feed element has this capability, it contains all the snapshotted fields of a record
    for a single create record event.

# Record Snapshot Capability

If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recordView | Record View | A record representation that includes metadata and data so you can display the record easily. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Record View (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
