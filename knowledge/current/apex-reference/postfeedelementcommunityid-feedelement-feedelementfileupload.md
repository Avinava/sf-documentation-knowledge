---
title: "postFeedElement(communityId, feedElement,
         feedElementFileUpload)"
domain: apex-reference
topic: postfeedelementcommunityid-feedelement-feedelementfileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [postFeedElement, communityId, feedElement, feedElementFileUpload, Post, rich-text, feed, element., Include, mentions, hashtag, topics, attach, file, element, associate, action, link, groups, method]
---

# postFeedElement(communityId, feedElement,
         feedElementFileUpload)

> Post a rich-text feed element. Include mentions and hashtag topics,
         attach a file to a feed element, and associate action link groups with a feed element. You
         can also use this method to share a feed element and add a comment.

### postFeedElement(communityId, feedElement, feedElementFileUpload)

Post a rich-text feed element. Include mentions and hashtag topics, attach a file to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.

#### API Version

31.0–35.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 36.0 and later, this method is no longer available because you can’t create a feed post and upload a binary file in the same call. Upload files to Salesforce first, and then use [postFeedElement(communityId, feedElement)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_3 "Post a rich-text feed element. Include mentions and hashtag topics, attach already uploaded files to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.") to create the feed post and attach the files.

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement postFeedElement(String communityId, ConnectApi.FeedElementInput feedElement, ConnectApi.BinaryInput feedElementFileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElement

Type: [ConnectApi.FeedElementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

Specify rich text, including mentions. Optionally, specify a link, a poll, an existing file, or a new file.

feedElementFileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

Specify the new binary file to attach to the post only if you also specify a [NewFileAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_NewFileAtt.htm "Attach a new file to a feed item.") object in the feedElement parameter. Otherwise, pass null.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example for Posting a Feed Element with a New (Binary) File

```

```