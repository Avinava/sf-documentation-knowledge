---
title: "TimeSlot"
domain: automotive-cloud
topic: timeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.589Z
estimatedTokens: 731
keywords: [TimeSlot, period, time, day, week, appointment, scheduled, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# TimeSlot

> Represents a period of time on a specified day of the week during which an
         appointment can be scheduled. This object is available in API version 58.0 and
      later.

# TimeSlot

Represents a period of time on a specified day of the week during which an appointment can be scheduled. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| DayOfWeek | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe day of the week when the time slot takes place.Possible values are:FridayMondaySaturdaySundayThursdayTuesdayWednesdayThe default value is Sunday. |
| EndTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time slot ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| MaxAppointments | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum number of appointments for a single time slot. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe operating hours that the time slot belongs to. An operating hours’ time slots appear in the Operating Hours related list.This field is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| StartTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time slot starts. |
| TimeSlotNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the time slot. The name is auto-populated to a day and time format—for example, Monday 9:00 AM - 10:00 PM—but you can manually update it. |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWork type group assigned to the time slot.This field is a relationship field.Relationship NameWorkTypeGroupRelationship TypeLookupRefers ToWorkTypeGroup |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TimeSlotChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[TimeSlotHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
