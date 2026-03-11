---
title: "removeFlagsOnFeedItem(communityId, feedItemId,
            userId)"
domain: apex-reference
topic: removeflagsonfeeditemcommunityid-feeditemid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [removeFlagsOnFeedItem, communityId, feedItemId, userId, Remove, moderation, flag, feed, item., API, Version, Important, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# removeFlagsOnFeedItem(communityId, feedItemId,
            userId)

> Remove a moderation flag from a feed item.

### removeFlagsOnFeedItem(communityId, feedItemId, userId)

Remove a moderation flag from a feed item.

#### API Version

29.0–31.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 32.0 and later, use [removeFlagFromFeedElement(communityId, feedElementId, userId)](#apex_ConnectAPI_CommunityModeration_removeFlagFromFeedElement_1 "Remove a moderation flag from a feed element.").

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationFlags removeFlagsOnFeedItem(String communityId, String feedItemId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedItemId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a feed item.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user for whom the flag is removed. Specify null to remove the flag for all users.

#### Return Value

Type: Void

#### Usage

To remove a moderation flag, the context user must have added the flag or must have the Moderate Experiences Feeds permission.