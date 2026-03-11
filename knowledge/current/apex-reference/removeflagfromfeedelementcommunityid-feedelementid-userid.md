---
title: "removeFlagFromFeedElement(communityId, feedElementId,
      userId)"
domain: apex-reference
topic: removeflagfromfeedelementcommunityid-feedelementid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.910Z
keywords: [removeFlagFromFeedElement, communityId, feedElementId, userId, Remove, moderation, flag, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# removeFlagFromFeedElement(communityId, feedElementId,
      userId)

> Remove a moderation flag from a feed element.

### removeFlagFromFeedElement(communityId, feedElementId, userId)

Remove a moderation flag from a feed element.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static void removeFlagFromFeedElement(String communityId, String feedElementId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user for whom the flag is removed. Specify null to remove the flag for all users.

#### Return Value

Type: [ConnectApi.ModerationCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderation_capability.htm "If a feed element has this capability, users in an Experience Cloud site can flag it for moderation.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

To remove a moderation flag, the context user must have added the flag or must have the Moderate Experiences Feeds permission.