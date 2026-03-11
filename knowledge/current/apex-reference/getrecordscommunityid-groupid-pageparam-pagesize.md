---
title: "getRecords(communityId, groupId, pageParam,
      pageSize)"
domain: apex-reference
topic: getrecordscommunityid-groupid-pageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getRecords, communityId, groupId, pageParam, pageSize, Get, page, records, associated, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getRecords(communityId, groupId, pageParam,
      pageSize)

> Get a page of records associated with a group.

### getRecords(communityId, groupId, pageParam, pageSize)

Get a page of records associated with a group.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecordPage getRecords(String communityId, String groupId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​GroupRecordPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecordPage.htm "A paginated list of ConnectApi.GroupRecord objects.")