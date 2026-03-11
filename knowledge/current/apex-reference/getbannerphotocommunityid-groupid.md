---
title: "getBannerPhoto(communityId, groupId)"
domain: apex-reference
topic: getbannerphotocommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getBannerPhoto, communityId, groupId, Get, group, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getBannerPhoto(communityId, groupId)

> Get the group banner photo.

### getBannerPhoto(communityId, groupId)

Get the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto getBannerPhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")