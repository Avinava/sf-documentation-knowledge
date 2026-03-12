---
title: "RecurrenceSchedule"
domain: sfFieldRef
topic: recurrenceschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.872Z
estimatedTokens: 428
keywords: [RecurrenceSchedule, recurrence, schedule, benefit, Program, Management, API, version, 57.0, later]
---

# RecurrenceSchedule

> Represents the recurrence schedule for a benefit schedule. This
      object is available with Program Management in API version 57.0 and later.

# RecurrenceSchedule

Represents the recurrence schedule for a benefit schedule. This object is available with Program Management in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RecurrenceSchedule in the Education Cloud Developer Guide, Program Management Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CompletedScheduleCount | Completed Schedule Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Recurrence Schedule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NextScheduleDateTime | Next Schedule Date Time | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessName | Process Name | picklist |  | 255 |  |  |
| ReferenceRecordId | ReferenceRecord ID | reference |  | 18 |  |  |
| ScheduleDayValue | Schedule Day Value | int | 9 |  |  |  |
| ScheduleFrequency | Schedule Frequency | picklist |  | 255 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalRecurrencesCount | Total Recurrences Count | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
