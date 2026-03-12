---
title: "ApplicationFormEvaluation"
domain: financial-services-cloud-object-reference
topic: applicationformevaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.415Z
estimatedTokens: 611
keywords: [ApplicationFormEvaluation, evaluation, performed, application, form, loan, underwriter, API, version, 61.0, later, Digital, Lending, permission, Calls]
---

# ApplicationFormEvaluation

> Represents the details of the evaluation performed for an application form.
         For example, the details of the evaluation of a loan application form by an
         underwriter. This object is available in API version 61.0 and later. Available with
      Digital Lending permission set.

# ApplicationFormEvaluation

Represents the details of the evaluation performed for an application form. For example, the details of the evaluation of a loan application form by an underwriter. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe application form that was evaluated.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| ApplicationFormProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product in the application form that's being evaluated.This field is a relationship field.Relationship NameApplicationFormProductRefers ToApplicationFormProduct |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe evaluator's comments to the evaluation. |
| Date | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the evaluation was performed. |
| Decision | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifices the decision of the evaluation.Possible values are:ApprovedOn HoldRejected |
| EvaluatorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User or Group who evaluated the application form.This field is a relationship field.Relationship NameEvaluatorRefers ToUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the application form evaluation record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
