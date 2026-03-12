---
title: "Post a Rich-Text Comment"
domain: chatterapi
topic: post-a-rich-text-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.913Z
estimatedTokens: 463
keywords: [Post, Rich-Text, Comment, Chatter]
---

# Post a Rich-Text Comment

> Post a rich-text comment in Chatter.

# Post a Rich-Text Comment

Post a rich-text comment in Chatter.

This example posts a comment that includes two paragraphs, one in bold, and an extra line break between them.

Resource

[/chatter/feed-elements/feedElementId/capabilities/comments/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm#connect_resources_feed_element_capability_comments_items "Access comments for a feed element, or add a comment to a feed element.")

HTTP method

POST

Request body

[Comment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm "A comment.")

This Comment Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has three [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request bodies, four [Message Segment Input: Markup Begin](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_begin_segment_input.htm "The beginning tag for rich text markup.") request bodies, and four [Message Segment Input: Markup End](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_end_segment_input.htm "The end tag for rich text markup.") request bodies.

Request body example

```

```

Returns

[Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

## Code Examples

```
{
   "body":{
      "messageSegments":[
         {
            "markupType" : "Paragraph",
            "type" : "MarkupBegin"
         },
         {
            "markupType" : "Bold",
            "type" : "MarkupBegin"
         },
         {
             "text" : "First line of text.",
             "type" : "Text"
         },
         {
            "markupType" : "Bold",
            "type" : "MarkupEnd"
         },
         {
            "markupType" : "Paragraph",
            "type" : "MarkupEnd"
         },
         {
            "markupType" : "Paragraph",
            "type" : "MarkupBegin"
         },
         {
            "text" : "&nbsp;",
            "type" : "Text"
         },
         {
            "markupType" : "Paragraph",
            "type" : "MarkupEnd"
         },
         {
            "markupType" : "Paragraph",
            "type" : "MarkupBegin"
         },
         {
            "text" : "Second line of text.",
            "type" : "Text"
         },
         {
            "markupType" : "Paragraph",
            "type" : "MarkupEnd"
         }
      ]
   }
}
```

## Related Topics

- /chatter/feed-elements/feedElementId/capabilities/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Comment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Markup Begin (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_begin_segment_input.htm)
- Message Segment Input: Markup End (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_markup_end_segment_input.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
