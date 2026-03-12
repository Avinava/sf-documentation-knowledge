---
title: "Feed Item Attachment: Tracked Change"
domain: chatterapi
topic: feed-item-attachment-tracked-change
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.770Z
estimatedTokens: 200
keywords: [Feed, Item, Attachment, Tracked, Change]
---

# Feed Item Attachment: Tracked Change

> Tracked change feed item attachment.

# Feed Item Attachment: Tracked Change

Tracked change feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Tracked Changes Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_changes_capability.htm "If a feed element has this capability, it contains all changes to a record for a single tracked change event.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changes | Feed Tracked Change[] | Collection of feed tracked changes. | Small, 29.0 | 29.0–31.0 |
| type | String | TrackedChange | Small, 29.0 | 29.0–31.0 |

## Related Topics

- Tracked Changes Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_changes_capability.htm)
- Feed Tracked Change (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_tracked_change.htm)
