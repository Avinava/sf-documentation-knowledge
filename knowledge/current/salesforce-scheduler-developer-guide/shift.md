---
title: "Shift"
domain: salesforce-scheduler-developer-guide
topic: shift
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.825Z
estimatedTokens: 2357
keywords: [Shift, service, resource, scheduling, API, version, 46.0, later, Calls, Special, Access, Rules, Usage]
---

# Shift

> Represents a shift for service resource scheduling. This object
      is available in API version 46.0 and later.

# Shift

Represents a shift for service resource scheduling. This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler is enabled. Users have Shift permission.

## Fields

| Field | Details |
| --- | --- |
| AppointmentCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field. Available in API version 61.0 and later.Relationship NameShiftAppointmentCategoryRelationship TypeLookupRefers ToAppointmentCategory |
| BackgroundColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSets a background color for shifts shown in the UI. Use a 3- or 6-digit hexadecimal format. For example, #FF00FF. Available in API version 55.0 and later. |
| EndTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the shift ends. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label that a shift is given. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed a related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the current user last viewed this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shift.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecurrenceEndDate | TypedatePropertiesCreate, Group, Nillable, Sort, UpdateDescriptionThe date when the recurrence period ends. The date must be after the Recurrence Start Date. The value for this field is retrieved from the pattern defined in the RecurrencePattern field. You can define the end date by using the COUNT or UNTIL parameter in the RecurrencePattern field. If you specify a value in this field and define a recurrence pattern, Salesforce Scheduler overrides the value with the end date in the recurrence pattern.The recurrence period is limited to 180 days.This field is available in API version 56.0 and later. |
| RecurrencePattern | TypestringPropertiesCreate, Group, Nillable, Sort, UpdateDescriptionThe RRULE that describes the recurrence pattern for recurring shifts. Supports a subset of the RFC 5545 standard for internet calendaring and scheduling. See the Salesforce Scheduler Recurring Shifts section in this topic for usage examples.The period for the recurrence pattern is limited to 180 days.This field is available in API version 56.0 and later. |
| RecurrenceStartDate | TypedatePropertiesCreate, Group, Nillable, Sort, UpdateDescriptionThe date when the recurrence period begins. The date must be before the Recurrence End Date. The value for this field is retrieved from the StartTime field. Don’t modify the value for this field.This field is available in API version 56.0 and later. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service resource the shift belongs to. Available in API versions 47.0 and later.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service territory the shift belongs to. Available in API versions 47.0 and later.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| ShiftNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number automatically given to the shift upon creation. |
| StartTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time that the shift starts. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDescribes the status of the shift. Users can create custom values.Possible values are:ConfirmedFixedPublishedTentativeThe default value is 'Tentative'. |
| StatusCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the status of the shift using static values. This field is derived from Status using the mapping defined in setup.Possible values are:ConfirmedPublishedTentative |
| TimeSlotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of time slot for the shift. The same setup values as the TimeSlot field in the OperatingHours object.Possible values are:ExtendedNormal (default value)The default value is 'Normal'. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of shift.Possible values are:RecurringRegularThe default value is Regular.This field is available in API version 56.0 and later. |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work type group the shift belongs to. Available in API versions 54.0 and later.This is a relationship field.Relationship NameWorkTypeGroupRelationship TypeLookupRefers ToWorkTypeGroup |

## Usage

**Salesforce Scheduler Recurring Shifts**

Use the RecurrencePattern field to specify the recurrence pattern for recurring shifts. These recurrence patterns, called reference rules or "RRULES", support a subset of the RFC 5545 standards. This table includes common RRULE examples.

| Recurrence Pattern | RRULE Example |
| --- | --- |
| Every day for five days | RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5 |
| Every two weeks on Monday and Friday for 10 occurrences | RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,FR;COUNT=10 |
| Monthly on the first day of the month until August 1, 2022 | RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1;UNTIL=20220801T100000Z |

The RRULE defined by RecurrencePattern supports a subset of the RFC 5545 standard for internet calendaring and scheduling. Supported RRULE parts include FREQ, BYMONTH, BYMONTHDAY, BYDAY, BYSETPOS, INTERVAL, UNTIL, and COUNT.

When the event record is saved, the RRULE might be modified to follow the required format:

-   The RRULE parts are placed in the following order: FREQ, BYMONTH, BYMONTHDAY, BYDAY, BYSETPOS, INTERVAL, UNTIL, and COUNT.
-   Any missing default values are inserted. For example, if the RRULE doesn't include INTERVAL, then INTERVAL=1 is added.
-   The RRULE is prefaced with RRULE: if that preface is missing.

| RRULE Part | Supported RFC 5545 Implementation |
| --- | --- |
| FREQ | Required. Indicates the type of recurrence rule. Allowed values are:DAILY— supported parts include FREQ, INTERVAL, UNTIL, and COUNT.WEEKLY—supported parts include INTERVAL, UNTIL, COUNT, and BYDAY. BYDAY is required, but can't be preceded by a number.For example, to indicate weekly on Tuesday and Thursday until September 1 2022, use RRULE:FREQ=WEEKLY;UNTIL=20220901T000000Z;BYDAY=TU,THMONTHLY—supported patterns include:BYMONTHDAYFor example, to indicate monthly on the third day of the month use: RRULE:FREQ=MONTHLY;BYMONTHDAY=3BYDAY and BYSETPOSFor example, to indicate the last weekday of the month, use RRULE:FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-1BYDAY, where the BYDAY values are specified with a numeric valueFor example, to indicate monthly on the first Friday for 10 occurrences, use RRULE:FREQ=MONTHLY;COUNT=10;BYDAY=1FR |
| BYMONTH | The month. Valid values are 1 to 12. |
| BYMONTHDAY | The day of the month. Valid values are 1 to 31. If BYMONTHDAY is 31 and the month has fewer than 31 days, the event is created on the last day of the month. |
| BYDAY | A comma-separated list of days of the week. Valid values are SU, MO, TU, WE, TH, FR, SA. For RRULES with monthly frequency, BYDAY must be one of:a single dayweekend daysweek daysevery day of the weekEach BYDAY value can be preceded by an integer that indicates the nth occurrence of a specific day within the monthly RRULE. Allowed values are -1, 1, 2, 3, and 4. You can't use different numbers in the BYDAY values. For example, this RRULE isn’t supported: RRULE:FREQ=MONTHLY;INTERVAL=2;COUNT=10;BYDAY=1SU,-1SU If BYDAY values are prefaced with a number, the RRULE can't include BYSETPOS. |
| BYSETPOS | A comma-separated list of values that correspond to the nth occurrence within the set of recurrence instances specified by the rule. Valid values are -1, 1, 2, 3, or 4. Default value is 1.For example, to indicate the last weekday of the month, use: RRULE:FREQ=MONTHLY;BYDAY=MO,TU,WE,TH,FR;BYSETPOS=-1 |
| INTERVAL | The repetition interval. Valid values are:an integer between 1 and 31 if FREQ=DAILYan integer between 1 and 26 if FREQ=WEEKLYan integer between 1 and 12 if FREQ=MONTHLYDefault value is 1. |
| UNTIL | Specifies the datetime in UTC format when the recurrence rule stops. The supported format is yyyyMMddTHHmmssZ, for example: 20210419T083000Z.An RRULE can't contain both UNTIL and COUNT. A recurring event without either UNTIL or COUNT leads to an error. |
| COUNT | The number of occurrences. Allowed values are 1–120.An RRULE can't contain both UNTIL and COUNT. A recurring event without either UNTIL or COUNT leads to an error. |
