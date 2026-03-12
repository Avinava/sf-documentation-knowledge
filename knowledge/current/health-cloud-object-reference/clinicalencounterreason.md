---
title: "ClinicalEncounterReason"
domain: health-cloud-object-reference
topic: clinicalencounterreason
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.307Z
estimatedTokens: 847
keywords: [ClinicalEncounterReason, reasons, why, encounter, child, ClinicalEncounter, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# ClinicalEncounterReason

> Represents the reasons for why the encounter was required. This object is a
      child object of ClinicalEncounter. This object is available in API version 51.0 and
    later.

# ClinicalEncounterReason

Represents the reasons for why the encounter was required. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent ClinicalEncounter record that this ClinicalEncounterReason record belongs to.Referenced ObjectsClinicalEncounter |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of this encounter reason. |
| ReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that indicates the reason why the encounter took place.Referenced ObjectsCodeSetBundle |
| ReasonReferenceId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the encounter.Referenced ObjectsHealthConditionCareObservationPatientMedicalProcedure |

## Usage

Once the reasons for the encounter is recorded in the ClinicalEncounterReason record using the ReasonCodeId and ReasonReferenceId fields, the parent ClinicalEncounter record is referenced using the ClinicalEncounterId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalEncounterReasonFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalEncounterReasonHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalEncounterReasonChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalEncounterReasonFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalEncounterReasonHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClinicalEncounterReasonChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
