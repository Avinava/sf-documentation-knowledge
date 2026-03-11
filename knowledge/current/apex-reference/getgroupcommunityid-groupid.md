---
title: "getGroup(communityId, groupId)"
domain: apex-reference
topic: getgroupcommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getGroup, communityId, groupId, Get, information, group., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getGroup(communityId, groupId)

> Get information about a group.

### getGroup(communityId, groupId)

Get information about a group.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupDetail getGroup(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​Chatter​Group​Detail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm "Chatter group details.")