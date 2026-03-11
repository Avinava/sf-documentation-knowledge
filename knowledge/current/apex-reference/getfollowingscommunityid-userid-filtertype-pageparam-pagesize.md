---
title: "getFollowings(communityId, userId, filterType,
                  pageParam, pageSize)"
domain: apex-reference
topic: getfollowingscommunityid-userid-filtertype-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getFollowings, communityId, userId, filterType, pageParam, pageSize, Get, page, specified, number, records, filtered, key, prefix, user, follows., API, Version, Available, Guest]
---

# getFollowings(communityId, userId, filterType,
                  pageParam, pageSize)

> Get a page with the specified number of records, filtered by key prefix, that a
            user follows.

### getFollowings(communityId, userId, filterType, pageParam, pageSize)

Get a page with the specified number of records, filtered by key prefix, that a user follows.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowingPage getFollowings(String communityId, String userId, String filterType, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

filterType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the key prefix to filter the type of objects returned. A key prefix is the first three characters of the object ID, which specifies the object type. For example, User objects have a prefix of 005 and Group objects have a prefix of 0F9.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​FollowingPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_following_page.htm "Page of following subscriptions.")