---
title: "AppointmentTopicTimeSlot"
domain: sfFieldRef
topic: appointmenttopictimeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.844Z
estimatedTokens: 387
keywords: [AppointmentTopicTimeSlot, lookup, work, group, time, slot, API, version, 52.0, later]
---

# AppointmentTopicTimeSlot

> Represents a lookup to a work type or a work type group for a time
         slot This object is available in API version 52.0 and later.

# AppointmentTopicTimeSlot

Represents a lookup to a work type or a work type group for a time slot This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppointmentTopicTimeSlot](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appointmenttopictimeslot.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppointmentTopicTimeSlotKey | Appointment Topic Time Slot Key | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Appointment Topic Time Slot ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OperatingHoursId | Operating Hour ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeSlotId | Time Slot ID | reference |  | 18 |  |  |
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
