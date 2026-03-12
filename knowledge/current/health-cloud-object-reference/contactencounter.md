---
title: "ContactEncounter"
domain: health-cloud-object-reference
topic: contactencounter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.866Z
estimatedTokens: 769
keywords: [ContactEncounter, period, time, two, people, were, close, proximity, Calls]
---

# ContactEncounter

> Represents a period of time during which two or more people were in close
      proximity to each other.

# ContactEncounter

Represents a period of time during which two or more people were in close proximity to each other.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Actual_Participant_Count__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe confirmed number of people who were present during the encounter. |
| Description__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionText describing the encounter. |
| DiseaseInvestigationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe disease investigation associated with the contact encounter.This field is a relationship field.Relationship NameDiseaseInvestigationRefers ToDiseaseInvestigation |
| EndTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the encounter ended. |
| EstimatedParticipantCount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated number of people who were present during the encounter. |
| ExposureSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the source of the exposure.Possible values are:Animal ContactEnvironment - AirEnvironment - ChemicalEnvironment - WaterEventFacilityPerson Contact |
| ExposureSourceDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the exposure source. |
| ExposureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of disease exposure the patient encountered.Possible values are:Direct ContactIngestionInhalation |
| Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the encounter took place. |
| StartTime__c | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the encounter began. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is one of the following, whichever is the most recent:Due date of the most recent event logged against the object.Due date of the most recently closed task associated with the object. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of this contact encounter. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
