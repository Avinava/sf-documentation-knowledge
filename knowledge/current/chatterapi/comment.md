---
title: "Comment"
domain: chatterapi
topic: comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.915Z
estimatedTokens: 654
keywords: [Comment, edit]
---

# Comment

> A comment.

# Comment

A comment.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attachment | Depends on type of comment | If the comment does not contain an attachment or if the attachment, returns null. Otherwise, returns Feed Item Attachment: Content.ImportantAs of version 32.0, use the capabilities property. | Medium, 29.0 | 24.0–31.0 |
| body | Feed Item Body | Message body for the comment. | Small, 29.0 | 23.0 |
| capabilities | Comment Capabilities | Capabilities associated with the comment. | Medium, 32.0 | 32.0 |
| clientInfo | ClientInfo | Information about the client app used to authenticate the connection. | Medium, 29.0 | 23.0 |
| createdDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | Small, 29.0 | 23.0 |
| feedElement | Reference | Feed element on which the comment is posted. | Medium, 32.0 | 32.0 |
| feedItem | Reference | Feed item on which the comment is posted.ImportantAs of version 32.0, use the feedElement property. | Medium, 29.0 | 23.0–31.0 |
| id | String | 18-character ID of the comment. | Small, 29.0 | 23.0 |
| isDeletable | Boolean | NoteThis property is no longer available as of version 25.0. Use the isDeleteRestricted property instead.Specifies if the context user can delete the comment. |  | 23.0–24.0 |
| isDelete​Restricted | Boolean | Returns true if the context user can’t delete the comment. If it returns false, possibly the context user can delete the comment. | Medium, 29.0 | 25.0 |
| likes | Like Page | Page of likes associated with the comment.This property has no information for comments on direct messages. | Medium, 29.0 | 24.0 |
| likes​Message | Like Message Body | Message body that describes who likes the comment.This property is null for comments on direct messages. | Medium, 29.0 | 27.0 |
| myLike | Reference | If the context user liked the comment, returns a reference to that like or returns null.This property is null for comments on direct messages. | Medium, 29.0 | 23.0 |
| parent | Reference | Information about the parent of the feed-item associated with this comment. | Big, 29.0 | 23.0 |
| relative​CreatedDate | String | Created date formatted as a relative, localized string, for example, “17m ago” or “Yesterday.” | Medium, 29.0 | 28.0 |
| thread​Level | Integer | Level of nesting for a comment. 0 indicates a standard comment with a parent post. 1 indicates a threaded comment with a parent comment and a parent post. 2 indicates a threaded comment with two parent comments and a parent post. The UI is limited to these three levels. | Small, 44.0 | 44.0 |
| thread​ParentId | String | ID of the parent comment for a threaded comment. | Small, 44.0 | 44.0 |
| type | String | Indicates the type of comment. Valid values are:ContentComment—the comment contains an attachmentTextComment—the comment contains only text | Small, 29.0 | 24.0 |
| url | String | URL to this comment. | Small, 29.0 | 23.0 |
| user | User Summary | Information about the comment author. | Small, 29.0 | 23.0 |

#### See Also

-   [Comment Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_page.htm "A page of comments.")

-   [Question and Answers Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_question_and_answers_capability.htm "If a feed element has this capability, it has a question and comments on the feed element are answers to the question.")

## Code Examples

```
/chatter/comments/commentId
```

```
/connect/communities/communityId/chatter/comments/commentId
```

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

- Feed Elements Capability, Comments Items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- Attachment Input: Existing Content (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_existing_content.htm)
- Attachment Input: New File Upload (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_attach_new_file.htm)
- Message Body
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
- Comment Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Edit a Comment (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_comment.htm)
- Feed Item Attachment: Content (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_attach_content.htm)
- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
