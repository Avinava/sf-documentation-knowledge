---
title: "ConnectApi.LinkAttachment"
domain: apex-reference
topic: connectapilinkattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.047Z
keywords: [ConnectApi.LinkAttachment, Important]
---

# ConnectApi.LinkAttachment

# ConnectApi.LinkAttachment

Link attached to a feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.LinkCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_capability.htm "If a feed element has this capability, it has a link.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| title | String | Title given to the link if available, otherwise, null. | 28.0–31.0 |
| url | String | The link URL. | 28.0–31.0 |