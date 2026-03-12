---
title: "ConnectApi.PicklistValue"
domain: apex-reference
topic: connectapipicklistvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.427Z
estimatedTokens: 226
keywords: [ConnectApi.PicklistValue, Picklist]
---

# ConnectApi.PicklistValue

> Picklist value.

# ConnectApi.PicklistValue

Picklist value.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributes | ConnectApi.​AbstractPicklist​ValueAttributes | Picklist value attributes. | 66.0 |
| label | String | Displayable value of the picklist to use. | 66.0 |
| validFor | List<Integer> | If the picklist is a dependent picklist, the property contains a list of the controlling value indexes for which this value is valid. If the picklist is an independent picklist, the list is empty. | 66.0 |
| value | String | Value of the picklist to use. | 66.0 |

#### See Also

-   [ConnectApi.PicklistValues](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values.htm "Picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.")

## Related Topics

- ConnectApi.​AbstractPicklist​ValueAttributes (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_picklist_value_attributes.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.PicklistValues (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_picklist_values.htm)
