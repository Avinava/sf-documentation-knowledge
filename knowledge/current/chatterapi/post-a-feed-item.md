---
title: "Post a Feed Item"
domain: chatterapi
topic: post-a-feed-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.938Z
estimatedTokens: 432
keywords: [Post, Feed, Item, Chatter]
---

# Post a Feed Item

> Post a feed item in Chatter.

# Post a Feed Item

Post a feed item in Chatter.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body and one [Message Segment Input: Mention](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_mention.htm "Inline mention of a user or group input. When creating a feedpost or comment, you can include up to 25 mentions.") request body.

Request body example

In the subjectId, specify the user, group, or record that will parent the feed item.

```

```

Request parameters

feedElementType, subjectId, text

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
   "feedElementType" : "FeedItem",
   "subjectId" : "0F9B000000000W2"
}
```

```
/services/data/v66.0/chatter/feed-elements?feedElementType=FeedItem&subjectId=0F9B000000000W2&text=New+post
```

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Mention (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_mention.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
