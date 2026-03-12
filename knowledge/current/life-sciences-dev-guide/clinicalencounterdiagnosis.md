---
title: "ClinicalEncounterDiagnosis"
domain: life-sciences-dev-guide
topic: clinicalencounterdiagnosis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.124Z
estimatedTokens: 872
keywords: [ClinicalEncounterDiagnosis, diagnosis, clinical, encounter, child, ClinicalEncounter, API, version, 51.0, later, Calls, Usage, Associated, Objects]
---

# ClinicalEncounterDiagnosis

> Represents a diagnosis related to a clinical encounter. This object is a child
      object of ClinicalEncounter. This object is available in API version 51.0 and later.

# ClinicalEncounterDiagnosis

Represents a diagnosis related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalEncounterId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the parent clinical encounter record the diagnosis belongs to.Referenced ObjectsClinicalEncounter |
| DiagnosisId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReferences the condition or procedure relevant to the encounter.Referenced ObjectsHealthConditionPatientMedicalProcedure |
| DiagnosisRank | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the rank of a particular diagnosis among multiple diagnoses for an encounter. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time whenthe record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time when the record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system-generated name for the ClinicalEncounterDiagnosis record. |
| UsageTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the role the diagnosis plays in context of the encounter.Referenced ObjectsCodeSetBundle |

## Usage

Once the diagnosis-related information is recorded in the ClinicalEncounterDiagnosis record, the parent ClinicalEncounter record is referenced using the ClinicalEncounterId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ClinicalEncounterDiagnosisChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[ClinicalEncounterDiagnosisFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalEncounterDiagnosisHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClinicalEncounterDiagnosisChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ClinicalEncounterDiagnosisFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalEncounterDiagnosisHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
