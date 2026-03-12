---
title: "Post a Feed Element with a Code Block"
domain: chatterapi
topic: post-a-feed-element-with-a-code-block
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.922Z
estimatedTokens: 466
keywords: [Post, Feed, Element, Code, Block, Chatter]
---

# Post a Feed Element with a Code Block

> Post a feed element with a code block in Chatter.

# Post a Feed Element with a Code Block

Post a feed element with a code block in Chatter.

This example posts a feed element that includes a code block.

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm#connect_resources_feed_element "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Markup Begin](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_begin_segment_input.htm "The beginning tag for rich text markup.") request body, one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body, and one [Message Segment Input: Markup End](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_end_segment_input.htm "The end tag for rich text markup.") request body.

Request body example

```

```

Returns

[Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm#connect_responses_feed_item "A feed is made up of feed elements. A feed item is a type of feed element.")

## Code Examples

```
{
   "body":{
      "messageSegments":[
         {
            "markupType" : "Code",
            "type" : "MarkupBegin"
         },
         {
             "text" : "<script>var i, t = 0;
for (i = 0; i < 5; i++) {
   t +=
                       i;
}
</script>",
             "type" : "Text"
         },
         {
            "markupType" : "Code",
            "type" : "MarkupEnd"
         }
      ]
   },
   "subjectId":"me",
   "feedElementType":"FeedItem"
}
```

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Markup Begin (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_begin_segment_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Markup End (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_end_segment_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
