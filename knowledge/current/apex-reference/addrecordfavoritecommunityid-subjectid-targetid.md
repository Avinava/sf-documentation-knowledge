---
title: "addRecordFavorite(communityId, subjectId,
  targetId)"
domain: apex-reference
topic: addrecordfavoritecommunityid-subjectid-targetid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.236Z
keywords: [addRecordFavorite, communityId, subjectId, targetId, Add, topic, favorite., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# addRecordFavorite(communityId, subjectId,
  targetId)

> Add a topic as a favorite.

### addRecordFavorite(communityId, subjectId, targetId)

Add a topic as a favorite.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FeedFavorite addRecordFavorite(String communityId, String subjectId, String targetId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

subjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the context user or the alias me.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the topic to add as a favorite.

#### Return Value

Type: [ConnectApi.FeedFavorite](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorite.htm "Feed favorite.")