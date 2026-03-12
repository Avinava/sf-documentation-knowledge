---
title: "ConnectApi.WorkStepPicklistValueAttribute"
domain: apex-reference
topic: connectapiworksteppicklistvalueattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.368Z
estimatedTokens: 241
keywords: [Work, step, picklist, attributes]
---

# ConnectApi.WorkStepPicklistValueAttribute

> Work step picklist value attributes.

# ConnectApi.WorkStepPicklistValueAttribute

Work step picklist value attributes.

Subclass of [ConnectApi.AbstractPicklistValueAttributes](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_picklist_value_attributes.htm "Picklist value attributes.")

To use work step status picklist value attributes, you must have [Field Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_set_up.htm) enabled in your org.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| sortOrder | Integer | Order in which the work step statuses are displayed in the status category’s picklist. | 66.0 |
| statusCode | String | Status category of the work step. | 66.0 |

For more information, see the [WorkStepStatus object documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workstepstatus.htm).

## Related Topics

- ConnectApi.AbstractPicklistValueAttributes (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_picklist_value_attributes.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
