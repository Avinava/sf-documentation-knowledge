---
title: "Shift"
domain: sfFieldRef
topic: shift
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.809Z
estimatedTokens: 694
keywords: [Shift, service, resource, scheduling, API, versions, 46.0, later]
---

# Shift

> Represents a shift for service resource scheduling. Available
		in API versions 46.0 and later.

# Shift

Represents a shift for service resource scheduling. Available in API versions 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Shift](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shift.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide, Emergency Response Management Object Reference, Emergency Response Management for Public Health Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, Salesforce Scheduler Developer Guide, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppointmentCategoryId | Appointment Category ID | reference |  | 18 |  |  |
| BackgroundColor | Background Color | string |  | 7 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| Id | Shift ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHolidayShift | Holiday Shift | boolean |  |  |  |  |
| IsNonStandard | Non-Standard | boolean |  |  |  |  |
| JobProfileId | Job Profile ID | reference |  | 18 |  |  |
| Label | Label | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecordsetFilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| RecurrenceEndDate | Recurrence End Date | date |  |  |  |  |
| RecurrencePattern | Recurrence Pattern | string |  | 255 |  |  |
| RecurrenceStartDate | Recurrence Start Date | date |  |  |  |  |
| ServiceResourceId | Service Resource ID | reference |  | 18 |  |  |
| ServiceTerritoryId | Service Territory ID | reference |  | 18 |  |  |
| ShiftNumber | Shift Number | string |  | 255 |  |  |
| ShiftTemplateId | Shift Template ID | reference |  | 18 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeSlotType | Time Slot Type | picklist |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| WorkTypeGroupId | Work Type Group ID | reference |  | 18 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
