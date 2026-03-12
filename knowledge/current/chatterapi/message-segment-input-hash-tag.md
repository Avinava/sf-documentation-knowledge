---
title: "Message Segment Input: Hash Tag"
domain: chatterapi
topic: message-segment-input-hash-tag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.124Z
estimatedTokens: 174
keywords: [Message, Segment, Input, Hash, Tag, Inline, because, tags, parsed, Text, segments]
---

# Message Segment Input: Hash Tag

> Inline hash tag input. The use of this segment is optional because hash tags are also
    parsed out of Text segments.

# Message Segment Input: Hash Tag

Inline hash tag input. The use of this segment is optional because hash tags are also parsed out of Text segments.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| tag | String | Text of the hash tag without the hash tag.NoteClosing square brackets ( ] ) are not supported in hash tag text. If the text contains a closing square bracket ( ] ), the hash tag ends at the bracket. | 23.0Multiple word hash tags are available in version 28.0. |
| type | String | Value is Hashtag. | 23.0 |

#### See Also

-   [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.")

## Related Topics

- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
