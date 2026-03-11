---
title: "ConnectApi.AbstractMessageBody"
domain: apex-reference
topic: connectapiabstractmessagebody
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.752Z
keywords: [ConnectApi.AbstractMessageBody]
---

# ConnectApi.AbstractMessageBody

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