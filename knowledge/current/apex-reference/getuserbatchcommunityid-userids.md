---
title: "getUserBatch(communityId, userIds)"
domain: apex-reference
topic: getuserbatchcommunityid-userids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.472Z
keywords: [getUserBatch, communityId, userIds, Get, information, list, users., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Example]
---

# getUserBatch(communityId, userIds)

> Get information about a list of users.

### getUserBatch(communityId, userIds)

Get information about a list of users.

#### API Version

31.0

#### Available to Guest Users

32.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getUserBatch(String communityId, List<String\> userIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

userIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 user IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.User object and errors for users that didn’t load.

#### Example

```

```