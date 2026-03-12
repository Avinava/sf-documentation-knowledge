---
title: "ScheduleBrdcstApptResource"
domain: health-cloud-object-reference
topic: schedulebrdcstapptresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.977Z
estimatedTokens: 1027
keywords: [ScheduleBrdcstApptResource, junction, Schedule, Broadcast, Appointment, Service, Resource, resources, whom, sent, API, version, 60.0, later, Calls]
---

# ScheduleBrdcstApptResource

> Represents a junction between a Schedule Broadcast Appointment and a Service
         Resource. This object represents the resources to whom a schedule broadcast is sent.
      This object is available in API version 60.0 and later.

# ScheduleBrdcstApptResource

Represents a junction between a Schedule Broadcast Appointment and a Service Resource. This object represents the resources to whom a schedule broadcast is sent. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the appointment that's broadcasted to the resource.Possible values are:AcceptedAssignedExpiredRejectedUnassignedThe default value is Unassigned. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ResourceReferenceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe resource to whom the schedule broadcast appointment is sent.This field is a polymorphic relationship field.Relationship NameResourceReferenceRelationship TypeLookupRefers ToServiceResource |
| ScheduleBroadcastAppointmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe schedule broadcast appointment associated with the schedule broadcast appointment resource.This field is a relationship field.Relationship NameScheduleBroadcastAppointmentRelationship TypeLookupRefers ToScheduleBroadcastAppointment |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ScheduleBrdcstApptResourceChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ScheduleBrdcstApptResourceFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ScheduleBrdcstApptResourceHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ScheduleBrdcstApptResourceShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ScheduleBrdcstApptResourceChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ScheduleBrdcstApptResourceFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ScheduleBrdcstApptResourceHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ScheduleBrdcstApptResourceShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
