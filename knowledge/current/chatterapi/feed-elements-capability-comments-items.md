---
title: "Feed Elements Capability, Comments Items"
domain: chatterapi
topic: feed-elements-capability-comments-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.173Z
estimatedTokens: 1215
keywords: [Feed, Elements, Capability, Comments, Items, Access, element, add, comment]
---

# Feed Elements Capability, Comments Items

> Access comments for a feed element, or add a comment to a feed
      element.

# Feed Elements Capability, Comments Items

Access comments for a feed element, or add a comment to a feed element.

To upload a binary file to attach to a comment, you must send it in a multipart/form-data request. To send the text of the comment, you can choose to include a JSON or XML rich input body part in the multipart/form-data request. Alternately, you can choose to pass the information in request parameter parts. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | The page token to use to view the page. Use the value given in the nextPageUrl property of the Comment Page. | Optional | 32.0 |
| pageSize | Integer | The number of comments per page. The default value is 3. | Optional | 32.0 |
| sort | String | Order of comments. Values are:CreatedDateLatestAsc—Sorts by most recently created comments in ascending order.CreatedDateOldestAsc—Sorts by oldest comments in ascending order.Relevance—Sorts by most relevant content.The default value is CreatedDateLatestAsc.Sorting in descending order isn’t supported. | Optional | 44.0 |
| threaded​Comments​Collapsed | Boolean | Specifies whether to return threaded comments in a collapsed style (true) or not (false). If you don’t specify, the default is false. | Optional | 44.0 |

Response body for GET

[Comment Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm#connect_responses_comment_page "A page of comments.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

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

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| text | String | The comment text. | Required | 32.0 |

Response body for POST

[Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm#connect_responses_comment "A comment.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

Example for posting a comment using the request body

```

```

Example for posting a comment with a mention using the request body

```

```

Example for posting a comment with multiple mentions using the request body

```

```

Example for posting a comment with a file using the request body

```

```

Example for posting a rich-text comment using the request body

```

```

Example for posting a comment with a code block using the request body

```

```

Example for posting a comment with an inline image using the request body

```

```

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/comments/items
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/comments/items
```

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
{ "body" : 
   { 
      "messageSegments" : [ 
         { 
           "type": "mention", 
           "id" : "005D0000001GpHp" 
         },
         { 
           "type": "text", 
           "text" : " Did you see the new plans?" 
         }
      ]
   }
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

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Comment Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Attachment Input: Existing Content (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_existing_content.htm)
- Attachment Input: New File Upload (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_new_file.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Comment Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
