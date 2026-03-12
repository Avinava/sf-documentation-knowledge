---
title: "CareProgramAssistance"
domain: life-sciences-dev-guide
topic: careprogramassistance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.345Z
estimatedTokens: 419
keywords: [CareProgramAssistance, junction, Care, Program, objects, API, version, 61.0, later, Calls]
---

# CareProgramAssistance

> Represents a junction between Care Program and Program objects. This
      object is available in API version 61.0 and later.

# CareProgramAssistance

Represents a junction between Care Program and Program objects. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe care program associated with the care program assistance.This field is a relationship field.Relationship NameCareProgramRelationship TypeMaster-detailRefers ToCareProgram (the master object) |
| CareProgramProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program product associated with the care program assistance.This field is a relationship field.Relationship NameCareProgramProductRefers ToCareProgramProduct |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care program assistance. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe program associated with the care program assistance.This field is a relationship field.Relationship NameProgramRefers ToProgram |
