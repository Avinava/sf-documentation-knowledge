---
title: "ProgramEnrlEligibilityCrit"
domain: life-sciences-dev-guide
topic: programenrleligibilitycrit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.820Z
estimatedTokens: 527
keywords: [ProgramEnrlEligibilityCrit, junction, Program, Enrollment, Eligibility, Criteria, objects, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# ProgramEnrlEligibilityCrit

> Represents a junction between Program and Enrollment Eligibility Criteria
         objects. This object is available in API version 61.0 and later.

# ProgramEnrlEligibilityCrit

Represents a junction between Program and Enrollment Eligibility Criteria objects. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| EnrollmentEligibilityCritId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe enrollment eligibility criteria associated with the program enrollment eligibility criteria.This field is a relationship field.Relationship NameEnrollmentEligibilityCritRefers ToEnrollmentEligibilityCriteria |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an enrollment eligibility criterion is mandatory (true) or optional (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the program enrollment eligibility criteria. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe program associated with the program enrollment eligibility criteria.This field is a relationship field.Relationship NameProgramRelationship TypeMaster-detailRefers ToProgram (the master object) |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the program enrollment eligibility criteria. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of enrollment eligibility criteria. |
