---
title: "Task"
domain: sfFieldRef
topic: task
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.073Z
estimatedTokens: 791
keywords: [Task, business, activity, making, phone, call, to-do, items, user, Event, records, collectively, referred, activities]
---

# Task

> Represents a business activity such as making a phone call or other
			to-do items. In the user interface, Task and Event records are collectively referred to
			as activities.

# Task

Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Task](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_task.htm "HTML (New Window)") in the Consumer Goods Cloud Developer Guide, Loyalty Management Developer Guide, Object Reference for the Salesforce Platform, Revenue Cloud Developer Guide, and Work.com Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivityDate | Due Date Only | date |  |  |  |  |
| CallDisposition | Call Result | string |  | 255 |  |  |
| CallDurationInSeconds | Call Duration | int | 8 |  |  |  |
| CallObject | Call Object Identifier | string |  | 255 |  |  |
| CallType | Call Type | picklist |  | 40 |  |  |
| CompletedDateTime | Completed Date/Time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Activity ID | id |  | 18 |  |  |
| IsArchived | Archived | boolean |  |  |  |  |
| IsClosed | Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHighPriority | High Priority | boolean |  |  |  |  |
| IsRecurrence | Create Recurring Series of Tasks | boolean |  |  |  |  |
| IsReminderSet | Reminder Set | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Assigned To ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 20 |  |  |
| RecurrenceActivityId | Recurrence Activity ID | reference |  | 18 |  |  |
| RecurrenceDayOfMonth | Recurrence Day of Month | int | 9 |  |  |  |
| RecurrenceDayOfWeekMask | Recurrence Day of Week Mask | int | 9 |  |  |  |
| RecurrenceEndDateOnly | Recurrence End | date |  |  |  |  |
| RecurrenceInstance | Recurrence Instance | picklist |  | 40 |  |  |
| RecurrenceInterval | Recurrence Interval | int | 9 |  |  |  |
| RecurrenceMonthOfYear | Recurrence Month of Year | picklist |  | 40 |  |  |
| RecurrenceRegeneratedType | Repeat This Task | picklist |  | 40 |  |  |
| RecurrenceStartDateOnly | Recurrence Start | date |  |  |  |  |
| RecurrenceTimeZoneSidKey | Recurrence Time Zone | picklist |  | 40 |  |  |
| RecurrenceType | Recurrence Type | picklist |  | 40 |  |  |
| ReminderDateTime | Reminder Date/Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subject | Subject | combobox |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskSubtype | Task Subtype | picklist |  | 40 |  |  |
| WhatId | Related To ID | reference |  | 18 |  |  |
| WhoId | Name ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
