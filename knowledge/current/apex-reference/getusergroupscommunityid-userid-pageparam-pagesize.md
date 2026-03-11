---
title: "getUserGroups(communityId, userId, pageParam,
                  pageSize)"
domain: apex-reference
topic: getusergroupscommunityid-userid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getUserGroups, communityId, userId, pageParam, pageSize, Get, page, user’s, groups., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUserGroups(communityId, userId, pageParam,
                  pageSize)

> Get a page of a user’s groups.

### getUserGroups(communityId, userId, pageParam, pageSize)

Get a page of a user’s groups.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserGroupDetailPage getUserGroups(String communityId, String userId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.UserGroupDetailPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_group_detail_collection.htm "A page of groups that a user is a member of.")