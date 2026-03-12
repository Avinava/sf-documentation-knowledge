---
title: "SchedulingConstraint"
domain: sfFieldRef
topic: schedulingconstraint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.942Z
estimatedTokens: 465
keywords: [SchedulingConstraint, scheduling, constraints, service, resource, API, version, 50.0, later]
---

# SchedulingConstraint

> Represents scheduling constraints on each service resource. This object
      is available in API version 50.0 and later.

# SchedulingConstraint

Represents scheduling constraints on each service resource. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SchedulingConstraint](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_schedulingconstraint.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Scheduling Constraint ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxNonstandardShiftsPerMonth | Maximum Non-Standard Shifts Per Month | int | 9 |  |  |  |
| MaxShiftsPerDay | Maximum Shifts Per Day | int | 9 |  |  |  |
| MaxShiftsPerMonth | Maximum Shifts Per Month | int | 9 |  |  |  |
| MaxShiftsPerWeek | Maximum Shifts Per Week | int | 9 |  |  |  |
| MaxWorkingHoursPerDay | Maximum Working Hours Per Day | double |  |  | 10 | 2 |
| MaxWorkingHoursPerMonth | Maximum Working Hours Per Month | double |  |  | 10 | 2 |
| MaxWorkingHoursPerWeek | Maximum Working Hours Per Week | double |  |  | 10 | 2 |
| Name | Name | string |  | 200 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RestTimeMinutes | Rest Time in Minutes | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
