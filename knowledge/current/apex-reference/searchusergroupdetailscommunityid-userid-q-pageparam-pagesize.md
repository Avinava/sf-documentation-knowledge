---
title: "searchUserGroupDetails(communityId, userId, q,
                  pageParam, pageSize)"
domain: apex-reference
topic: searchusergroupdetailscommunityid-userid-q-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [searchUserGroupDetails, communityId, userId, pageParam, pageSize, Get, page, user’s, groups, match, search, criteria., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# searchUserGroupDetails(communityId, userId, q,
                  pageParam, pageSize)

> Get a page of a user’s groups that match the search criteria.

### searchUserGroupDetails(communityId, userId, q, pageParam, pageSize)

Get a page of a user’s groups that match the search criteria.

#### API Version

45.0

#### Available to Guest Users

45.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserGroupDetailPage searchUserGroupDetails(String communityId, String userId, String q, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.UserGroupDetailPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_group_detail_collection.htm "A page of groups that a user is a member of.")