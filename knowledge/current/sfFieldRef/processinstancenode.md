---
title: "ProcessInstanceNode"
domain: sfFieldRef
topic: processinstancenode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.949Z
estimatedTokens: 413
keywords: [ProcessInstanceNode, step, instance, approval, process, Compare, ProcessNode, definition, retrieve, history]
---

# ProcessInstanceNode

> Represents a step in an instance of an approval process. Compare to ProcessNode, which describes the step in a process definition. Use this object to retrieve approval
			history.

# ProcessInstanceNode

Represents a step in an instance of an approval process. Compare to ProcessNode, which describes the step in a process definition. Use this object to retrieve approval history.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProcessInstanceNode](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_processinstancenode.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompletedDate | Completed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ElapsedTimeInDays | Elapsed Time in Days | double |  |  | 7 | 3 |
| ElapsedTimeInHours | Elapsed Time in Hours | double |  |  | 7 | 2 |
| ElapsedTimeInMinutes | Elapsed Time in Minutes | double |  |  | 8 | 0 |
| Id | Process Instance Node ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastActorId | User ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NodeStatus | Node Status | picklist |  | 255 |  |  |
| ProcessInstanceId | Process Instance ID | reference |  | 18 |  |  |
| ProcessNodeId | Process Node ID | reference |  | 18 |  |  |
| ProcessNodeName | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
