---
title: "ProcessInstance"
domain: sfFieldRef
topic: processinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.936Z
estimatedTokens: 406
keywords: [ProcessInstance, instance, end-to-end, approval, process, node, step, workitem, objects, history, reports]
---

# ProcessInstance

> Represents an instance of a single, end-to-end 
 	approval process. Use this and the node, step, and workitem process instance objects 
 	to create approval history reports.

# ProcessInstance

Represents an instance of a single, end-to-end approval process. Use this and the node, step, and workitem process instance objects to create approval history reports.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProcessInstance](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_processinstance.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompletedDate | Completed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ElapsedTimeInDays | Elapsed Time in Days | double |  |  | 7 | 3 |
| ElapsedTimeInHours | Elapsed Time in Hours | double |  |  | 7 | 2 |
| ElapsedTimeInMinutes | Elapsed Time in Minutes | double |  |  | 8 | 0 |
| Id | Process Instance ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastActorId | User ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ProcessDefinitionId | Approval Process ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SubmittedById | User ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetObjectId | Target Object ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
