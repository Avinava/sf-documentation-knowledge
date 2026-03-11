---
title: "getReputation(communityId, userId)"
domain: apex-reference
topic: getreputationcommunityid-userid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getReputation, communityId, userId, Get, user’s, reputation., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getReputation(communityId, userId)

> Get a user’s reputation.

### getReputation(communityId, userId)

Get a user’s reputation.

#### API Version

32.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Reputation getReputation(String communityId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the user.

#### Return Value

Type: [ConnectApi.Reputation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reputation.htm#apex_connectapi_output_reputation "Reputation for a user.")