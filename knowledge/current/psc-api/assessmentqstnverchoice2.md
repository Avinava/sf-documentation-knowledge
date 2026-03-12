---
title: "AssessmentQstnVerChoice2"
domain: psc-api
topic: assessmentqstnverchoice2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.984Z
estimatedTokens: 614
keywords: [AssessmentQstnVerChoice2, choice, user, select, assessment, question, version, API, 63.0, later, Calls]
---

# AssessmentQstnVerChoice2

> Represents a choice a user can select for an assessment question
         version. This object is available in API version 63.0 and later.

# AssessmentQstnVerChoice2

Represents a choice a user can select for an assessment question version. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Supported Calls

Only users with the Education Cloud Full Access permission set can access this object.

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment question version related to the assessment question version choice.This field is a relationship field.Relationship NameAssessmentQuestionVersionRelationship TypeMaster-detailRefers ToAssessmentQuestionVersion (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the assessment question version choice.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the question choices is displayed for an assessment question version. |
| Icon | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the icon presented as a question choice when the assessment question is of the icon type. |
| Key | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA unique code or identifier for a question choice that's mapped to an assessment question version. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the assessment question version choice. |
| UniqueIndex | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique index for the AssessmentQuestionVersionId and Key pair.This field is a calculated field. |
