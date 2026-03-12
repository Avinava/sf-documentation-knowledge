---
title: "Message Segment: Field Change"
domain: chatterapi
topic: message-segment-field-change
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.754Z
estimatedTokens: 334
keywords: [Message, Segment, Change, inline]
---

# Message Segment: Field Change

> Represents an inline field change.

# Message Segment: Field Change

Represents an inline field change.

## Example

An example of an inline field change is "First Name from Bob to Joe". This example segment consists of multiple segments.

```

```

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| segments | Segments[] | Collection of message segments, based on type. Segments can be one or more of the following:Message Segment: Entity LinkMessage Segment: Field ChangeMessage Segment: Field Change NameMessage Segment: Field Change ValueMessage Segment: HashtagMessage Segment: Inline Image (version 35.0 and later)Message Segment: LinkMessage Segment: Markup Begin (version 35.0 and later)Message Segment: Markup End (version 35.0 and later)Message Segment: MentionMessage Segment: More ChangesMessage Segment: Text | Medium, 29.0 | 23.0 |
| text | String | Formatted text of the change. For example:"City from San Francisco to  New Orleans" | Small, 29.0 | 23.0 |
| type | String | Value is FieldChange | Small, 29.0 | 23.0 |

#### See Also

-   [Feed Item Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm "Chatter feed item body.")

-   [Message Segment: More Changes](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_more.htm "Represents more changes.")

## Code Examples

```
[
   Text("Owner from "), 
   FieldChangeValue("Bob Smith"), 
   Text(" to "), 
   FieldChangeValue("Dave Jones")
]
```

```
"City from San Francisco to
 New Orleans"
```

## Related Topics

- Message
                                        Segment: Entity Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_msg_entity_link.htm)
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
- Message
                                        Segment: More Changes (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_more.htm)
