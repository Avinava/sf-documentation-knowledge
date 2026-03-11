---
title: "getFavorites(communityId, subjectId)"
domain: apex-reference
topic: getfavoritescommunityid-subjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.236Z
keywords: [getFavorites, communityId, subjectId, Get, list, favorites, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFavorites(communityId, subjectId)

> Get a list of favorites for a user.

### getFavorites(communityId, subjectId)

Get a list of favorites for a user.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedFavorites getFavorites(String communityId, String subjectId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

#### Return Value

Type: [ConnectApi.FeedFavorites](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorites.htm "Feed favorites.")