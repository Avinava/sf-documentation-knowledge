---
title: "Like Message Body"
domain: chatterapi
topic: like-message-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.293Z
estimatedTokens: 232
keywords: [Message, Chatter]
---

# Like Message Body

> Chatter like message body.

# Like Message Body

Chatter like message body.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| messageSegments | Segments[] | Collection of message segments, based on type. Segments can be one or more of the following:Message Segment: Entity LinkMessage Segment: Resource LinkMessage Segment: Text | Medium, 29.0 | 27.0 |
| text | String | Text summary of the users who like the feed item or comment. For example, “You like this.” or “Renee Moreau, Gordon Johnson, and Pam Jones like this.” | Small, 29.0 | 27.0 |

#### See Also

-   [Chatter Likes Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm "If a feed element has this capability, the context user can like it. Exposes information about existing likes.")

-   [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

## Related Topics

- Message Segment: Entity
                    Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_msg_entity_link.htm)
- Message Segment: Resource Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_resource.htm)
- Message Segment: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_text.htm)
- Chatter Likes Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_likes_capability.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
