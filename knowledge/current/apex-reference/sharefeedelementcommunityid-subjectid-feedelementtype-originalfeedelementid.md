---
title: "shareFeedElement(communityId, subjectId, feedElementType,
         originalFeedElementId)"
domain: apex-reference
topic: sharefeedelementcommunityid-subjectid-feedelementtype-originalfeedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.232Z
keywords: [shareFeedElement, communityId, subjectId, feedElementType, originalFeedElementId, Share, context, user., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# shareFeedElement(communityId, subjectId, feedElementType,
         originalFeedElementId)

> Share the originalFeedElementId as the context
   user.

### shareFeedElement(communityId, subjectId, feedElementType, originalFeedElementId)

Share the originalFeedElementId as the context user.

#### API Version

31.0–38.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 39.0 and later, use [postFeedElement(communityId, feedElement)](#apex_ConnectAPI_ChatterFeeds_postFeedElement_3 "Post a rich-text feed element. Include mentions and hashtag topics, attach already uploaded files to a feed element, and associate action link groups with a feed element. You can also use this method to share a feed element and add a comment.") or [updateFeedElement(communityId, feedElementId, feedElement)](#apex_ConnectAPI_ChatterFeeds_updateFeedElement "Edit a feed element.") with the [ConnectApi.FeedEntityShareCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_feed_entity_share_capability.htm "Share a feed entity with a feed post or comment.") to share a feed entity with a feed element.

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedElement shareFeedElement(String communityId, String subjectId, ConnectApi.FeedElementType feedElementType, String originalFeedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the user or group with whom to share the feed element.

feedElementType

Type: [ConnectApi.​FeedElement​Type](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#FeedElementTypeEnum)

Values are:

-   Bundle—A container of feed elements. A bundle also has a body made up of message segments that can always be gracefully degraded to text-only values.
-   FeedItem—A feed item has a single parent and is scoped to oneExperience Cloud site or across all Experience Cloud sites. A feed item can have capabilities such as bookmarks, canvas, content, comment, link, poll. Feed items have a body made up of message segments that can always be gracefully degraded to text-only values.
-   Recommendation—A recommendation is a feed element with a recommendations capability. A recommendation suggests records to follow, groups to join, or applications that are helpful to the context user.

originalFeedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the feed element to share.

#### Return Value

Type: [ConnectApi.FeedElement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element.htm "Feed elements are the top-level items that a feed contains. Feeds are feed element containers.")

#### Example

```

```