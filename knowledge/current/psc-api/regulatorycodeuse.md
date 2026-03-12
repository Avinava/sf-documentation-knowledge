---
title: "RegulatoryCodeUse"
domain: psc-api
topic: regulatorycodeuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.475Z
estimatedTokens: 338
keywords: [RegulatoryCodeUse, junction, assessment, questions, regulatory, code, associated, API, version, 55.0, later, Calls]
---

# RegulatoryCodeUse

> Represents a junction between a set of assessment questions and the
         regulatory code associated with them. This object is available in API version 55.0 and
      later.

# RegulatoryCodeUse

Represents a junction between a set of assessment questions and the regulatory code associated with them. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the regulatory code use record. |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record that's related to the regulatory code use record.This is a relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToAssessmentQuestionVersion |
| RegulatoryCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe regulatory code that’s associated with the assessment question version.This is a relationship field.Relationship NameRegulatoryCodeRelationship TypeLookupRefers ToRegulatoryCode |
