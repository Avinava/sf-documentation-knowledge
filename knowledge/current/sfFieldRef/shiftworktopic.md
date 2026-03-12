---
title: "ShiftWorkTopic"
domain: sfFieldRef
topic: shiftworktopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.912Z
estimatedTokens: 381
keywords: [ShiftWorkTopic, relationship, Shift, Work, Group, Salesforce, Scheduler, API, version, 56.0, later]
---

# ShiftWorkTopic

> Represents the relationship between a Shift object and a Work Type or
         Work Type Group object for Salesforce Scheduler. This object is available in API
      version 56.0 and later.

# ShiftWorkTopic

Represents the relationship between a Shift object and a Work Type or Work Type Group object for Salesforce Scheduler. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ShiftWorkTopic in the Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AreAllTopicsSupported | All Topics Supported | boolean |  |  |  |  |
| AttendeeLimit | Attendee Limit | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Shift Work Topic ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxAppointments | Maximum Concurrent Appointments | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ServiceAppointmentLimit | Maximum Appointment Capacity | int | 9 |  |  |  |
| ShiftId | Shift ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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
