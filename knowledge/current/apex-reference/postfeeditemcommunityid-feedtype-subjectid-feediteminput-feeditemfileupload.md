---
title: "postFeedItem(communityId, feedType, subjectId, feedItemInput,
      feedItemFileUpload)"
domain: apex-reference
topic: postfeeditemcommunityid-feedtype-subjectid-feediteminput-feeditemfileupload
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [postFeedItem, communityId, feedType, subjectId, feedItemInput, feedItemFileUpload, Post, rich-text, feed, item, feed., method, include, mentions, hashtag, topics, attach, file, item., share]
---

# postFeedItem(communityId, feedType, subjectId, feedItemInput,
      feedItemFileUpload)

> Post a rich-text feed item to a feed. Use this method to include
      mentions and hashtag topics and to attach a file to a feed item. You can also use this method
      to share a feed item and add a comment.

### postFeedItem(communityId, feedType, subjectId, feedItemInput, feedItemFileUpload)

Post a rich-text feed item to a feed. Use this method to include mentions and hashtag topics and to attach a file to a feed item. You can also use this method to share a feed item and add a comment.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [postFeedElement(communityId, feedElement, feedElementFileUpload)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_2 "Post a rich-text feed element. Include mentions and hashtag topics, attach a file to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItem postFeedItem(String communityId, ConnectApi.FeedType feedType, String subjectId, ConnectApi.FeedItemInput feedItemInput, ConnectApi.BinaryInput feedItemFileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedType

Type: [ConnectApi.​FeedType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedTypeEnum)

One of the following:

-   News
-   Record
-   UserProfile

To post a feed item to a group, use Record and use a group ID as the subjectId.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If feedType is Record, subjectId can be any record ID, including a group ID. If feedType is Streams, subjectId must be a stream ID. If feedType is Topics, subjectId must be a topic ID. If feedType is UserProfile, subjectId can be any user ID. If the feedType is any other value, subjectId must be the ID of the context user or the alias me.

feedItemInput

Type: [ConnectApi.FeedItem​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feedItem.htm "Used to create rich feed items, for example, feed items that include @mentions or files.")

In the FeedItemInput object, specify rich text. Optionally, in the FeedItemInput.attachment property, specify a link, a poll, an existing file, or a new file.

feedItemFileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

If you specify a [NewFileAttachmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_NewFileAtt.htm "Attach a new file to a feed item.") object in the FeedItemInput.attachment property, specify the new binary file to attach in this argument. Otherwise, do not specify a value.

#### Return Value

Type: [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that ConnectApi.FeedItem.attachment information and ConnectApi.FeedElement.capabilities information may not be available in the trigger.

#### Usage

Feed items and comments can contain up to 10,000 characters. Posts to ConnectApi.FeedType.UserProfile in API versions 23.0 and 24.0 created user status updates, not feed items. For posts to the User Profile Feed in those API versions, the character limit is 1,000 characters.

#### Example for Sharing a Feed Item and Adding a Comment

To share a feed item and add a comment, create a ConnectApi.FeedItemInput object containing the comment and the feed item to share. Then pass the object to ConnectApi.ChatterFeeds.postFeeditem in the feedItemInput argument. The message segments in the message body input are used as the comment.

```

```

#### Example for Posting a Mention to a User Profile Feed

To post to a user profile feed and include an @mention, call the ConnectApi.ChatterFeeds.postFeedItem method.

```

```