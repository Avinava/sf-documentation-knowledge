---
title: "getLikesForFeedElement(communityId,
    feedElementId)"
domain: apex-reference
topic: getlikesforfeedelementcommunityid-feedelementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getLikesForFeedElement, communityId, feedElementId, Get, likes, feed, element., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getLikesForFeedElement(communityId,
    feedElementId)

> Get likes for a feed element.

### getLikesForFeedElement(communityId, feedElementId)

Get likes for a feed element.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLikePage getLikesForFeedElement(String communityId, String feedElementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

#### Return Value

Type: [ConnectApi.ChatterLikePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm#apex_connectapi_output_like_page "Page of Chatter likes.")

If the feed element doesn’t support the ChatterLikes capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").