---
title: "addFlagToFeedItem(communityId, feedItemId,
      visibility)"
domain: apex-reference
topic: addflagtofeeditemcommunityid-feeditemid-visibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [addFlagToFeedItem, communityId, feedItemId, visibility, Add, moderation, flag, specified, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addFlagToFeedItem(communityId, feedItemId,
      visibility)

> Add a moderation flag with specified visibility to a feed item.

### addFlagToFeedItem(communityId, feedItemId, visibility)

Add a moderation flag with specified visibility to a feed item.

#### API Version

30.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [addFlagToFeedElement(communityId, feedElementId, visibility)](#apex_ConnectAPI_CommunityModeration_addFlagToFeedElement_2 "Add a moderation flag of the specified visibility to a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags addFlagToFeedItem(String communityId, String feedItemId, ConnectApi.CommunityFlagVisibility visibility)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

visibility

Type: [ConnectApi.​CommunityFlag​Visibility](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommunityFlagVisibility)

Visibility behavior of a flag for various user types.

-   ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.
-   SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item.

#### Return Value

Type: [ConnectApi.​ModerationFlags](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm "Information about the moderation flags on a feed item, comment, or file.")

#### Usage

To add a flag to a feed item, Allow members to flag content must be selected for an Experience Cloud site.