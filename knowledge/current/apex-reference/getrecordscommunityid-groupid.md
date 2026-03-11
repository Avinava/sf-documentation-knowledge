---
title: "getRecords(communityId, groupId)"
domain: apex-reference
topic: getrecordscommunityid-groupid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getRecords, communityId, groupId, Get, first, page, records, associated, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getRecords(communityId, groupId)

> Get the first page of records associated with a
    group.

### getRecords(communityId, groupId)

Get the first page of records associated with a group.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecordPage getRecords(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​GroupRecordPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecordPage.htm "A paginated list of ConnectApi.GroupRecord objects.")