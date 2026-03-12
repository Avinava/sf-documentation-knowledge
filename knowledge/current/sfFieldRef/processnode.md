---
title: "ProcessNode"
domain: sfFieldRef
topic: processnode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.964Z
estimatedTokens: 248
keywords: [ProcessNode, step, process, definition, Compare, ProcessInstanceNode, running, API, version, 31.0, later]
---

# ProcessNode

> Describes a step in a process definition. Compare to ProcessInstanceNode, which describes a step in a running process. This object is available in API version 31.0 and
		later.

# ProcessNode

Describes a step in a process definition. Compare to ProcessInstanceNode, which describes a step in a running process. This object is available in API version 31.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProcessNode](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_processnode.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Description | Description | textarea |  | 1000 |  |  |
| DeveloperName | Unique Name | string |  | 80 |  |  |
| Id | Process Node ID | id |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| ProcessDefinitionId | Approval Process ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
