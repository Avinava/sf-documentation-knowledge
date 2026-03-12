---
title: "Message Segment: Hashtag"
domain: chatterapi
topic: message-segment-hashtag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.765Z
estimatedTokens: 197
keywords: [Message, Segment, Hashtag, inline]
---

# Message Segment: Hashtag

> Represents an inline hashtag.

# Message Segment: Hashtag

Represents an inline hashtag.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| tag | String | Text of the hashtag without the hash symbol (#) | Small, 29.0 | 23.0 |
| text | String | Text of the hashtag with the hash symbol (#) | Small, 29.0 | 23.0 |
| topicUrl | String | URL to the topic in this format:/services/data/.../topics?exactMatch=true&q=tag | Small, 29.0 | 28.0 |
| type | String | Value is Hashtag | Small, 29.0 | 23.0 |
| url | String | URL search for the tag in this format:services/data/.../feed-elements?q=%23tag | Small, 29.0 | 23.0 |

#### See Also

-   [Feed Item Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm "Chatter feed item body.")

## Related Topics

- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
