---
title: "getGroupBatch(communityId, groupIds)"
domain: apex-reference
topic: getgroupbatchcommunityid-groupids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getGroupBatch, communityId, groupIds, Get, information, list, groups., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example, See]
---

# getGroupBatch(communityId, groupIds)

> Get information about a list of groups.

### getGroupBatch(communityId, groupIds)

Get information about a list of groups.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getGroupBatch(String communityId, List<String\> groupIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 group IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.ChatterGroup object and errors embedded in the results for groups that didn’t load.

#### Example

```

```

#### See Also

-   [getMembershipBatch(communityId, membershipIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembershipBatch "Get information about a list of group memberships.")