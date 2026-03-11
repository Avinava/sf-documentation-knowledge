---
title: "getFlagsOnFeedItem(communityId, feedItemId,
            visibility)"
domain: apex-reference
topic: getflagsonfeeditemcommunityid-feeditemid-visibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [getFlagsOnFeedItem, communityId, feedItemId, visibility, Get, moderation, flags, specified, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getFlagsOnFeedItem(communityId, feedItemId,
            visibility)

> Get the moderation flags with specified visibility on a feed item.

### getFlagsOnFeedItem(communityId, feedItemId, visibility)

Get the moderation flags with specified visibility on a feed item.

#### API Version

30.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [getFlagsOnFeedElement(communityId, feedElementId, visibility)](#apex_ConnectAPI_CommunityModeration_getFlagsOnFeedElement_2 "Get the moderation flags with specified visibility on a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags getFlagsOnFeedItem(String communityId, String feedItemId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

visibility

Type: [ConnectApi.CommunityFlagVisibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types. Values are:

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To get moderation flags, the context user must have the Moderate Experiences Feeds permission.