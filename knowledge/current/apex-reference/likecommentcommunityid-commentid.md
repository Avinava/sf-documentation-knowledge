---
title: "likeComment(communityId, commentId)"
domain: apex-reference
topic: likecommentcommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.226Z
keywords: [likeComment, communityId, commentId, comment, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# likeComment(communityId, commentId)

> Like a comment for the context user.

### likeComment(communityId, commentId)

Like a comment for the context user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLike likeComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: [ConnectApi.​Chatter​Like](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_like.htm "Chatter like information.")

If the context user has already liked the comment, this method is a non-operation and returns the existing like.