---
title: "updateLikeForFeedElement(communityId, feedElementId,
      isLikedByCurrentUser)"
domain: apex-reference
topic: updatelikeforfeedelementcommunityid-feedelementid-islikedbycurrentuser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateLikeForFeedElement, communityId, feedElementId, isLikedByCurrentUser, unlike, feed, element., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateLikeForFeedElement(communityId, feedElementId,
      isLikedByCurrentUser)

> Like or unlike a feed element.

### updateLikeForFeedElement(communityId, feedElementId, isLikedByCurrentUser)

Like or unlike a feed element.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLikePage updateLikeForFeedElement(String communityId, String feedElementId, Boolean isLikedByCurrentUser)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

isLikedByCurrentUser

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies if the context user likes (true) or unlikes (false) the feed element.

#### Return Value

Type: [ConnectApi.ChatterLikePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm#apex_connectapi_output_like_page "Page of Chatter likes.")

If the feed element doesn’t support the ChatterLikes capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").