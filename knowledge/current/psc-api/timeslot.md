---
title: "TimeSlot"
domain: psc-api
topic: timeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.187Z
estimatedTokens: 1026
keywords: [TimeSlot, range, time, day, week, provider, practitioner, offers, service, Operating, hours, consist, slots, Calls, Special]
---

# TimeSlot

> Represents a range of time on a specified day of the week during which
   a provider or practitioner offers service. Operating hours consist of one or more time slots.
   Operating hours consist of one or more time slots.

# TimeSlot

Represents a range of time on a specified day of the week during which a provider or practitioner offers service. Operating hours consist of one or more time slots. Operating hours consist of one or more time slots.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field Name | Details |
| --- | --- |
| DayOfWeek | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe day of the week when the time slot takes place. |
| EndTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time slot ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe operating hours that the time slot belongs to. An operating hours’ time slots appear in the Operating Hours related list.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| StartTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time when the time slot starts. |
| TimeSlotNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the time slot. The name is auto-populated to a day and time format—for example, Monday 9:00 AM - 10:00 PM—but you can manually update it if you wish. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of time slot. Possible values are Normal and Extended. You may choose to use Extended to represent overtime shifts. |

## Usage

Operating hours are composed of time slots, which indicate the hours of operation for a particular day. After you create operating hours, create time slots for each day. For example, if the operating hours should be 8 AM to 5 PM Monday through Friday, create five time slots, one per day. To reflect breaks such as lunch hours, create multiple time slots in a day: for example, Monday 8:00 AM – 12:00 PM and Monday 1:00 PM – 5:00 PM.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=psc_api)

#### Tip

Time slots don’t come with any built-in rules, but you can create Apex triggers that limit time slot settings in your org. For example, you may want to restrict the start and end times on time slots to half-hour increments, or to prohibit end times later than 8 PM.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TimeSlotChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- TimeSlotChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
