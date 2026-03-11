---
title: "getRecord(communityId, groupRecordId)"
domain: apex-reference
topic: getrecordcommunityid-grouprecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getRecord, communityId, groupRecordId, Get, record, associated, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getRecord(communityId, groupRecordId)

> Get a record associated with a group.

### getRecord(communityId, groupRecordId)

Get a record associated with a group.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecord getRecord(String communityId, String groupRecordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group record.

#### Return Value

Type: [ConnectApi.GroupRecord](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecord.htm#apex_connectapi_output_GroupRecord "A record associated with a group.")