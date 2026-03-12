---
title: "Post Multiple @Mentions"
domain: chatterapi
topic: post-multiple-mentions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.910Z
estimatedTokens: 628
keywords: [Post, Multiple, @Mentions, mentions, Chatter, feed, item, comment]
---

# Post Multiple @Mentions

> Post up to 25 mentions in a Chatter feed item or comment.

# Post Multiple @Mentions

Post up to 25 mentions in a Chatter feed item or comment.

Resource

To post a feed item with up to 25 mentions, use [/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

To post a comment with up to 25 mentions, use [/chatter/feed-elements/feedElementId/capabilities/comments/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm#connect_resources_feed_element_capability_comments_items "Access comments for a feed element, or add a comment to a feed element.").

HTTP method

POST

Request body

For a feed item, use [Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm "Feed item input.")

For a comment, use [Comment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm "A comment.")

Both of these input request bodies include a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In these examples, the Message Body Input request body includes a messageSegments property that has two [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request bodies and two [Message Segment Input: Mention](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_mention.htm "Inline mention of a user or group input. When creating a feedpost or comment, you can include up to 25 mentions.") request bodies.

Request body example

This example is for a feed item:

```

```

This example is for a comment:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Include spaces where you need them because spaces aren’t added automatically before or after a mention.

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.")

[Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

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
            "id" : "005T0000000mzCy"
         },
         {
            "type" : "Text",
            "text" : " "
         },
         {   
            "type" : "Mention",
            "id" : "005B0000000Ek1S"
         } 
      ]
   },
   "feedElementType" : "FeedItem",
   "subjectId" : "005D00000016Qxp"
}
```

```
{ "body" : 
   {
      "messageSegments" : [ 
          {
            "type": "mention",
            "id":"005D0000001LL8YIAW"
          },
          {
            "type" : "Text",
            "text" : " "
         },
          {
            "type": "mention",
            "id":"005D0000001LL8sIAG"
          },
          {
             "type": "text",
             "text":" Did you see the new plans?"
          }
      ]
   }
}
```

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /chatter/feed-elements/feedElementId/capabilities/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Comment
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Mention (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_mention.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
