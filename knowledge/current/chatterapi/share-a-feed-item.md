---
title: "Share a Feed Item"
domain: chatterapi
topic: share-a-feed-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.374Z
estimatedTokens: 630
keywords: [Share, Feed, Item, Chatter]
---

# Share a Feed Item

> Share a Chatter feed item.

# Share a Feed Item

Share a Chatter feed item.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body and one [Message Segment Input: Mention](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_mention.htm "Inline mention of a user or group input. When creating a feedpost or comment, you can include up to 25 mentions.") request body.

This Feed Item Input request body also includes a capabilities property that is a [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.") request body. In this example, the Feed Element Capabilities Input request body includes a feedEntityShare property that is a [Feed Entity Share Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_entity_share_capability_input.htm "Share a feed entity with a feed post or comment.") request body.

Request body example

```

```

Request parameters

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The originalFeedElementId request parameter isn’t supported in version 39.0 and later. Use the request body to share a feed item in version 39.0 and later.

originalFeedElementId, subjectId

Request parameter example

```

```

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

## Code Examples

```
{ 
   "body" : {
      "messageSegments" : [
         {
            "type" : "Text",
            "text" : "When should we meet for release planning? "
         },
         {   
            "type" : "Mention",
            "id" : "005D00000016Qxp"
         }]
       },
   "capabilities" : {
      "feedEntityShare" : {
         "feedEntityId" : "0D5B000000Py41t"
         }
      },
   "feedElementType" : "FeedItem",
   "subjectId" : "0F9B000000000W2"
}
```

```
/services/data/v38.0/chatter/feed-elements?originalFeedElementId=0D5D0000000DaZBKA0&subjectId=me
```

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Mention (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_mention.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
- Feed Entity Share Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_entity_share_capability_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
