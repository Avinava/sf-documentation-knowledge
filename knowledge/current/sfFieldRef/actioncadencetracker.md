---
title: "ActionCadenceTracker"
domain: sfFieldRef
topic: actioncadencetracker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.187Z
estimatedTokens: 486
keywords: [ActionCadenceTracker, active, cadence, target]
---

# ActionCadenceTracker

> Represents an active cadence target.

# ActionCadenceTracker

Represents an active cadence target.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionCadenceTracker](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ActionCadenceTracker.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionCadenceId | Cadence ID | reference |  | 18 |  |  |
| CompletionDisposition | Target Disposition | picklist |  | 40 |  |  |
| CompletionReason | Completion Reason | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentStepId | Cadence Step Tracker ID | reference |  | 18 |  |  |
| DaisyChainIteration | DaisyChain IterationCadence Tracker | int | 9 |  |  |  |
| ErrorMessage | Error message | string |  | 255 |  |  |
| ExitGlobalRuleId | Cadence Rule ID | reference |  | 18 |  |  |
| Id | Cadence Tracker ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTrackerActive | Is Cadence Tracker Active | boolean |  |  |  |  |
| LastCompletedStepId | Cadence Step Tracker ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedToAttributionType | Opportunity Attribution Type | picklist |  | 255 |  |  |
| RelatedToId | Related Opportunity ID | reference |  | 18 |  |  |
| ScheduledResumeDateTime | Scheduled Resume Date Time | datetime |  |  |  |  |
| State | State | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetId | Target ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
