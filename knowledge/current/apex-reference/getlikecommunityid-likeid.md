---
title: "getLike(communityId, likeId)"
domain: apex-reference
topic: getlikecommunityid-likeid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.224Z
keywords: [getLike, communityId, likeId, Get, post, comment., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getLike(communityId, likeId)

> Get a like on a post or comment.

### getLike(communityId, likeId)

Get a like on a post or comment.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterLike getLike(String communityId, String likeId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

likeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a like.

#### Return Value

Type: [ConnectApi.​Chatter​Like](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_like.htm "Chatter like information.")