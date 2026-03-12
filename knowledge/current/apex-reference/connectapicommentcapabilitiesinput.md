---
title: "ConnectApi.CommentCapabilitiesInput"
domain: apex-reference
topic: connectapicommentcapabilitiesinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.640Z
estimatedTokens: 196
keywords: [ConnectApi.CommentCapabilitiesInput, container, capabilities, included, comment.]
---

# ConnectApi.CommentCapabilitiesInput

> A container for all capabilities that can be included with a comment.

# ConnectApi.CommentCapabilitiesInput

A container for all capabilities that can be included with a comment.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content | ConnectApi.ContentCapabilityInput | Content to attach to the comment. | Optional | 32.0 |
| feedEntityShare | ConnectApi.FeedEntityShareCapabilityInput | Feed entity to share to the comment. | Optional | 42.0 |
| record | ConnectApi.RecordCapabilityInput | Existing knowledge article to attach to the comment. | Optional | 42.0 |

#### See Also

-   [ConnectApi.CommentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")

## Related Topics

- ConnectApi.ContentCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_capability.htm)
- ConnectApi.FeedEntityShareCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_entity_share_capability.htm)
- ConnectApi.RecordCapabilityInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_record_capability.htm)
- ConnectApi.CommentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm)
