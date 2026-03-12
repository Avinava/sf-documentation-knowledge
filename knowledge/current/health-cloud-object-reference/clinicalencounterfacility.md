---
title: "ClinicalEncounterFacility"
domain: health-cloud-object-reference
topic: clinicalencounterfacility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.286Z
estimatedTokens: 1084
keywords: [ClinicalEncounterFacility, different, facilities, involved, encounter, time, spent, facilies, relevant, child, ClinicalEncounter, API, version, 51.0, later]
---

# ClinicalEncounterFacility

> Represents information about the different facilities involved in an encounter,
      the time spent at those facilies, and other relevant details. This is a child object of
      ClinicalEncounter. This object is available in API version 51.0 and later.

# ClinicalEncounterFacility

Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant details. This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent clinical encounter that the clinical encounter facility record is related to,Referenced ObjectsClinicalEncounter |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of time that the patient was present at the facility. |
| DurationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of time for the Duration field.Referenced ObjectsUnitOfMeasure |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the patient’s time at the facility during the encounter. |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe healthcare facility where the encounter occurred.Referenced ObjectsHealthcareFacility |
| FacilityTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the type of the facility, in the context of its physical structure.Referenced ObjectsCodeSetBundle |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time when the record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the ClinicalEncounterFacility record. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the patient’s time at the facility during the encounter. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the patient’s presence at the facility in the context of the patient’s encounter.Possible values are:ActiveCompletedPlannedReserved |

## Usage

Once the facility-related information is recorded in the ClinicalEncounterFacility record, the parent ClinicalEncounter record is referenced using the ClinicalEncounterId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalEncounterFacilityFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalEncounterFacilityHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalEncounterFacilityChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalEncounterFacilityFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalEncounterFacilityHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClinicalEncounterFacilityChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
