---
title: "ConnectApi.PicklistValues"
domain: apex-reference
topic: connectapipicklistvalues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.584Z
keywords: [ConnectApi.PicklistValues, See]
---

# ConnectApi.PicklistValues

# ConnectApi.PicklistValues

Picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| controllerValues | Map<String, Integer> | If the picklist is dependent, this property is a map of its immediate controlling field’s picklist values to their indexes.If the controlling field is a picklist, the string is the picklist value and the integer is the value’s index.If the controlling field is a checkbox, the values in the map are "false": 0 and "true": 1.If the picklist is independent, the map is empty. | 66.0 |
| defaultValue | ConnectApi.​PicklistValue | Default value for the picklist, or null if there isn’t one. | 66.0 |
| url | String | User Interface API resource that represents this payload. | 66.0 |
| values | List<ConnectApi.​PicklistValue> | List of values for this object, record type, field combination. | 66.0 |

#### See Also

-   [ConnectApi.PicklistValuesCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values_collection.htm "Collection of picklist values for all the picklists of a record type.")