---
title: "Edit a Comment"
domain: chatterapi
topic: edit-a-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.173Z
estimatedTokens: 311
keywords: [Edit, Comment, Chatter]
---

> Edit a comment in Chatter.

# Edit a Comment

Edit a comment in Chatter.

Resource

[/chatter/comments/commentId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm#connect_resources_comments_specific "Get information about, edit, or delete a comment.")

HTTP method

PATCH

Request body

[Comment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm "A comment.")

This Comment Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

Request body example

```

```

Returns

[Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

## Code Examples

```
{   "body":{
      "messageSegments":[
         {
            "type":"Text",
            "text":"I am definitely going to check that out."
         }
      ]
   }
}
```

## Related Topics

- /chatter/comments/commentId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm)
- Comment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
