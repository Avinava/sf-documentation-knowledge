---
title: "ActionPlan"
domain: sfFieldRef
topic: actionplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.233Z
estimatedTokens: 580
keywords: [ActionPlan, instance, action, plan, tasks, created, template, API, version, 44.0, later]
---

# ActionPlan

> Represents the instance of an action plan, a set of tasks created from
			an action plan template. This object is available in API version 44.0 and
		later.

# ActionPlan

Represents the instance of an action plan, a set of tasks created from an action plan template. This object is available in API version 44.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionPlan](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplan.htm "HTML (New Window)") in the Emergency Response Management Object Reference, Life Sciences Cloud Developer Guide, Object Reference for the Salesforce Platform, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionPlanState | Status | picklist |  | 40 |  |  |
| ActionPlanTemplateVersionId | Action Plan Template Version ID | reference |  | 18 |  |  |
| ActionPlanType | Action Plan Type | picklist |  | 255 |  |  |
| ActualEndDate | Actual End Date | date |  |  |  |  |
| ActualStartDate | Actual Start Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Action Plan ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsUsingHolidayHours | Skip Nonwork Days | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecordCreationType | Record Creation Type | picklist |  | 255 |  |  |
| RecurringScheduleId | Recurrence Schedule ID | reference |  | 18 |  |  |
| ScheduleFrequency | Schedule Frequency | string |  | 50 |  |  |
| ShouldAllowOverride | Should Allow Override | boolean |  |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetId | Target Record ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
