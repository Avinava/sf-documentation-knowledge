---
title: "TimeSlot"
domain: sfFieldRef
topic: timeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.390Z
estimatedTokens: 499
keywords: [TimeSlot, period, time, day, week, work, performed, Service, Salesforce, Scheduler, Workforce, Engagement, Operating, hours, consist]
---

# TimeSlot

> Represents a period of time on a specified day of the week during which
   work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. Operating
   hours consist of one or more time slots. This object is available in API version 38.0 and
  later.

# TimeSlot

Represents a period of time on a specified day of the week during which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. Operating hours consist of one or more time slots. This object is available in API version 38.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TimeSlot](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_timeslot.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, Public Sector Solutions Developer Guide, and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DayOfWeek | Day of Week | picklist |  | 255 |  |  |
| EndTime | End Time | time |  |  |  |  |
| Id | Time Slot ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxAppointments | Maximum Appointments | int | 9 |  |  |  |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| RecordsetFilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| StartTime | Start Time | time |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeSlotNumber | Name | string |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| WorkTypeGroupId | Work Type Group ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
