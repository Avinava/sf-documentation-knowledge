---
title: "postFeedItem(communityId, feedType, subjectId,
      text)"
domain: apex-reference
topic: postfeeditemcommunityid-feedtype-subjectid-text
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [postFeedItem, communityId, feedType, subjectId, text, Post, plain-text, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Note, Usage]
---

# postFeedItem(communityId, feedType, subjectId,
      text)

> Post a plain-text feed item.

### postFeedItem(communityId, feedType, subjectId, text)

Post a plain-text feed item.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [postFeedElement(communityId, subjectId, feedElementType, text)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_1 "Post a plain-text feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItem postFeedItem(String communityId, ConnectApi.FeedType feedType, String subjectId, String text)

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

Use Record to post to a group.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value depends on the feedType:

-   News—ID of the context user or the keyword me.
-   Record—ID of any record with a feed, including groups.
-   UserProfile—ID of any user.

text

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text of the feed item. Mentions are downgraded to plain text. To include a mention that links to the user, call the [postFeedItem(communityId, feedType, subjectId, feedItemInput, feedItemFileUpload)](#apex_ConnectAPI_ChatterFeeds_postFeedItem_2 "Post a rich-text feed item to a feed. Use this method to include mentions and hashtag topics and to attach a file to a feed item. You can also use this method to share a feed item and add a comment.") method and pass the mention in a ConnectApi.FeedItemInput object.

#### Return Value

Type: [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Triggers on FeedItem objects run before their attachment and capabilities information is saved, which means that ConnectApi.FeedItem.attachment information and ConnectApi.FeedElement.capabilities information may not be available in the trigger.

#### Usage

Feed items and comments can contain up to 10,000 characters.

Posts to ConnectApi.FeedType.UserProfile in API versions 23.0 and 24.0 created user status updates, not feed items. For posts to the User Profile Feed in those API versions, the character limit is 1,000 characters.