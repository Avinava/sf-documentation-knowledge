---
title: "Feed Item Attachment: Record Snapshot"
domain: chatterapi
topic: feed-item-attachment-record-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.768Z
estimatedTokens: 201
keywords: [Feed, Item, Attachment, Record, Snapshot]
---

# Feed Item Attachment: Record Snapshot

> Record snapshot feed item attachment.

# Feed Item Attachment: Record Snapshot

Record snapshot feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Record Snapshot Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot_capability.htm "If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recordView | Record View | A representation of a record. | Small, 29.0 | 29.0–31.0 |
| type | String | RecordSnapshot | Small, 29.0 | 29.0–31.0 |

## Related Topics

- Record Snapshot Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot_capability.htm)
- Record View (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordView.htm)
