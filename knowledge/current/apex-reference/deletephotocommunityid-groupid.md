---
title: "deletePhoto(communityId, groupId)"
domain: apex-reference
topic: deletephotocommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [deletePhoto, communityId, groupId, Delete, group, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# deletePhoto(communityId, groupId)

> Delete the group photo.

### deletePhoto(communityId, groupId)

Delete the group photo.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deletePhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: Void

#### Usage

This method is only successful when the context user is the group manager or owner, or has Modify All Data permission.