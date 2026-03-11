---
title: "getFollowings(communityId, userId, pageParam)"
domain: apex-reference
topic: getfollowingscommunityid-userid-pageparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getFollowings, communityId, userId, pageParam, Get, page, users, records, user, follows., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getFollowings(communityId, userId, pageParam)

> Get a page of users and records that a user follows.

### getFollowings(communityId, userId, pageParam)

Get a page of users and records that a user follows.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowingPage getFollowings(String communityId, String userId, Integer pageParam)

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

#### Return Value

Type: [ConnectApi.​FollowingPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_following_page.htm "Page of following subscriptions.")