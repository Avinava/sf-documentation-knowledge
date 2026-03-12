---
title: "TimeSlot"
domain: object-reference
topic: timeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.222Z
estimatedTokens: 1073
keywords: [TimeSlot, period, time, day, week, work, performed, Service, Salesforce, Scheduler, Workforce, Engagement, Operating, hours, consist]
---

# TimeSlot

> Represents a period of time on a specified day of the week during which
   work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. Operating
   hours consist of one or more time slots. This object is available in API version 38.0 and
  later.

# TimeSlot

Represents a period of time on a specified day of the week during which work can be performed in Field Service, Salesforce Scheduler, or Workforce Engagement. Operating hours consist of one or more time slots. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| DayOfWeek | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe day of the week when the time slot takes place. |
| EndTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time slot ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaxAppointments | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum number of appointments for a single time slot. Available in API version 47.0 and later. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe operating hours that the time slot belongs to. An operating hours’ time slots appear in the Operating Hours related list.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| StartTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time slot starts. |
| RecordSetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recordset filter criteria selected for the time slot.This is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| TimeSlotNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the time slot. The name is auto-populated to a day and time format—for example, Monday 9:00 AM - 10:00 PM—but you can manually update it if you wish. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of time slot. Possible values are Normal and Extended. You may choose to use Extended to represent overtime shifts. |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWork type group assigned to the time slot. Available in API version 47.0 and later.This is a relationship field.Relationship NameWorkTypeGroupRelationship TypeLookupRefers ToWorkTypeGroup |

## Usage

Operating hours are composed of time slots, which indicate the hours of operation for a particular day. After you create operating hours, create time slots for each day. For example, if the operating hours should be 8 AM to 5 PM Monday through Friday, create five time slots, one per day. To reflect breaks such as lunch hours, create multiple time slots in a day: for example, Monday 8:00 AM – 12:00 PM and Monday 1:00 PM – 5:00 PM.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

Time slots don’t come with any built-in rules, but you can create Apex triggers that limit time slot settings in your org. For example, you may want to restrict the start and end times on time slots to half-hour increments, or to prohibit end times later than 8 PM.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[TimeSlotChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm) (API version 54.0)

Change events are available for the object.

[TimeSlotHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm;) (API version 62.0)

History is available for tracked fields of the object.
