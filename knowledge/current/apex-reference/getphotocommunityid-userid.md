---
title: "getPhoto(communityId, userId)"
domain: apex-reference
topic: getphotocommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [getPhoto, communityId, userId, Get, user’s, photo., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getPhoto(communityId, userId)

> Get a user’s photo.

### getPhoto(communityId, userId)

Get a user’s photo.

#### API Version

35.0

#### Available to Guest Users

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo getPhoto(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")