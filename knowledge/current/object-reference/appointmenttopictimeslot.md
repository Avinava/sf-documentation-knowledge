---
title: "AppointmentTopicTimeSlot"
domain: object-reference
topic: appointmenttopictimeslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.723Z
estimatedTokens: 1024
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

[AppointmentTopicTimeSlotChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AppointmentTopicTimeSlotFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AppointmentTopicTimeSlotHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AppointmentTopicTimeSlotOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AppointmentTopicTimeSlotShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AppointmentTopicTimeSlotChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AppointmentTopicTimeSlotFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- AppointmentTopicTimeSlotHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AppointmentTopicTimeSlotOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AppointmentTopicTimeSlotShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
