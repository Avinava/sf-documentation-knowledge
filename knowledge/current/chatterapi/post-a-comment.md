---
title: "Post a Comment"
domain: chatterapi
topic: post-a-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.916Z
estimatedTokens: 352
keywords: [Post, Comment, Chatter]
---

# Post a Comment

> Post a comment in Chatter.

# Post a Comment

Post a comment in Chatter.

Resource

[/chatter/feed-elements/feedElementId/capabilities/comments/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm#connect_resources_feed_element_capability_comments_items "Access comments for a feed element, or add a comment to a feed element.")

HTTP method

POST

Request body

[Comment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm "A comment.")

This Comment Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

Request parameter

text

Request body example

```

```

Request parameter example

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
            "text":"New comment"
         }
      ]
   }
}
```

```
/services/data/v66.0/chatter/feed-elements/feedElementId/capabilities/comments/items?text=New+comment
```

## Related Topics

- /chatter/feed-elements/feedElementId/capabilities/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Comment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
