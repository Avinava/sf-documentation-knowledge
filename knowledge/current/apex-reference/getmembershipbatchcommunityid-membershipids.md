---
title: "getMembershipBatch(communityId,
        membershipIds)"
domain: apex-reference
topic: getmembershipbatchcommunityid-membershipids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getMembershipBatch, communityId, membershipIds, Get, information, list, group, memberships., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Example, See]
---

# getMembershipBatch(communityId,
        membershipIds)

> Get information about a list of group memberships.

### getMembershipBatch(communityId, membershipIds)

Get information about a list of group memberships.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getMembershipBatch(String communityId, List<String\> membershipIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 group membership IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.GroupMember object and errors embedded in the results for group memberships that didn’t load.

#### Example

```

```

#### See Also

-   [getGroupBatch(communityId, groupIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupBatch "Get information about a list of groups.")