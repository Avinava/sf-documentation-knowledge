---
title: "ApptReasonEngmtChannelType"
domain: health-cloud-object-reference
topic: apptreasonengmtchanneltype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.826Z
estimatedTokens: 791
keywords: [ApptReasonEngmtChannelType, engagement, channel, AppointmentReason, Possible, channels, video, phone, person, appointment, reasons, annual, physical, fever, therapy]
---

# ApptReasonEngmtChannelType

> Represents an available engagement channel for a given AppointmentReason.
         Possible engagement channels could be video, phone, or in person. Possible appointment
         reasons could be annual physical, fever, or physical therapy. This object is available
      in API version 56.0 and later.

# ApptReasonEngmtChannelType

Represents an available engagement channel for a given AppointmentReason. Possible engagement channels could be video, phone, or in person. Possible appointment reasons could be annual physical, fever, or physical therapy. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentReasonId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe patient's reason for making this appointment.This field is a relationship field.Relationship NameAppointmentReasonRelationship TypeLookupRefers ToAppointmentReason |
| DefaultWorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe work type that defines the default parameters that apply to a new patient. This field is a relationship field.Relationship NameDefaultWorkTypeRelationship TypeLookupRefers ToWorkType |
| EngagementChannelTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe channel that the patient can access related to the appointment reason.This field is a relationship field.Relationship NameEngagementChannelTypeRelationship TypeLookupRefers ToEngagementChannelType |
| EstablishedWorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type that defines the parameters that apply to an established patient, if different from the default work type.This field is a relationship field.Relationship NameEstablishedWorkTypeRelationship TypeLookupRefers ToWorkType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ApptReasonEngmtChannelType record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApptReasonEngmtChannelTypeFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ApptReasonEngmtChannelTypeHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ApptReasonEngmtChannelTypeFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ApptReasonEngmtChannelTypeHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
