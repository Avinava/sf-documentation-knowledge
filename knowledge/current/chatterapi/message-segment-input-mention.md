---
title: "Message Segment Input: Mention"
domain: chatterapi
topic: message-segment-input-mention
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.131Z
estimatedTokens: 277
keywords: [Message, Segment, Input, Mention, Inline, user, group, creating, feedpost, comment, include, mentions]
---

# Message Segment Input: Mention

> Inline mention of a user or group input. When creating a feedpost or comment, you can
    include up to 25 mentions.

# Message Segment Input: Mention

Inline mention of a user or group input. When creating a feedpost or comment, you can include up to 25 mentions.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | ID of the user or group to mention.To mention a user, use either id or username. You can’t include both.To mention a group, you must use id. | 23.0Groups are available in 29.0. |
| type | String | Value is Mention. | 23.0 |
| username | String | User name of the user to mention.To mention a user, use either id or username. You can’t include both. | 38.0 |

#### See Also

-   [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.")

-   [Post an @Mention](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mention.htm "Post an @mention in a Chatter feed item or comment.")

-   [Post Multiple @Mentions](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mentions.htm "Post up to 25 mentions in a Chatter feed item or comment.")

## Related Topics

- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Post an @Mention (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mention.htm)
- Post Multiple @Mentions (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mentions.htm)
