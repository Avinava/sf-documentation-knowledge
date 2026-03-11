---
title: "getUsers(communityId, pageParam, pageSize)"
domain: apex-reference
topic: getuserscommunityid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getUsers, communityId, pageParam, pageSize, Get, page, users., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUsers(communityId, pageParam, pageSize)

> Get a page of users.

### getUsers(communityId, pageParam, pageSize)

Get a page of users.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserPage getUsers(String communityId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.UserPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_page.htm "Page of users.")