---
title: "getPhoto(communityId, groupId)"
domain: apex-reference
topic: getphotocommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getPhoto, communityId, groupId, Get, photo, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getPhoto(communityId, groupId)

> Get the photo for a group.

### getPhoto(communityId, groupId)

Get the photo for a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo getPhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")