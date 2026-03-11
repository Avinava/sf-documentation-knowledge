---
title: "getUser(communityId, userId)"
domain: apex-reference
topic: getusercommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getUser, communityId, userId, Get, information, user., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getUser(communityId, userId)

> Get information about a user.

### getUser(communityId, userId)

Get information about a user.

#### API Version

28.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UserSummary getUser(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.UserDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_detail.htm#apex_connectapi_output_user_detail "Details about a user in an org.")

#### Usage

If the user is external, the properties that the ConnectApi.UserDetail output class shares with the [ConnectApi.UserSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm#apex_connectapi_output_user_summary "User summary.") output class can have non-null values. Other properties are always null.