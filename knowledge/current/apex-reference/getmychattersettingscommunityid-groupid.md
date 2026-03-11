---
title: "getMyChatterSettings(communityId, groupId)"
domain: apex-reference
topic: getmychattersettingscommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getMyChatterSettings, communityId, groupId, Get, context, user’s, Chatter, settings, group., API, Version, Requires, Signature, Parameters, Return, Value]
---

# getMyChatterSettings(communityId, groupId)

> Get the context user’s Chatter settings for a group.

### getMyChatterSettings(communityId, groupId)

Get the context user’s Chatter settings for a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupChatterSettings getMyChatterSettings(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Group​​ChatterSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Chatter_Settings.htm "A user’s Chatter settings for a specific group.")