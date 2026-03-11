---
title: "addFlagToFeedElement(communityId,
    feedElementId)"
domain: apex-reference
topic: addflagtofeedelementcommunityid-feedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.909Z
keywords: [addFlagToFeedElement, communityId, feedElementId, Add, moderation, flag, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addFlagToFeedElement(communityId,
    feedElementId)

> Add a moderation flag to a feed element.

### addFlagToFeedElement(communityId, feedElementId)

Add a moderation flag to a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ModerationCapability addFlagToFeedElement(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm#apex_connectapi_output_moderation_capability "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To add a flag to a feed element, Allow members to flag content must be selected for an Experience Cloud site.