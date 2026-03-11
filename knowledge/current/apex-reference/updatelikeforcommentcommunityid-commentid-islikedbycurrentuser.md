---
title: "updateLikeForComment(communityId, commentId,
      isLikedByCurrentUser)"
domain: apex-reference
topic: updatelikeforcommentcommunityid-commentid-islikedbycurrentuser
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateLikeForComment, communityId, commentId, isLikedByCurrentUser, unlike, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateLikeForComment(communityId, commentId,
      isLikedByCurrentUser)

> Like or unlike a comment.

### updateLikeForComment(communityId, commentId, isLikedByCurrentUser)

Like or unlike a comment.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLikePage updateLikeForComment(String communityId, String commentId, Boolean isLikedByCurrentUser)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

isLikedByCurrentUser

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies if the context user likes (true) or unlikes (false) the comment.

#### Return Value

Type: [ConnectApi.ChatterLikePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm#apex_connectapi_output_like_page "Page of Chatter likes.")