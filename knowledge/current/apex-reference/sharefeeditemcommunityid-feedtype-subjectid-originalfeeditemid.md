---
title: "shareFeedItem(communityId, feedType, subjectId,
      originalFeedItemId)"
domain: apex-reference
topic: sharefeeditemcommunityid-feedtype-subjectid-originalfeeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [shareFeedItem, communityId, feedType, subjectId, originalFeedItemId, Share, feed, specified, feedType., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# shareFeedItem(communityId, feedType, subjectId,
      originalFeedItemId)

> Share the originalFeedItemId to the
feed specified by the feedType.

### shareFeedItem(communityId, feedType, subjectId, originalFeedItemId)

Share the originalFeedItemId to the feed specified by the feedType.

#### API Version

28.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

-   In version 32.0–38.0, use [shareFeedElement(communityId, subjectId, feedElementType, originalFeedElementId)](#apex_ConnectAPI_ChatterFeeds_shareFeedElement "Share the originalFeedElementId as the context user.").
-   In version 39.0 and later, use [postFeedElement(communityId, feedElement)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_3 "Post a rich-text feed element. Include mentions and hashtag topics, attach already uploaded files to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.") or [updateFeedElement(communityId, feedElementId, feedElement)](#apex_ConnectAPI_ChatterFeeds_updateFeedElement "Edit a feed element.") with the [ConnectApi.FeedEntityShareCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_entity_share_capability.htm "Share a feed entity with a feed post or comment.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedItem shareFeedItem(String communityId, ConnectApi.FeedType feedType, String subjectId, String originalFeedItemId)

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

To share a feed item with a group, use Record and use a group ID as the subjectId.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value depends on the value of feedType:

-   News—subjectId must be the ID of the context user or the keyword me.
-   Record—subjectId can be a group ID or the ID of the context user (or me).
-   UserProfile—subjectId can be any user ID.

originalFeedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the feed item to share.

#### Return Value

Type: [ConnectApi.FeedItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Item.htm "Feed item.")

#### Example

To share a feed item with a group, pass in the Experience Cloud site ID (or null), the feed type Record, the group ID, and the ID of the feed item to share.

```

```