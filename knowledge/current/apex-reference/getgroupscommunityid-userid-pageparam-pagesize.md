---
title: "getGroups(communityId, userId, pageParam,
            pageSize)"
domain: apex-reference
topic: getgroupscommunityid-userid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getGroups, communityId, userId, pageParam, pageSize, Get, page, groups, user, member, of., API, Version, Important, Available, Guest, Users, Requires, Chatter, Signature]
---

# getGroups(communityId, userId, pageParam,
            pageSize)

> Get a page of groups that a user is a member of.

### getGroups(communityId, userId, pageParam, pageSize)

Get a page of groups that a user is a member of.

#### API Version

28.0–44.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

In version 45.0 and later, use [getUserGroups(communityId, userId, pageParam, pageSize)](#apex_ConnectAPI_ChatterUsers_getGroups_4 "Get a page of a user’s groups.").

#### Available to Guest Users

32.0–44.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserGroupPage getGroups(String communityId, String userId, Integer pageParam, Integer pageSize)

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

Type: [ConnectApi.User​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_group_page.htm "A paginated list of groups the context user is a member of.")