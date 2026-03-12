---
title: "ApplicationFormTerm"
domain: financial-services-cloud-object-reference
topic: applicationformterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.487Z
estimatedTokens: 600
keywords: [ApplicationFormTerm, terms, associated, application, form, loan, lease, API, version, 62.0, later, Digital, Lending, permission, Calls]
---

# ApplicationFormTerm

> Represents the terms associated with an application form for a loan or a
         lease. This object is available in API version 62.0 and later. Available with Digital
      Lending permission set.

# ApplicationFormTerm

Represents the terms associated with an application form for a loan or a lease. This object is available in API version 62.0 and later. Available with Digital Lending permission set.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA form that captures the applicant requirements for a financial product application.This field is a relationship field.Relationship NameApplicationFormRelationship TypeMaster-detailRefers ToApplicationForm (the master object) |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date till which a term is related to an application form. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which a term is related to an application form. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application form term is active (true), or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the associated location was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the application form term. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product or proposal related to an application form term.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToApplicationFormProduct, ApplicationFormProductProposal |
| TermDetail | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA detailed description about the term related to an application form that's referenced during the decisioning process. |
| TermId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA term related to an application form that represents conditions offered to the customer.This field is a relationship field.Relationship NameTermRefers ToTerm |
