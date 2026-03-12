---
title: "ConnectApi.HashtagSegmentInput"
domain: apex-reference
topic: connectapihashtagsegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.999Z
estimatedTokens: 188
keywords: [ConnectApi.HashtagSegmentInput, Include, hashtag, feed, item, comment.]
---

# ConnectApi.HashtagSegmentInput

> Include a hashtag in a feed item or comment.

# ConnectApi.HashtagSegmentInput

Include a hashtag in a feed item or comment.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| tag | String | Text of the hash tag without the # (hash tag) prefixNoteClosing square brackets ( ] ) are not supported in hash tag text. If the text contains a closing square bracket ( ] ), the hash tag ends at the bracket. | 28.0 |

#### See Also

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")

## Related Topics

- ConnectApi.MessageSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.MessageBodyInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm)
