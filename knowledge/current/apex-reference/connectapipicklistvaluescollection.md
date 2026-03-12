---
title: "ConnectApi.PicklistValuesCollection"
domain: apex-reference
topic: connectapipicklistvaluescollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:28.385Z
estimatedTokens: 194
keywords: [ConnectApi.PicklistValuesCollection, Collection, picklist, values, picklists, record, type.]
---

# ConnectApi.PicklistValuesCollection

> Collection of picklist values for all the picklists of a record type.

# ConnectApi.PicklistValuesCollection

Collection of picklist values for all the picklists of a record type.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| picklistField​Values | Map<String, ConnectApi.​PicklistValues> | A map of field names to picklist values. The map contains all the picklist values for all the picklists of a record type, including dependent picklists. If a field isn’t a picklist, it isn’t represented in the map. | 66.0 |

#### See Also

-   [getPicklistValuesByRecordType(objectApiName, recordTypeId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm#apex_ConnectAPI_RecordUi_getPicklistValuesByRecordType_1 "Get the values for all the picklist fields of a specific record type.")

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​PicklistValues (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values.htm)
- getPicklistValuesByRecordType(objectApiName, recordTypeId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm)
