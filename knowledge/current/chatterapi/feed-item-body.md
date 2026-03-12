---
title: "Feed Item Body"
domain: chatterapi
topic: feed-item-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.775Z
estimatedTokens: 502
keywords: [Feed, Item, Chatter]
---

# Feed Item Body

> Chatter feed item body.

# Feed Item Body

Chatter feed item body.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isRichText | Boolean | Indicates if the body is rich text. | Small, 35.0 | 35.0 |
| messageSegments | Segment[] | Collection of message segments, based on type. Segments can be one or more of the following:Message Segment: Entity LinkMessage Segment: Field ChangeMessage Segment: Field Change NameMessage Segment: Field Change ValueMessage Segment: HashtagMessage Segment: Inline Image (version 35.0 and later)Message Segment: LinkMessage Segment: Markup Begin (version 35.0 and later)Message Segment: Markup End (version 35.0 and later)Message Segment: MentionMessage Segment: More ChangesMessage Segment: TextThe collection of message segments could contain message segment types introduced in later API versions. All message segment types are guaranteed to have text and type properties that are available in version 23.0 and later. If a client encounters an unknown message segment type, it can render the text value as a fallback. | Medium, 29.0 | 23.0 |
| text | String | Display-ready text of the message. Use this text if you don’t want to process the message segments. | Small, 29.0 | 23.0 |

#### See Also

-   [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

-   [Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

-   [Generic Feed Element](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_generic.htm "A generic feed element.")

-   [Message](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm "Message.")

-   [User Status](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_status.htm "User status.")

-   [Feed Item Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_summary.htm "A feed item summary.")

## Related Topics

- Message
                                        Segment: Entity Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_msg_entity_link.htm)
- Message
                                        Segment: Field Change (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_field_change.htm)
- Message
                                        Segment: Field Change Name (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_field_change_name.htm)
- Message
                                        Segment: Field Change Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_field_change_value.htm)
- Message
                                        Segment: Hashtag (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_hashtag.htm)
- Message Segment: Inline Image (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_inline_image_message_segment.htm)
- Message
                                        Segment: Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_link.htm)
- Message Segment: Markup Begin (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_markup_begin_message_segment.htm)
- Message Segment: Markup End (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_markup_end_message_segment.htm)
- Message
                                        Segment: Mention (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_mention.htm)
