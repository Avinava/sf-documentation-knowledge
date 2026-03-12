---
title: "Message Segment Input: Link"
domain: chatterapi
topic: message-segment-input-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.126Z
estimatedTokens: 159
keywords: [Message, Segment, Input, Link, Inline, URL, provided, whitespace, text, space, inserted, because, links, parsed, segments]
---

# Message Segment Input: Link

> Inline link to a URL input. If a link is provided as input without whitespace text before
    it, a space is inserted. If a link is provided as input without whitespace text after it, a
    space is inserted. The use of this segment is optional because links are also parsed out of Text
    segments.

# Message Segment Input: Link

Inline link to a URL input. If a link is provided as input without whitespace text before it, a space is inserted. If a link is provided as input without whitespace text after it, a space is inserted. The use of this segment is optional because links are also parsed out of Text segments.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| type | String | Value is Link. | 23.0 |
| url | URL | URL to be used for the link. | 23.0 |

#### See Also

-   [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.")

## Related Topics

- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
