---
title: "ActionCadenceStepTracker"
domain: sfFieldRef
topic: actioncadencesteptracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.180Z
estimatedTokens: 539
keywords: [ActionCadenceStepTracker, step, active, cadence, specific, target]
---

# ActionCadenceStepTracker

> Represents a step in an active cadence for a specific cadence
      target.

# ActionCadenceStepTracker

Represents a step in an active cadence for a specific cadence target.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionCadenceStepTracker](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ActionCadenceStepTracker.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionCadenceId | Cadence ID | reference |  | 18 |  |  |
| ActionCadenceName | Cadence Name | string |  | 255 |  |  |
| ActionCadenceStepId | Cadence Step ID | reference |  | 18 |  |  |
| ActionCadenceTrackerId | Cadence Tracker ID | reference |  | 18 |  |  |
| ActionTakenDateTime | Action Taken Date Time | datetime |  |  |  |  |
| CompletedById | User ID | reference |  | 18 |  |  |
| CompletionDate | Completion Date | datetime |  |  |  |  |
| CompletionReason | Completion Reason | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DueDateTime | Due Date Time | datetime |  |  |  |  |
| ErrorCode | Error Code | picklist |  | 255 |  |  |
| GoToStepIterationCount | Step Iteration Count | int | 9 |  |  |  |
| Id | Cadence Step Tracker ID | id |  | 18 |  |  |
| IsActionTaken | Is Action Taken | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ScheduledStartDateTime | Scheduled Start Date Time | datetime |  |  |  |  |
| SecondsOverdue | Seconds Overdue | int | 9 |  |  |  |
| State | State | picklist |  | 255 |  |  |
| StepTitle | Cadence Step Title | string |  | 255 |  |  |
| StepType | Cadence Step Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetId | Target ID | reference |  | 18 |  |  |
| WasEverPaused | Was Ever Paused | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
