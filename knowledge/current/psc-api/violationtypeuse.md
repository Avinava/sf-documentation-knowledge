---
title: "ViolationTypeUse"
domain: psc-api
topic: violationtypeuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:07.858Z
estimatedTokens: 331
keywords: [ViolationTypeUse, junction, assessment, questions, violation, API, 55.0]
---

> Represents a junction between a set of assessment questions and the violation
         type associated with them. This object is available in API version 55.0 and later.

# ViolationTypeUse

Represents a junction between a set of assessment questions and the violation type associated with them. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the violation type use record. |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record associated with violation type use.This is a relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToAssessmentQuestionVersion |
| ViolationTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe violation type associated with the assessment question version.This is a relationship field.Relationship NameViolationTypeRelationship TypeLookupRefers ToViolationType |
