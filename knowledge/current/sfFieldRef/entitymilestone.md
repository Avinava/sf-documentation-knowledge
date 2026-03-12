---
title: "EntityMilestone"
domain: sfFieldRef
topic: entitymilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.435Z
estimatedTokens: 763
keywords: [EntityMilestone, step, customer, support, process, work, order, Salesforce, user, uses, term, “object, milestone, API, version]
---

# EntityMilestone

> Represents a required step in a customer support process on a work
			order. The Salesforce user interface uses the term “object milestone. This object
		is available in API version 37.0 and later.

# EntityMilestone

Represents a required step in a customer support process on a work order. The Salesforce user interface uses the term “object milestone. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EntityMilestone](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_entitymilestone.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualElapsedTimeInDays | Actual Elapsed Time (Days) | double |  |  | 6 | 2 |
| ActualElapsedTimeInHrs | Actual Elapsed Time (Hours) | double |  |  | 6 | 2 |
| ActualElapsedTimeInMins | Actual Elapsed Time (Mins) | int | 9 |  |  |  |
| BusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| CompletionDate | Completion Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ElapsedTimeInDays | Elapsed Time (Days) | double |  |  | 6 | 2 |
| ElapsedTimeInHrs | Elapsed Time (Hours) | double |  |  | 6 | 2 |
| ElapsedTimeInMins | Elapsed Time (Mins) | int | 9 |  |  |  |
| Id | Object Milestone ID | id |  | 18 |  |  |
| IsCompleted | Completed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsViolated | Violation | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MilestoneTypeId | Milestone ID | reference |  | 18 |  |  |
| Name | Object Milestone Name | string |  | 255 |  |  |
| ParentEntityId | ID | reference |  | 18 |  |  |
| SlaProcessId | Entitlement Process ID | reference |  | 18 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| StoppedTimeInDays | Stopped Time (Days) | double |  |  | 6 | 2 |
| StoppedTimeInHrs | Stopped Time (Hours) | double |  |  | 6 | 2 |
| StoppedTimeInMins | Stopped Time (Mins) | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetDate | Target Date | datetime |  |  |  |  |
| TargetResponseInDays | Target Response (Days) | double |  |  | 6 | 2 |
| TargetResponseInHrs | Target Response (Hours) | double |  |  | 6 | 2 |
| TargetResponseInMins | Target Response (Mins) | int | 9 |  |  |  |
| TimeRemainingInDays | Time Remaining (Days) | double |  |  | 6 | 2 |
| TimeRemainingInHrs | Time Remaining (Hour:Min) | string |  | 10 |  |  |
| TimeRemainingInMins | Time Remaining (Min:Sec) | string |  | 10 |  |  |
| TimeSinceTargetInDays | Time Since Target (Days) | double |  |  | 6 | 2 |
| TimeSinceTargetInHrs | Time Since Target (Hour:Min) | string |  | 10 |  |  |
| TimeSinceTargetInMins | Time Since Target (Min:Sec) | string |  | 10 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
