---
title: "Post a Feed Element with an Inline Image"
domain: chatterapi
topic: post-a-feed-element-with-an-inline-image
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.929Z
estimatedTokens: 461
keywords: [Post, Feed, Element, Inline, Image, Chatter]
---

# Post a Feed Element with an Inline Image

> Post a feed element with an inline image in Chatter.

# Post a Feed Element with an Inline Image

Post a feed element with an inline image in Chatter.

This example posts a feed element with an inline image that has been uploaded to Salesforce. To upload a new file, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

[/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm#connect_resources_feed_element "Post feed elements and search all feed elements in an organization.")

HTTP method

POST

Request body

[Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.")

This Feed Item Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has two [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request bodies and two [Message Segment Input: Inline Image](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_inline_image_segment_input.htm "Inline image segment input.") request bodies.

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
            "type":"Text",
            "text":"Please take a look at this file."
         },
         {
            "type":"InlineImage",
            "fileId":"069xx00000000QO",
            "altText":"API Spec"
         },
         {
            "type":"Text",
            "text":"And this one."
         },
         {
            "type":"InlineImage",
            "fileId":"069xx00000000QT",
            "altText":"REST API Spec"
         }
      ]
   },
   "subjectId":"me",
   "feedElementType":"FeedItem"
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Inline Image (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_inline_image_segment_input.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
