---
title: "Holiday"
domain: object-reference
topic: holiday
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.066Z
estimatedTokens: 1131
keywords: [Holiday, period, time, customer, support, team, unavailable, Business, hours, escalation, rules, associated, suspended, any, holidays]
---

# Holiday

> Represents a period of time during which your customer support team is unavailable. Business hours and escalation rules associated with business hours are suspended
			during any holidays with which they are affiliated.

# Holiday

Represents a period of time during which your customer support team is unavailable. Business hours and escalation rules associated with business hours are suspended during any holidays with which they are affiliated.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can’t access this object.

All users, even those without the “View Setup and Configuration” user permission, can view holidays via the API.

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the Holiday IsAllDay flag is set to true (indicating that it is an all-day holiday), then the holiday due date information is contained in the ActivityDate field. This field is a date field with a timestamp that is always set to midnight in the Coordinated Universal Time (UTC) time zone. The timestamp is not relevant, and you should not attempt to alter it to account for any time zone differences. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the holiday. |
| EndTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end time of the holiday in minutes. |
| IsAllDay | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the duration of the holiday is all day (true) or not (false). |
| IsRecurrence | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the holiday is scheduled to repeat itself (true) or only occurs once (false). This is a read only field on update, but not on create. If this field value is true, then any recurrence fields associated with the given recurrence type must be populated. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the holiday. |
| NextOccurrenceDate | TypedatePropertiesFilter, Group, NillableDescriptionThe next date of the holiday. Applies to recurring holidays only. Available in API version 58.0 and later. To access this field, you must have Field Service enabled and the Field Service Standard permission.This field isn't sortable. To compare this date to other dates, you must parse the string into a date value to compare it to other dates. |
| RecurrenceDayOfMonth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day of the month on which the holiday repeats. |
| RecurrenceDayOfWeekMask | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day or days of the week on which the holiday repeats. This field contains a bitmask. For each day of the week, the values are as follows:Sunday = 1Monday = 2Tuesday = 4Wednesday = 8Thursday = 16Friday = 32Saturday = 64Multiple days are represented as the sum of their numerical values. For example, Tuesday and Thursday = 4 + 16 = 20. |
| RecurrenceEndDateOnly | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last date on which the holiday repeats. For multiday recurring events, this is the day on which the last occurrence starts. |
| RecurrenceInstance | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency of the recurring holiday. For example, 2nd or 3rd. |
| RecurrenceInterval | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval between recurring holidays. |
| RecurrenceMonthOfYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe month of the year on which the event repeats. |
| RecurrenceStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the recurring holiday begins. Must be a date and time before RecurrenceEndDateOnly. |
| RecurrenceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how often the holiday repeats. For example, daily, weekly, or every Nth month (where “Nth” is defined in RecurrenceInstance). |
| StartTimeInMinutes | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start time of the holiday in minutes. |

## Usage

Use this object to view and update holidays, which specify dates and times at which associated business hours and escalation rules are suspended.
