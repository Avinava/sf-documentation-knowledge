---
title: "Feed Items Comments"
domain: chatterapi
topic: feed-items-comments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.043Z
estimatedTokens: 1208
keywords: [Feed, Items, Comments, item, post, comment]
---

# Feed Items Comments

> Get comments for a feed item or post a
                        comment.

# Feed Items Comments

Get comments for a feed item or post a comment.

The default number of comments to retrieve is 3. To retrieve more comments increase the size of the pageSize parameter.

For additional information about posting a comment, see [Using POST, PATCH, or PUT for Input](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#post_input_section).

To upload a binary file to attach to a comment, you must send it in a multipart/form-data request. To send the text of the comment, you can choose to include a JSON or XML rich input body part in the multipart/form-data request. Alternately, you can choose to pass the information in request parameter parts. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

Available since version

23.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 32.0 and later, use [Feed Elements Capability, Comments Items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm#connect_resources_feed_element_capability_comments_items "Access comments for a feed element, or add a comment to a feed element.").

Requires Chatter

Yes

HTTP methods

GET, POST or HEAD

Request body for POST

Root XML tag

<comment>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachment | Depends on type. | Values are:Attachment Input: Existing ContentAttachment Input: New File UploadImportantAs of version 32.0, use the capabilities property. | Optional | 24.0–31.0 |
| body | Message Body Input | The body of the comment.Feed item and comment bodies have a 10,000 character limit. Because this limit can change, we recommend that clients make a describeSObjects() call on the FeedItem or FeedComment object. To determine the maximum number of allowed characters, look at the length of the Body or CommentBody field.To edit this property in a comment, make a PATCH request to /chatter/comments/commentId. Editing comments is supported in version 34.0 and later.Rich text and inline images are supported in comment bodies in version 35.0 and later. Inline images in content bodies must use content document (069) image files previously uploaded to Salesforce. Entity links are supported in version 43.0 and later. | Required | 23.0 |
| capabilities | Comment Capabilities Input | Capabilities of the comment, such as a file attachment.You can edit a comment’s body, but you can’t update a comment’s capabilities. | Optional | 32.0 |
| threadParentId | String | ID of the parent comment for a threaded comment. | Optional | 44.0 |

Request parameters for POST

**Parameters for attaching an existing file**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachmentType | String | The type of attachment. Must contain the value ExistingContent. | Required | 27.0–31.0 |
| contentDocumentId | String | ID of an existing file to be posted. | Required | 24.0–31.0 |
| text | String | Text of the comment. | Optional | 23.0–31.0 |

**Parameters for posting text**

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| text | String | The comment text. | Required | 23.0–31.0 |

Request parameters for GET or HEAD

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | A generated token that indicates the view of feed items in the feed. Page tokens are returned as part of the response body, in one of the URL parameters, such as nextPageURL. | Optional | 23.0–31.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25.This parameter specifies the number of comments per page. | Optional | 23.0–31.0 |

Response body for GET or HEAD

[Comment Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm "A page of comments.")

Response body for POST

[Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

Example: Posting a Comment

This POST request uses a request parameter to post a comment to a feed item:

```

```

Example: Posting a Comment and Attaching an Existing File

This POST request posts a comment and attaches a file that has already been uploaded to the user’s organization:

```

```

Example: Posting a Comment and Uploading and Attaching a New File

See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

## Code Examples

```
/chatter/feed-items/feedItemId/comments
```

```
/chatter/feed-items/0D5D0000000JvckKAC/comments?text=I+completely+agree
```

```
/chatter/feed-items/0D5D0000000JvckKAC/comments?text=yes&attachmentType=ExistingContent&contentDocumentId=069D00000001FHF
```

## Related Topics

- Using POST, PATCH, or PUT for Input (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Feed Elements Capability, Comments Items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Attachment Input: Existing Content (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_existing_content.htm)
- Attachment Input: New File Upload (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_new_file.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Comment Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm)
- Comment Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
