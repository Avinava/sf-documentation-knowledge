---
title: "Holiday"
domain: sfFieldRef
topic: holiday
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.560Z
estimatedTokens: 534
keywords: [Holiday, period, time, customer, support, team, unavailable, Business, hours, escalation, rules, associated, suspended, any, holidays]
---

# Holiday

> Represents a period of time during which your customer support team is unavailable. Business hours and escalation rules associated with business hours are suspended
			during any holidays with which they are affiliated.

# Holiday

Represents a period of time during which your customer support team is unavailable. Business hours and escalation rules associated with business hours are suspended during any holidays with which they are affiliated.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Holiday](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_holiday.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Object Reference for the Salesforce Platform, and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityDate | Holiday Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 100 |  |  |
| EndTimeInMinutes | End Time In Minutes From Midnight | int | 9 |  |  |  |
| Id | Holiday ID | id |  | 18 |  |  |
| IsAllDay | All Day | boolean |  |  |  |  |
| IsRecurrence | Recurring Holiday | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Holiday Name | string |  | 80 |  |  |
| NextOccurrenceDate | Next Occurrence Date | date |  |  |  |  |
| RecurrenceDayOfMonth | Recurrence Day of Month | int | 9 |  |  |  |
| RecurrenceDayOfWeekMask | Recurrence Day of Week Mask | int | 9 |  |  |  |
| RecurrenceEndDateOnly | Recurrence End | date |  |  |  |  |
| RecurrenceInstance | Recurrence Instance | picklist |  | 40 |  |  |
| RecurrenceInterval | Recurrence Interval | int | 9 |  |  |  |
| RecurrenceMonthOfYear | Recurrence Month of Year | picklist |  | 40 |  |  |
| RecurrenceStartDate | Recurrence Start | date |  |  |  |  |
| RecurrenceType | Recurrence Type | picklist |  | 40 |  |  |
| StartTimeInMinutes | Start Time In Minutes From Midnight | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
