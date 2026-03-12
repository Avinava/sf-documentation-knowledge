---
title: "Comment Input"
domain: chatterapi
topic: comment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.305Z
estimatedTokens: 846
keywords: [Comment, Input]
---

# Comment Input

> A comment.

# Comment Input

A comment.

Root XML tag

<comment>

JSON example for editing a comment body

This example uses the [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm "Get information about, edit, or delete a comment.") resource with a PATCH request.

```

```

JSON example for posting a comment and attaching an existing file to the comment

This example uses the [Feed Elements Capability, Comments Items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm "Access comments for a feed element, or add a comment to a feed element.") resource with a POST request.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachment | Depends on type. | Values are:Attachment Input: Existing ContentAttachment Input: New File UploadImportantAs of version 32.0, use the capabilities property. | Optional | 24.0–31.0 |
| body | Message Body Input | The body of the comment.Feed item and comment bodies have a 10,000 character limit. Because this limit can change, we recommend that clients make a describeSObjects() call on the FeedItem or FeedComment object. To determine the maximum number of allowed characters, look at the length of the Body or CommentBody field.To edit this property in a comment, make a PATCH request to /chatter/comments/commentId. Editing comments is supported in version 34.0 and later.Rich text and inline images are supported in comment bodies in version 35.0 and later. Inline images in content bodies must use content document (069) image files previously uploaded to Salesforce. Entity links are supported in version 43.0 and later. | Required | 23.0 |
| capabilities | Comment Capabilities Input | Capabilities of the comment, such as a file attachment.You can edit a comment’s body, but you can’t update a comment’s capabilities. | Optional | 32.0 |
| threadParentId | String | ID of the parent comment for a threaded comment. | Optional | 44.0 |

#### See Also

-   [Post a Comment](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_to_feed_element.htm "Post a comment in Chatter.")

-   [Post a Comment and Include a File from Salesforce](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_to_feed_element_content.htm "Post a comment with a Salesforce file in Chatter.")

-   [Post a Rich-Text Comment](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_rich_text.htm "Post a rich-text comment in Chatter.")

-   [Post a Comment with a Code Block](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_code_snippet.htm "Post a Chatter comment with a code block.")

-   [Post a Comment with an Inline Image](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_inline_image.htm "Post a Chatter comment with an inline image.")

-   [Post an @Mention](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mention.htm "Post an @mention in a Chatter feed item or comment.")

-   [Post Multiple @Mentions](atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_or_feed_item_with_mentions.htm "Post up to 25 mentions in a Chatter feed item or comment.")

-   [Edit a Comment](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_comment.htm "Edit a comment in Chatter.")

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

- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm)
- Feed Elements Capability, Comments Items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Attachment Input: Existing Content (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_existing_content.htm)
- Attachment Input: New File Upload (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_new_file.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Comment Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm)
- Post a Comment (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_to_feed_element.htm)
- Post a Comment and Include a File from Salesforce (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_to_feed_element_content.htm)
- Post a Rich-Text Comment (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_rich_text.htm)
- Post a Comment with a Code Block (atlas.en-us.chatterapi.meta/chatterapi/quickreference_post_comment_code_snippet.htm)
