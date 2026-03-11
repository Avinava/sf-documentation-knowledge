---
title: "deleteComment(communityId, commentId)"
domain: apex-reference
topic: deletecommentcommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [deleteComment, communityId, commentId, Delete, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteComment(communityId, commentId)

> Delete a comment.

### deleteComment(communityId, commentId)

Delete a comment.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: Void