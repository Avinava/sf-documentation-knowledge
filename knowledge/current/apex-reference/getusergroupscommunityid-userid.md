---
title: "getUserGroups(communityId, userId)"
domain: apex-reference
topic: getusergroupscommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getUserGroups, communityId, userId, Get, user’s, groups., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUserGroups(communityId, userId)

> Get a user’s groups.

### getUserGroups(communityId, userId)

Get a user’s groups.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserGroupDetailPage getUserGroups(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.UserGroupDetailPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_group_detail_collection.htm "A page of groups that a user is a member of.")