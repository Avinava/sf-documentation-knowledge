---
title: "AssessmentQuestionSourceDoc"
domain: health-cloud-object-reference
topic: assessmentquestionsourcedoc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.833Z
estimatedTokens: 515
keywords: [AssessmentQuestionSourceDoc, assessment, questions, their, source, document, API, version, 61.0, later, Calls]
---

# AssessmentQuestionSourceDoc

> Represents assessment questions and their source document. This object is available in
      API version 61.0 and later.

# AssessmentQuestionSourceDoc

Represents assessment questions and their source document. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe content document that's the source of the assessment questions.This field is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentVersionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content version associated with the content document that's the source of the assessment questions.This field is a relationship field.Relationship NameContentVersionRelationship TypeLookupRefers ToContentVersion |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| QuestionCreationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the assessment questions are created from the source document.Possible values are:GenAI |
| QuestionReviewStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the review status of the assessment questions created from the source document.Possible values are:CompletedInProgressNotStarted |
