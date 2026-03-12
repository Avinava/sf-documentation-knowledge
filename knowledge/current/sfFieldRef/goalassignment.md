---
title: "GoalAssignment"
domain: sfFieldRef
topic: goalassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.692Z
estimatedTokens: 547
keywords: [GoalAssignment, assignment, goal, API, version, 55.0, later]
---

# GoalAssignment

> Represents the assignment of a goal. This object is available in API
      version 55.0 and later.

# GoalAssignment

Represents the assignment of a goal. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GoalAssignment in the Case Management Guide, Education Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompletionDate | Completion Date | date |  |  |  |  |
| CompletionPercentage | Completion Percentage | percent |  |  | 5 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DescriptionCodeId | Description Code ID | reference |  | 18 |  |  |
| GoalAssigneeId | Goal Assignee ID | reference |  | 18 |  |  |
| GoalDefinitionId | Goal Definition ID | reference |  | 18 |  |  |
| GoalType | Goal Type | string |  | 255 |  |  |
| Id | Goal Assignment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Target | Target | double |  |  | 12 | 2 |
| TargetCompletionDate | Target Completion Date | date |  |  |  |  |
| TargetCompletionPercentage | Target Completion Percentage | percent |  |  | 5 | 2 |
| TaskJobStatus | Task Job Status | picklist |  | 255 |  |  |
| TaskJobStatusMessage | Task Job Status Message | textarea |  | 2000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
