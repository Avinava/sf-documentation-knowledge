---
title: "deletePhoto(communityId, userId)"
domain: apex-reference
topic: deletephotocommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.911Z
keywords: [deletePhoto, communityId, userId, Delete, user’s, photo., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deletePhoto(communityId, userId)

> Delete a user’s photo.

### deletePhoto(communityId, userId)

Delete a user’s photo.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static Void deletePhoto(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the context user or the keyword me.

#### Return Value

Type: Void