---
title: "ConnectApi.RecordsetFilterCriteriaInput"
domain: apex-reference
topic: connectapirecordsetfiltercriteriainput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.513Z
keywords: [ConnectApi.RecordsetFilterCriteriaInput, See]
---

# ConnectApi.RecordsetFilterCriteriaInput

# ConnectApi.RecordsetFilterCriteriaInput

A set of recordset filter criteria applied to records, such as service appointment records.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteriaIds | List<String> | Recordset filter criteria IDs. | Required | 53.0 |
| enforceSharing | Boolean | Determines whether record sharing checks are enforced (true) or not (false) during the execution of this call. | Optional | 53.0 |
| filteredObjectName | String | Object that the filter is applied to. | Required | 53.0 |
| recordIds | List<String> | List of record IDs of the filtered object. | Required | 53.0 |

#### See Also

-   [evaluateRecordsetFilterCriteria(recordsetFilterCriteriaInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordFilterCriteriaFamily_static_methods.htm#apex_ConnectAPI_RecordFilterCriteriaFamily_evaluateRecordsetFilterCriteria_1 "Filter records on recordset filter criteria.")