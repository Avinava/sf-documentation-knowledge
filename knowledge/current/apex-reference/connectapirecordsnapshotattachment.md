---
title: "ConnectApi.RecordSnapshotAttachment"
domain: apex-reference
topic: connectapirecordsnapshotattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.828Z
estimatedTokens: 222
keywords: [ConnectApi.RecordSnapshotAttachment, Fields, record, point, time, created., Important]
---

# ConnectApi.RecordSnapshotAttachment

> Fields of a record at the point in time when the record was created.

# ConnectApi.RecordSnapshotAttachment

Fields of a record at the point in time when the record was created.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.RecordSnapshotCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot_capability.htm "If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| recordView | ConnectApi.​RecordView | The representation of the record. | 29.0–31.0 |

## Related Topics

- ConnectApi.RecordSnapshotCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- ConnectApi.​RecordView (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm)
