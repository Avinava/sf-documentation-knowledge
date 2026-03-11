---
title: "ConnectApi.ContentAttachmentInput"
domain: apex-reference
topic: connectapicontentattachmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.015Z
keywords: [ConnectApi.ContentAttachmentInput, Important]
---

# ConnectApi.ContentAttachmentInput

# ConnectApi.ContentAttachmentInput

Used to attach existing content to a comment or feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, use [ConnectApi.ContentCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_capability.htm "Attach or update a file on a comment. Use this class to attach a new file or update a file that has already been uploaded to Salesforce.").

Subclass of [ConnectApi.FeedItemAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm "Used to attach a file to a feed item.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| contentDocumentId | String | ID of the existing content. | 28.0–31.0 |