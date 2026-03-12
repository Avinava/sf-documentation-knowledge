---
title: "Feed Item Preamble Message Body"
domain: chatterapi
topic: feed-item-preamble-message-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.785Z
estimatedTokens: 203
keywords: [Feed, Item, Preamble, Message]
---

# Feed Item Preamble Message Body

> Feed item preamble message body.

# Feed Item Preamble Message Body

Feed item preamble message body.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| messageSegments | Segments[] | Collection of message segments, based on type. Segments can be one or more of the following:Message Segment: Entity LinkMessage Segment: Link (version 35.0 and later)Message Segment: Text | Medium, 29.0 | 27.0 |
| text | String | The preamble is the title of the post. This property contains renderable plain text for all the segments of the message, for example, “App Builders - Pam Jones”. | Small, 29.0 | 27.0 |

#### See Also

-   [Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

## Related Topics

- Message Segment: Entity
                    Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_msg_entity_link.htm)
- Message Segment: Link (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_link.htm)
- Message Segment: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_text.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
