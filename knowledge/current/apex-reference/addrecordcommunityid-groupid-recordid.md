---
title: "addRecord(communityId, groupId, recordId)"
domain: apex-reference
topic: addrecordcommunityid-groupid-recordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [addRecord, communityId, groupId, recordId, Associate, record, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# addRecord(communityId, groupId, recordId)

> Associate a record with a group.

### addRecord(communityId, groupId, recordId)

Associate a record with a group.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecord addRecord(String communityId, String groupId, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group with which to associate the record.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the record to associate with the group.

#### Return Value

Type: [ConnectApi.GroupRecord](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecord.htm#apex_connectapi_output_GroupRecord "A record associated with a group.")