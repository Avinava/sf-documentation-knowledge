---
title: "getFollowers(communityId, userId)"
domain: apex-reference
topic: getfollowerscommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.471Z
keywords: [getFollowers, communityId, userId, Get, first, page, followers, user., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getFollowers(communityId, userId)

> Get the first page of followers for a user.

### getFollowers(communityId, userId)

Get the first page of followers for a user.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.FollowerPage getFollowers(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.​FollowerPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Follower_Page.htm "Page of followers.")