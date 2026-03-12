---
title: "Event"
domain: sfFieldRef
topic: event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.489Z
estimatedTokens: 824
keywords: [Event, calendar, user, task, records, collectively, referred, activities]
---

# Event

> Represents an event in the calendar. In the user interface, event and
      task records are collectively referred to as activities.

# Event

Represents an event in the calendar. In the user interface, event and task records are collectively referred to as activities.

For more information, see Event in the Object Reference for Salesforce and Lightning Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivityDate | Due Date Only | date |  |  |  |  |
| ActivityDateTime | Due Date Time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DurationInMinutes | Duration | int | 8 |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| EventSubtype | Event Subtype | picklist |  | 40 |  |  |
| GroupEventType | Group Event Type | picklist |  | 40 |  |  |
| Id | Activity ID | id |  | 18 |  |  |
| IsAllDayEvent | All-Day Event | boolean |  |  |  |  |
| IsArchived | Archived | boolean |  |  |  |  |
| IsChild | Is Child | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGroupEvent | Is Group Event | boolean |  |  |  |  |
| IsPrivate | Private | boolean |  |  |  |  |
| IsRecurrence | Create Recurring Series of Events | boolean |  |  |  |  |
| IsRecurrence2 | Repeat | boolean |  |  |  |  |
| IsRecurrence2Exception | Is Exception | boolean |  |  |  |  |
| IsRecurrence2Exclusion | Historical Event, Not Following Recurrence | boolean |  |  |  |  |
| IsReminderSet | Reminder Set | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Location | Location | string |  | 255 |  |  |
| OwnerId | Assigned To ID | reference |  | 18 |  |  |
| Recurrence2PatternStartDate | Recurrence Pattern Start Date | datetime |  |  |  |  |
| Recurrence2PatternText | Recurrence Pattern | textarea |  | 512 |  |  |
| Recurrence2PatternTimeZone | Recurrence Pattern Time Zone Reference | string |  | 255 |  |  |
| Recurrence2PatternVersion | Pattern Version | picklist |  | 40 |  |  |
| RecurrenceActivityId | Recurrence Activity ID | reference |  | 18 |  |  |
| RecurrenceDayOfMonth | Recurrence Day of Month | int | 9 |  |  |  |
| RecurrenceDayOfWeekMask | Recurrence Day of Week Mask | int | 9 |  |  |  |
| RecurrenceEndDateOnly | Recurrence End | date |  |  |  |  |
| RecurrenceInstance | Recurrence Instance | picklist |  | 40 |  |  |
| RecurrenceInterval | Recurrence Interval | int | 9 |  |  |  |
| RecurrenceMonthOfYear | Recurrence Month of Year | picklist |  | 40 |  |  |
| RecurrenceStartDateTime | Recurrence Start | datetime |  |  |  |  |
| RecurrenceTimeZoneSidKey | Recurrence Time Zone | picklist |  | 40 |  |  |
| RecurrenceType | Recurrence Type | picklist |  | 40 |  |  |
| ReminderDateTime | Reminder Date/Time | datetime |  |  |  |  |
| ShowAs | Show Time As | picklist |  | 40 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Subject | Subject | combobox |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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
