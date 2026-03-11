---
title: "getBannerPhoto(communityId, userId)"
domain: apex-reference
topic: getbannerphotocommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [getBannerPhoto, communityId, userId, Get, user’s, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getBannerPhoto(communityId, userId)

> Get a user’s banner photo.

### getBannerPhoto(communityId, userId)

Get a user’s banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto getBannerPhoto(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm#apex_connectapi_output_banner_photo "A banner photo.")