---
title: "Message Segment: Mention"
domain: chatterapi
topic: message-segment-mention
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.774Z
estimatedTokens: 275
keywords: [Message, Segment, Mention, inline, @mention]
---

# Message Segment: Mention

> Represents an inline @mention.

# Message Segment: Mention

Represents an inline @mention.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accessible | Boolean | Specifies whether the mentioned user or group can see the mention (true) or not (false). | Small, 29.0 | 23.0 |
| name | String | Name of the mentioned user or group. | Small, 29.0 | 23.0 |
| text | String | Plain text of the mention. | Small, 29.0 | 23.0 |
| type | String | Value is Mention. | Small, 29.0 | 23.0 |
| record |  | Information about the mentioned user or group. One of these response bodies:GroupUser DetailUser Summary | Small, 29.0 | 29.0 |
| user | User Summary | Information about the mentioned user, null if the context user doesn’t have access.ImportantIn versions 29.0 and later, use the record property. | None | 23.0–28.0In versions before 29.0, if the mention is not a user, the mention is in a Message Segment: Text response body. |

#### See Also

-   [Feed Item Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm "Chatter feed item body.")

## Related Topics

- Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
