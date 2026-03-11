---
title: "ConnectApi.CommentInput"
domain: apex-reference
topic: connectapicommentinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.985Z
keywords: [ConnectApi.CommentInput, See]
---

# ConnectApi.CommentInput

# ConnectApi.CommentInput

Comment input used to add rich comments, for example, comments that include mentions or file attachments.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attachment | ConnectApi.​FeedItem​AttachmentInput | Specifies an attachment for the comment. Valid values are:ContentAttachmentInputNewFileAttachmentInputLinkAttachmentInput is not permitted for comments.ImportantAs of version 32.0, use the capabilities property. | Optional | 28.0–31.0 |
| body | ConnectApi.​MessageBody​Input | Description of message body. The body can contain up to 10,000 characters and 25 mentions. Because the character limit can change, clients should make a describeSObjects() call on the FeedItem or FeedComment object and look at the length of the Body or CommentBody field to determine the maximum number of allowed characters.To edit this property in a comment, use updateComment(communityId, commentId, comment). Editing comments is supported in version 34.0 and later.Rich text and inline images are supported in comment bodies in version 35.0 and later. Inline images in content bodies must use content document (069) image files previously uploaded to Salesforce. Entity links are supported in version 43.0 and later. | Required | 28.0 |
| capabilities | ConnectApi.​CommentCapability​Input | Specifies any capabilities for the comment, such as a file attachment. | Optional | 32.0 |
| threadParentId | String | ID of the parent comment for a threaded comment. | Optional | 44.0 |

#### See Also

-   [Post a Comment with a Mention](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_comment_feed_element_2.htm "Post a Comment with a Mention - HTML (New Window)")
    
-   [Post a Comment with a New File](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_comment_feed_element_3.htm "Post a Comment with a New File - HTML (New Window)")
    
-   [Post a Comment with an Existing File](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_comment_feed_element_4.htm "Post a Comment with an Existing File - HTML (New Window)")
    
-   [Post a Rich-Text Comment with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_comment_richtext_inlineimage.htm "Post a Rich-Text Comment with Inline Image - HTML (New Window)")
    
-   [Post a Rich-Text Feed Comment with a Code Block](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_comment_richtext_code_snippet.htm "Post a Rich-Text Feed Comment with a Code Block - HTML (New Window)")
    
-   [Edit a Comment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_edit_comment.htm "Edit a Comment - HTML (New Window)")
    
-   [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2 "Post a rich-text comment to a feed element. Use this method to include mentions and to attach a file.")