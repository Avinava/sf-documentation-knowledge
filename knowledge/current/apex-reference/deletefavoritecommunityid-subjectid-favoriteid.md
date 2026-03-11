---
title: "deleteFavorite(communityId, subjectId,
  favoriteId)"
domain: apex-reference
topic: deletefavoritecommunityid-subjectid-favoriteid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.236Z
keywords: [deleteFavorite, communityId, subjectId, favoriteId, Delete, favorite., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteFavorite(communityId, subjectId,
  favoriteId)

> Delete a favorite.

### deleteFavorite(communityId, subjectId, favoriteId)

Delete a favorite.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteFavorite(String communityId, String subjectId, String favoriteId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

favoriteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a favorite.

#### Return Value

Type: Void