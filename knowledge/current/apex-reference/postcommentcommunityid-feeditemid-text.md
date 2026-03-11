---
title: "postComment(communityId, feedItemId, text)"
domain: apex-reference
topic: postcommentcommunityid-feeditemid-text
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [postComment, communityId, feedItemId, text, Post, plain-text, comment, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# postComment(communityId, feedItemId, text)

> Post a plain-text comment to a feed item.

### postComment(communityId, feedItemId, text)

Post a plain-text comment to a feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [postCommentToFeedElement(communityId, feedElementId, text)](#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_1 "Post a plain-text comment to a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Comment postComment(String communityId, String feedItemId, String text)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text of the comment. Mentions are downgraded to plain text. To include a mention that links to a user, call [postComment(communityId, feedItemId, comment, feedItemFileUpload)](#apex_ConnectAPI_ChatterFeeds_postComment_2 "Post a rich-text comment to a feed item. Use this method to include mentions and to attach a file to a comment.") and pass the mention in a ConnectApi.CommentInput object.

#### Return Value

Type: [ConnectApi.​Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm "A comment.")

#### Usage

If hashtags or links are detected in text, they’re included in the comment as hashtag and link segments. Mentions aren’t detected in text and aren’t separated out of the text.

Feed items and comments can contain up to 10,000 characters.