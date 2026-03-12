---
title: "ContactEncounterParticipant"
domain: health-cloud-object-reference
topic: contactencounterparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.874Z
estimatedTokens: 607
keywords: [ContactEncounterParticipant, person, present, contact, encounter, Calls]
---

# ContactEncounterParticipant

> Represents a person who was present during a contact
    encounter.

# ContactEncounterParticipant

Represents a person who was present during a contact encounter.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the contact encounter participant.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the contact encounter participant.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ContactEncounter__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contact encounter that this person was involved in. |
| Contact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA contact who was involved in the contact encounter. |
| EndTime__c | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contact encounter ended for this person. |
| Lead__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lead who was involved in the contact encounter. |
| StartTime__c | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contact encounter began for this person. |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionValue is one of the following, whichever is the most recent:Due date of the most recent event logged against the object.Due date of the most recently closed task associated with the object. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated unique ID for this record. |
| TransmissionMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the contact encounter participant acquired the disease or contracted it through transmission.Possible values are:AcquiredTransmitted |
| RiskLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the risk level of an individual for an infection based on their exposure to the contact encounter participant.Possible values are:HighRiskLowRisk |
