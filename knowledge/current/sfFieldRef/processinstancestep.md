---
title: "ProcessInstanceStep"
domain: sfFieldRef
topic: processinstancestep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.954Z
estimatedTokens: 341
keywords: [ProcessInstanceStep, work, item, approval, process, ProcessInstance]
---

# ProcessInstanceStep

> Represents one work item in an approval process (ProcessInstance).

# ProcessInstanceStep

Represents one work item in an approval process (ProcessInstance).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProcessInstanceStep](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_processinstancestep.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActorId | Actor ID | reference |  | 18 |  |  |
| Comments | Comments | string |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ElapsedTimeInDays | Elapsed Time in Days | double |  |  | 18 | 0 |
| ElapsedTimeInHours | Elapsed Time in Hours | double |  |  | 7 | 2 |
| ElapsedTimeInMinutes | Elapsed Time in Minutes | double |  |  | 8 | 0 |
| Id | Process Instance Step ID | id |  | 18 |  |  |
| OriginalActorId | Original Actor ID | reference |  | 18 |  |  |
| ProcessInstanceId | Process Instance ID | reference |  | 18 |  |  |
| StepNodeId | Process Node ID | reference |  | 18 |  |  |
| StepStatus | Step Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
