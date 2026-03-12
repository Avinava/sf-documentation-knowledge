---
title: "ConnectApi.NewFileAttachmentInput"
domain: apex-reference
topic: connectapinewfileattachmentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.168Z
estimatedTokens: 372
keywords: [ConnectApi.NewFileAttachmentInput, Attach, new, file, feed, item., Important]
---

# ConnectApi.NewFileAttachmentInput

> Attach a new file to a feed item.

# ConnectApi.NewFileAttachmentInput

Attach a new file to a feed item.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, use [ConnectApi.ContentCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_capability.htm "Attach or update a file on a comment. Use this class to attach a new file or update a file that has already been uploaded to Salesforce.").

The actual binary file, that is the attachment, is provided as part of the [BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.") in the method that takes this attachment input, such as postFeedItem or postComment.

Subclass of [ConnectApi.FeedItemAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm "Used to attach a file to a feed item.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Description of the file to be uploaded. | 28.0–31.0 |
| title | String | The title of the file. This value is required and is also used as the file name. For example, if the title is My Title, and the file is a .txt file, the file name is My Title.txt. | 28.0–31.0 |

## Related Topics

- ConnectApi.ContentCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_capability.htm)
- BinaryInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm)
- ConnectApi.FeedItemAttachmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_FeedItemAtt.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
