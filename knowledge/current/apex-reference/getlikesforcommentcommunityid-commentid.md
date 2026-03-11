---
title: "getLikesForComment(communityId, commentId)"
domain: apex-reference
topic: getlikesforcommentcommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getLikesForComment, communityId, commentId, Get, likes, comment., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getLikesForComment(communityId, commentId)

> Get likes for a comment.

### getLikesForComment(communityId, commentId)

Get likes for a comment.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLikePage getLikesForComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: [ConnectApi.​Chatter​Like​Page](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_like_page.htm "Page of Chatter likes.")