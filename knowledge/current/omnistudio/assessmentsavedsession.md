---
title: "AssessmentSavedSession"
domain: omnistudio
topic: assessmentsavedsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.975Z
estimatedTokens: 308
keywords: [AssessmentSavedSession, session, assessment, that's, saved, resume, later, API, version, 62.0, Calls]
---

# AssessmentSavedSession

> Represents a session of an assessment that's saved to resume for later.
      This object is available in API version 62.0 and later.

# AssessmentSavedSession

Represents a session of an assessment that's saved to resume for later. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe assessment record for which the session is saved.This field is a relationship field.Relationship NameAssessmentRelationship TypeMaster-detailRefers ToAssessment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the assessment saved session record. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the use case of the saved assessment session.Possible values are:HealthCloud |
