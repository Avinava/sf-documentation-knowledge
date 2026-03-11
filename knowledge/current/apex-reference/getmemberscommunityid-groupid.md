---
title: "getMembers(communityId, groupId)"
domain: apex-reference
topic: getmemberscommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getMembers, communityId, groupId, Get, first, page, information, members, group., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMembers(communityId, groupId)

> Get the first page of information about the members of a
    group.

### getMembers(communityId, groupId)

Get the first page of information about the members of a group.

#### API Version

28.0

#### Available to Guest Users

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMemberPage getMembers(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Group​​MemberPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm "Page of group members.")