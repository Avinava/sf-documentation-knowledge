---
title: "getFollowings(communityId, userId)"
domain: apex-reference
topic: getfollowingscommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getFollowings, communityId, userId, Get, first, page, users, records, user, follows., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getFollowings(communityId, userId)

> Get the first page of users and records that a user follows.

### getFollowings(communityId, userId)

Get the first page of users and records that a user follows.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowingPage getFollowings(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.​FollowingPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_following_page.htm "Page of following subscriptions.")