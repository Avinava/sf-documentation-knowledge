---
title: "Post a Comment and Include a File from Salesforce"
domain: chatterapi
topic: post-a-comment-and-include-a-file-from-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.919Z
estimatedTokens: 539
keywords: [Post, Comment, Include, File, Salesforce, Chatter]
---

# Post a Comment and Include a File from Salesforce

> Post a comment with a Salesforce file in Chatter.

# Post a Comment and Include a File from Salesforce

Post a comment with a Salesforce file in Chatter.

This example posts a comment with a file that has already been uploaded to Salesforce. To upload a new file, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

[/chatter/feed-elements/feedElementId/capabilities/comments/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm#connect_resources_feed_element_capability_comments_items "Access comments for a feed element, or add a comment to a feed element.")

HTTP method

POST

Request body

[Comment Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm "A comment.")

This Comment Input request body includes a body property that is a [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.") request body. In this example, the Message Body Input request body includes a messageSegments property that has one [Message Segment Input: Text](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm "Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.") request body.

This Comment Input request body also includes a capabilities property that is a [Comment Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm "Comment capabilities input.") request body. In this example, the Comment Capabilities Input includes a content property that is a [Content Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm "Create or update a file associated with a comment.") request body.

Request parameter

text

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
         }
      ]
   },
   "capabilities":{
      "content":{
         "contentDocumentId":"069D00000001pyS"
      }
   }
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /chatter/feed-elements/feedElementId/capabilities/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Comment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_input.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Message Segment Input: Text (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_msg_seg_input_text.htm)
- Comment Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm)
- Content Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_capability_input.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
