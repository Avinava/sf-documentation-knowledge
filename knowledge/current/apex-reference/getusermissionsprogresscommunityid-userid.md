---
title: "getUserMissionsProgress(communityId, userId)"
domain: apex-reference
topic: getusermissionsprogresscommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.362Z
keywords: [getUserMissionsProgress, communityId, userId, Get, mission, activity, progress, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUserMissionsProgress(communityId, userId)

> Get mission activity progress for a user.

### getUserMissionsProgress(communityId, userId)

Get mission activity progress for a user.

#### API Version

46.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserMissionActivityCollection getUserMissionsProgress(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

#### Return Value

Type: [ConnectApi.UserMissionActivityCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity_collection.htm "List of mission activities for a user.")