---
title: "PositionQualification"
domain: psc-api
topic: positionqualification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.229Z
estimatedTokens: 521
keywords: [PositionQualification, position-based, qualification, Communication, Skills, Program, Management, Analyst, position, API, version, 64.0, later, Calls, Special]
---

# PositionQualification

> Represents a position-based qualification. For example, Communication Skills
         for a Program and Management Analyst position. This object is available in API version
      64.0 and later.

# PositionQualification

Represents a position-based qualification. For example, Communication Skills for a Program and Management Analyst position. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist Access |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the position qualification. |
| PositionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The position that's related to the position qualification.This field is a relationship field.Relationship NamePositionRelationship TypeMaster-detailRefers ToPosition (the master object) |
| QualificationReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. A lookup to the record that confirms the qualification.This field is a polymorphic relationship field.Relationship NameQualificationReferenceRecordRefers ToCompetency, Certification, Examination, Education, Disability |
