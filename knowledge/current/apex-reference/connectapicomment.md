---
title: "ConnectApi.Comment"
domain: apex-reference
topic: connectapicomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.643Z
estimatedTokens: 828
keywords: [ConnectApi.Comment, comment.]
---

# ConnectApi.Comment

> A comment.

# ConnectApi.Comment

A comment.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attachment | ConnectApi.​FeedItem​Attachment | If the comment contains an attachment, property value is ContentAttachment. If the comment does not contain an attachment, it is null.ImportantAs of version 32.0, use the capabilities property. | 28.0–31.0 |
| body | ConnectApi.​FeedBody | Body of the comment. | 28.0 |
| capabilities | ConnectApi.​CommentCapabilities | Capabilities associated with the comment, such as any file attachments. | 32.0 |
| clientInfo | ConnectApi.​ClientInfo | Information about the connected app used to authenticate the connection. | 28.0 |
| createdDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 28.0 |
| feedElement | ConnectApi.​​Reference | Feed element on which the comment is posted. |  |
| feedItem | ConnectApi.​​Reference | Feed item on which the comment is posted.ImportantAs of version 32.0, use the feedElement property. | 28.0–31.0 |
| id | String | Comment’s 18–character ID. | 28.0 |
| isDelete​Restricted | Boolean | If this property is true, the context user can’t delete the comment. If this property is false, the context user might be able to delete the comment. | 28.0 |
| likes | ConnectApi.​Chatter​Like​Page | The first page of likes for the comment.This property has no information for comments on direct messages. | 28.0 |
| likesMessage | ConnectApi.​Message​Body | A message body that describes who likes the comment.This property is null for comments on direct messages. | 28.0 |
| moderation​Flags | ConnectApi.​ModerationFlags | Information about the moderation flags on a comment. If ConnectApi.Features.communityModeration is false, this property is null. | 29.0 |
| myLike | ConnectApi.​​Reference | If the context user liked the comment, this property is a reference to the specific like, null otherwise.This property is null for comments on direct messages. | 28.0 |
| parent | ConnectApi.​​Reference | Information about the parent feed-item for this comment. | 28.0 |
| relativeCreatedDate | String | The created date formatted as a relative, localized string, for example, “17m ago” or “Yesterday.” | 28.0 |
| threadLevel | Integer | Level of nesting for a comment. 0 indicates a standard comment with a parent post. 1 indicates a threaded comment with a parent comment and a parent post. 2 indicates a threaded comment with two parent comments and a parent post. The UI is limited to these three levels. | 44.0 |
| threadParentId | String | ID of the parent comment for a threaded comment. | 44.0 |
| type | ConnectApi.​CommentType | Type of comment.ContentComment—Comment holds a content capability.TextComment—Comment contains only text. | 28.0 |
| url | String | Connect REST API URL to this comment. | 28.0 |
| user | ConnectApi.​User​Summary | Information about the comment author. | 28.0 |

#### See Also

-   [ConnectApi.CommentPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_page.htm "A page of comments.")

-   [ConnectApi.QuestionAndAnswersCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_question_and_answers_capability.htm "If a feed element has this capability, it has a question and comments on the feed element are answers to the question.")

## Related Topics

- ConnectApi.​FeedItem​Attachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- ConnectApi.​FeedBody (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_body.htm)
- ConnectApi.​CommentCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm)
- ConnectApi.​ClientInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_client_info.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​Chatter​Like​Page (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm)
- ConnectApi.​Message​Body (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm)
