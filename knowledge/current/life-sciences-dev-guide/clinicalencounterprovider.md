---
title: "ClinicalEncounterProvider"
domain: life-sciences-dev-guide
topic: clinicalencounterprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.148Z
estimatedTokens: 992
keywords: [ClinicalEncounterProvider, providers, involved, encounter, child, ClinicalEncounter, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# ClinicalEncounterProvider

> Represents the providers involved in an encounter. This object is a child
      object of ClinicalEncounter. This object is available in API version 51.0 and later.

# ClinicalEncounterProvider

Represents the providers involved in an encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent clinical encounter that the ClinicalEncounterProvider record belongs to.Referenced ObjectsClinicalEncounter. |
| Duration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of the performer's participation in the encounter. |
| DurationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measurement for the duration field. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the provider’s participation in the encounter ended. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the ClinicalEncounterProvider record. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe person who is performing care in the encounter.Referenced ObjectsHealthcareProvider |
| PractitionerTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the role of the practitioner in the encounter. For example, admitter, attender discharger, or escort.Referenced ObjectsCodeSetBundle |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the provider’s participation in the encounter started. |

## Usage

Once the provider-related information is recorded in the ClinicalEncounterProvider record, the parent ClinicalEncounter record is referenced using the ClinicalEncounterId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalEncounterProviderFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalEncounterProviderHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalEncounterProviderChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalEncounterProviderFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalEncounterProviderHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ClinicalEncounterProviderChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
