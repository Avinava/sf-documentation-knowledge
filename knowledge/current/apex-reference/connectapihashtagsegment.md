---
title: "ConnectApi.HashtagSegment"
domain: apex-reference
topic: connectapihashtagsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.574Z
estimatedTokens: 165
keywords: [ConnectApi.HashtagSegment, Hashtag, segment.]
---

# ConnectApi.HashtagSegment

> Hashtag segment.

# ConnectApi.HashtagSegment

Hashtag segment.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| tag | String | Text of the topic without the hash symbol (#). | 28.0 |
| topicUrl | String | Connect REST API Topics resource that searches for the topic:/services/data/v66.0/chatter​/topics?exactMatch=true&q=topic | 28.0 |
| url | String | Connect REST API Feed Items resource URL that searches for the topic in all feed items in an organization:/services/data/v66.0/chatter​/feed-items?q=topic | 28.0 |

## Related Topics

- ConnectApi.MessageSegment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
