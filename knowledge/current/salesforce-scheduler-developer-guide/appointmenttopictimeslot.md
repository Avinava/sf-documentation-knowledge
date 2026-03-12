---
title: "AppointmentTopicTimeSlot"
domain: salesforce-scheduler-developer-guide
topic: appointmenttopictimeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.674Z
estimatedTokens: 586
keywords: [AppointmentTopicTimeSlot, lookup, work, group, time, slot, API, version, 52.0, later, Calls, Associated, Objects]
---

# AppointmentTopicTimeSlot

> Represents a lookup to a work type or a work type group for a time
         slot This object is available in API version 52.0 and later.

# AppointmentTopicTimeSlot

Represents a lookup to a work type or a work type group for a time slot This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentTopicTimeSlotKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionNon-editable validating field used to ensure no two rows have the same time slot and work type or work type group values in an instance. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName or ID of the AppointmentTopicTimeSlot object. |
| OperatingHoursId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe operating hours that contain the time slot.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| TimeSlotId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the time slot.This is a relationship field.Relationship NameTimeSlotRelationship TypeLookupRefers ToTimeSlot |
| WorkTypeGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type group associated with this time slot.This is a relationship field.Relationship NameWorkTypeGroupRelationship TypeLookupRefers ToWorkTypeGroup |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type associated with this time slot.This is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

AppointmentTopicTimeSlotChangeEvent

Change events are available for the object.

AppointmentTopicTimeSlotFeed

Feed tracking is available for the object.

AppointmentTopicTimeSlotHistory

History is available for tracked fields of the object.

AppointmentTopicTimeSlotOwnerSharingRule

Sharing rules are available for the object.

AppointmentTopicTimeSlotShare

Sharing is available for the object.
