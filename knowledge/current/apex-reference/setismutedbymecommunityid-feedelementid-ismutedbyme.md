---
title: "setIsMutedByMe(communityId, feedElementId,
      isMutedByMe)"
domain: apex-reference
topic: setismutedbymecommunityid-feedelementid-ismutedbyme
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setIsMutedByMe, communityId, feedElementId, isMutedByMe, Mute, unmute, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setIsMutedByMe(communityId, feedElementId,
      isMutedByMe)

> Mute or unmute a feed element.

### setIsMutedByMe(communityId, feedElementId, isMutedByMe)

Mute or unmute a feed element.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.MuteCapability setIsMutedByMe(String communityId, String feedElementId, Boolean isMutedByMe)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

isMutedByMe

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether the feed element is muted for the context user. Default value is false.

#### Return Value

Type: [ConnectApi.MuteCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mute_capability.htm "If a feed element has this capability, users can mute it. Muted feed elements are visible in the muted feed, and invisible in all other feeds that respect mute.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").