---
title: "deleteLike(communityId, likeId)"
domain: apex-reference
topic: deletelikecommunityid-likeid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [deleteLike, communityId, likeId, Delete, comment, post., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteLike(communityId, likeId)

> Delete a like on a comment or post.

### deleteLike(communityId, likeId)

Delete a like on a comment or post.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteLike(String communityId, String likeId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

likeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a like.

#### Return Value

Type: Void