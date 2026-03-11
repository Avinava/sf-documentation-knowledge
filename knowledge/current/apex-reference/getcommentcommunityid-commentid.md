---
title: "getComment(communityId, commentId)"
domain: apex-reference
topic: getcommentcommunityid-commentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.223Z
keywords: [getComment, communityId, commentId, Get, comment., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getComment(communityId, commentId)

> Get a comment.

### getComment(communityId, commentId)

Get a comment.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Comment getComment(String communityId, String commentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a comment.

#### Return Value

Type: [ConnectApi.​Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm "A comment.")