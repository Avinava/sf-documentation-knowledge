---
title: "deleteBannerPhoto(communityId, groupId)"
domain: apex-reference
topic: deletebannerphotocommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [deleteBannerPhoto, communityId, groupId, Delete, group, banner, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deleteBannerPhoto(communityId, groupId)

> Delete the group banner photo.

### deleteBannerPhoto(communityId, groupId)

Delete the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteBannerPhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group.

#### Return Value

Type: Void

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.