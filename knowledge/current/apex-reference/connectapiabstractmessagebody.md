---
title: "ConnectApi.AbstractMessageBody"
domain: apex-reference
topic: connectapiabstractmessagebody
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.001Z
estimatedTokens: 170
keywords: [ConnectApi.AbstractMessageBody, Abstract, message]
---

# ConnectApi.AbstractMessageBody

> Abstract message body.

# ConnectApi.AbstractMessageBody

Abstract message body.

This class is abstract.

Superclass of:

-   [ConnectApi.FeedBody](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_body.htm "Feed body.")
-   [ConnectApi.MessageBody](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm "Message body.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isRichText | Boolean | Indicates whether the body is rich text. | 35.0 |
| messageSegments | List<ConnectApi.​​Message​Segment> | List of message segments | 28.0 |
| text | String | Display-ready text. Use this text if you don’t want to process the message segments. | 28.0 |

## Related Topics

- ConnectApi.FeedBody (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_body.htm)
- ConnectApi.MessageBody (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​​Message​Segment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
