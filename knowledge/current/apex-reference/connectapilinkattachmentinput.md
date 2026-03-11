---
title: "ConnectApi.LinkAttachmentInput"
domain: apex-reference
topic: connectapilinkattachmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.246Z
keywords: [ConnectApi.LinkAttachmentInput, Important]
---

# ConnectApi.LinkAttachmentInput

# ConnectApi.LinkAttachmentInput

Add links to a feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, use [ConnectApi.LinkCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_link_capability.htm "Create or update a link on a feed element.").

Subclass of [ConnectApi.FeedItemAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm "Used to attach a file to a feed item.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| url | String | URL to be used for the link | 28.0–31.0 |
| urlName | String | Title of the link | 28.0–31.0 |