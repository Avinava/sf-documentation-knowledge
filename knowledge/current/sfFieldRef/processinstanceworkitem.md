---
title: "ProcessInstanceWorkitem"
domain: sfFieldRef
topic: processinstanceworkitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.960Z
estimatedTokens: 310
keywords: [ProcessInstanceWorkitem, user’s, pending, approval]
---

# ProcessInstanceWorkitem

> Represents a user’s pending approval request.

# ProcessInstanceWorkitem

Represents a user’s pending approval request.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProcessInstanceWorkitem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_processinstanceworkitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActorId | Actor ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ElapsedTimeInDays | Elapsed Time in Days | double |  |  | 7 | 3 |
| ElapsedTimeInHours | Elapsed Time in Hours | double |  |  | 7 | 2 |
| ElapsedTimeInMinutes | Elapsed Time in Minutes | double |  |  | 8 | 0 |
| Id | Process Instance Workitem ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| OriginalActorId | Original Actor ID | reference |  | 18 |  |  |
| ProcessInstanceId | Process Instance ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
