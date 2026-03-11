---
title: "ConnectApi.CommentCapabilitiesInput"
domain: apex-reference
topic: connectapicommentcapabilitiesinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.989Z
keywords: [ConnectApi.CommentCapabilitiesInput, See]
---

# ConnectApi.CommentCapabilitiesInput

# ConnectApi.CommentCapabilitiesInput

A container for all capabilities that can be included with a comment.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content | ConnectApi.ContentCapabilityInput | Content to attach to the comment. | Optional | 32.0 |
| feedEntityShare | ConnectApi.FeedEntityShareCapabilityInput | Feed entity to share to the comment. | Optional | 42.0 |
| record | ConnectApi.RecordCapabilityInput | Existing knowledge article to attach to the comment. | Optional | 42.0 |

#### See Also

-   [ConnectApi.CommentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")