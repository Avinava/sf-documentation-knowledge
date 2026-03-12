---
title: "Post a Comment with an Inline Image"
domain: chatterapi
topic: post-a-comment-with-an-inline-image
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.902Z
estimatedTokens: 446
keywords: [Post, Comment, Inline, Image, Chatter]
---

# Post a Comment with an Inline Image

> Post a Chatter comment with an inline image.

# Post a Comment with an Inline Image

Post a Chatter comment with an inline image.

This example posts a comment with an inline image that has been uploaded to Salesforce. To upload a new file, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

[/chatter/feed-elements/feedElementId/capabilities/comments/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm#connect_resources_feed_element_capability_comments_items "Access comments for a feed element, or add a comment to a feed element.")

HTTP method

POST

Request body

[Comment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm "A comment.")

This Comment Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has two [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request bodies and two [Message Segment Input: Inline Image](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_inline_image_segment_input.htm "Inline image segment input.") request bodies.

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
   }
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /chatter/feed-elements/feedElementId/capabilities/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Comment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Message Segment Input: Inline Image (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_inline_image_segment_input.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
