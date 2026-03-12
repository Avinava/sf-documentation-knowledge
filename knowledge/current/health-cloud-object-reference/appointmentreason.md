---
title: "AppointmentReason"
domain: health-cloud-object-reference
topic: appointmentreason
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:34.820Z
estimatedTokens: 1242
keywords: [AppointmentReason, patient’s, reason, making, appointment, self-scheduling, Intelligent, Management, API, version, 53.0, later, Calls, Associated, Objects]
---

# AppointmentReason

> Represents a patient’s reason for making an appointment. Used for
         self-scheduling in Intelligent Appointment Management. This object is available in API
      version 53.0 and later.

# AppointmentReason

Represents a patient’s reason for making an appointment. Used for self-scheduling in Intelligent Appointment Management. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AppointmentReason | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe patient's reason for making the appointment. Not the same as visit type. |
| AppointmentReasonImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionImage related to the visit reason, such as a stethoscope or a splint.This field is a relationship field.Relationship NameAppointmentReasonImageRelationship TypeLookupRefers ToContentDocument |
| DefaultImage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGeneric image for all visit reasons. A custom image overrides the default image if present. |
| DefaultWorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the default appointment parameters for a new patient.This field is a relationship field.Relationship NameDefaultWorkTypeRelationship TypeLookupRefers ToWorkType |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetailed information about the patient's reason for making the appointment. |
| EstablishedWorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies appointment parameters for an established patient (has been seen within the last three years) if different from the default work type.This field is a relationship field.Relationship NameEstablishedWorkTypeRelationship TypeLookupRefers ToWorkType |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the appointment reason is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when this record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Appointment Reason record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ResourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of resource associated with the appointment reason.Possible values are:AssetProvider |
| Visibility | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates if this Appointment Reason is available for patients to self-schedule.Possible values are:PATIENT_SELF_SCHEDULING |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AppointmentReasonFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AppointmentReasonHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AppointmentReasonOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AppointmentReasonShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AppointmentReasonFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- AppointmentReasonHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- AppointmentReasonOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AppointmentReasonShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
