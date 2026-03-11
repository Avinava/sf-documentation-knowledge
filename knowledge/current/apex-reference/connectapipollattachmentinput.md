---
title: "ConnectApi.PollAttachmentInput"
domain: apex-reference
topic: connectapipollattachmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.691Z
keywords: [ConnectApi.PollAttachmentInput, Important]
---

# ConnectApi.PollAttachmentInput

# ConnectApi.PollAttachmentInput

Attach a poll to a feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, use [ConnectApi.PollCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_poll_capability.htm "Create, update, or vote on a poll on a feed element.").

Subclass of [ConnectApi.FeedItemAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm "Used to attach a file to a feed item.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| pollChoices | List<String> | The text labels for the poll items. Polls must contain between 2 to 10 poll choices. | 28.0–31.0 |