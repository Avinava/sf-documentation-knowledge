---
title: "postComment(communityId, feedItemId, comment,
                        feedItemFileUpload)"
domain: apex-reference
topic: postcommentcommunityid-feeditemid-comment-feeditemfileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [postComment, communityId, feedItemId, comment, feedItemFileUpload, Post, rich-text, feed, item., method, include, mentions, attach, file, comment., API, Version, Important, Requires, Chatter]
---

# postComment(communityId, feedItemId, comment,
                        feedItemFileUpload)

> Post a rich-text comment to a feed item. Use this method to include mentions and to
        attach a file to a comment.

### postComment(communityId, feedItemId, comment, feedItemFileUpload)

Post a rich-text comment to a feed item. Use this method to include mentions and to attach a file to a comment.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2 "Post a rich-text comment to a feed element. Use this method to include mentions and to attach a file.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Comment postComment(String communityId, String feedItemId, ConnectApi.CommentInput comment, ConnectApi.BinaryInput feedItemFileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

comment

Type: [ConnectApi.Comment​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")

In the CommentInput object, specify rich text, including @mentions. Optionally, in the CommentInput.attachment property, specify an existing file or a new file

feedItemFileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

If you specify a [NewFileAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_NewFileAtt.htm "Attach a new file to a feed item.") object in the CommentInput.attachment property, specify the new binary file to attach in this argument. Otherwise, do not specify a value.

#### Return Value

Type: [ConnectApi.​Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm "A comment.")

#### Usage

Feed items and comments can contain up to 10,000 characters.

#### Sample: Posting a Comment with a New File Attachment

To post a comment and upload and attach a new file to the comment, create a ConnectApi.CommentInput object and a ConnectApi.BinaryInput object to pass to the ConnectApi.ChatterFeeds.postComment method.

```

```