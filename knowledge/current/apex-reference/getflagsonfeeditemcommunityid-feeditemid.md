---
title: "getFlagsOnFeedItem(communityId, feedItemId)"
domain: apex-reference
topic: getflagsonfeeditemcommunityid-feeditemid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [getFlagsOnFeedItem, communityId, feedItemId, Get, moderation, flags, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFlagsOnFeedItem(communityId, feedItemId)

> Get the moderation flags on a feed item.

### getFlagsOnFeedItem(communityId, feedItemId)

Get the moderation flags on a feed item.

#### API Version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFlagsOnFeedElement(communityId, feedElementId)](#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_1 "Get the moderation flags on a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnFeedItem(String communityId, String feedItemId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

#### Return Value

Type: [ConnectApi.ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.