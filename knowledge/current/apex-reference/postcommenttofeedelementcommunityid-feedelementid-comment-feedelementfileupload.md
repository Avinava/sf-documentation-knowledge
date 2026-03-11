---
title: "postCommentToFeedElement(communityId, feedElementId,
      comment, feedElementFileUpload)"
domain: apex-reference
topic: postcommenttofeedelementcommunityid-feedelementid-comment-feedelementfileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [postCommentToFeedElement, communityId, feedElementId, comment, feedElementFileUpload, Post, rich-text, feed, element., method, include, mentions, attach, file., API, Version, Requires, Chatter, Signature, Parameters]
---

# postCommentToFeedElement(communityId, feedElementId,
      comment, feedElementFileUpload)

> Post a rich-text comment to a feed element. Use this method to
      include mentions and to attach a file.

### postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)

Post a rich-text comment to a feed element. Use this method to include mentions and to attach a file.

#### API Version

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Comment postCommentToFeedElement(String communityId, String feedElementId, ConnectApi.CommentInput comment, ConnectApi.BinaryInput feedElementFileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

comment

Type: [ConnectApi.CommentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_comment.htm#apex_connectapi_input_comment "Comment input used to add rich comments, for example, comments that include mentions or file attachments.")

The comment body, including text and mentions, and capabilities, such as information about an attached file. A comment can contain up to 10,000 characters.

feedElementFileUpload

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

A new binary file to attach to the comment, or null. If you specify a binary file, specify the title and description of the file in the comment parameter.

#### Return Value

Type: [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm#apex_connectapi_output_comment "A comment.")

If the feed element doesn’t support the Comments capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Example for Posting a Comment with Mentions

You can post comments with mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example.

```

```

#### Example for Posting a Comment with an Existing File

```

```

#### Example for Posting a Comment with a New File

```

```

#### Example for Posting a Rich-Text Comment with an Inline Image

You can post rich-text comments with inline images and mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this method example. In this example, the image file is existing content that has already been uploaded to Salesforce.

```

```

#### Example for Posting a Rich-Text Comment with a Code Block

```

```