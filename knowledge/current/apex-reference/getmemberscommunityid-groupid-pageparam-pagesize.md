---
title: "getMembers(communityId, groupId, pageParam,
    pageSize)"
domain: apex-reference
topic: getmemberscommunityid-groupid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getMembers, communityId, groupId, pageParam, pageSize, Get, page, information, members, group., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getMembers(communityId, groupId, pageParam,
    pageSize)

> Get a page of information about the members of a
    group.

### getMembers(communityId, groupId, pageParam, pageSize)

Get a page of information about the members of a group.

#### API Version

28.0

#### Available to Guest Users

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMemberPage getMembers(String communityId, String groupId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.Group​​MemberPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm "Page of group members.")