---
title: "CareEpisode"
domain: health-cloud-object-reference
topic: careepisode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.362Z
estimatedTokens: 1232
keywords: [CareEpisode, Records, interaction, patient, healthcare, provider, period, receives, services, provide, EpisodeOfCare, FHIR, resource, API, version]
---

# CareEpisode

> Records details of the interaction between a patient and a healthcare
         provider for the period during which the patient receives healthcare services from the
         provide. This object is based on the EpisodeOfCare FHIR resource. This object is available in
      API version 57.0 and later.

# CareEpisode

Records details of the interaction between a patient and a healthcare provider for the period during which the patient receives healthcare services from the provide. This object is based on the [EpisodeOfCare](https://www.hl7.org/fhir/episodeofcare.html#EpisodeOfCare) FHIR resource. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareCoordinatorId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care coordinator who orchestrates care for the patient during the episode of care.Relationship NameCareCoordinatorRefers ToHealthcarePractitionerFacilityHealthcareProvider |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the episode of care ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| PatientId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionThe patient that’s part of the episode of care.Relationship NamePatientRefers ToAccount |
| ResponsibleOrganizationId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization that’s responsible for managing the patient’s care during the episode of care.This field is a polymorphic relationship field.Relationship NameResponsibleOrganizationRefers ToAccountHealthcareProvider |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the episode of care started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the eipsode of care.Possible values are:ActiveCancelledEntered-in-ErrorFinishedOn HoldPlannedWait List |
| Type | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe type od te episode of care.Possible values are:cacp - Community-Based Aged Careda - Drug and Alcohol Rehabilitationdiab - Post-Coordinated Diabetes Programhacc - Home and Community Carepac - Post-Acute Care |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareEpisodeFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareEpisodeHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareEpisodeOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareEpisodeShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareEpisodeFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareEpisodeHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareEpisodeOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CareEpisodeShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
