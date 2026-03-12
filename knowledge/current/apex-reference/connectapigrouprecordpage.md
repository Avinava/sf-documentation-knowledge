---
title: "ConnectApi.GroupRecordPage"
domain: apex-reference
topic: connectapigrouprecordpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.966Z
estimatedTokens: 171
keywords: [ConnectApi.GroupRecordPage, paginated, ConnectApi.GroupRecord, objects]
---

# ConnectApi.GroupRecordPage

> A paginated list of ConnectApi.GroupRecord
    objects.

# ConnectApi.GroupRecordPage

A paginated list of ConnectApi.GroupRecord objects.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| current​PageUrl | String | Connect REST API URL identifying the current page. | 33.0 |
| next​PageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | 33.0 |
| previous​PageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | 33.0 |
| records | List<ConnectApi.​GroupRecord> | List of records on the current page. | 33.0 |
| total​Record​Count | Integer | Total number of records associated with the group. | 33.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GroupRecord (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecord.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
