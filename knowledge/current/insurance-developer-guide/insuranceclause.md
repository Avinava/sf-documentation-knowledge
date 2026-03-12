---
title: "InsuranceClause"
domain: insurance-developer-guide
topic: insuranceclause
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.129Z
estimatedTokens: 617
keywords: [InsuranceClause, terms, conditions, associated, product, Avocation, Clause, excludes, coverage, insured, engages, risky, hobby, API, version]
---

# InsuranceClause

> Defines the terms and conditions associated with a product. For example, an
         Avocation Clause excludes coverage if the insured engages in a risky hobby. This
      object is available in API version 65.0 and later.

# InsuranceClause

Defines the terms and conditions associated with a product. For example, an Avocation Clause excludes coverage if the insured engages in a risky hobby. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique name of the insurance clause. |
| Code | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique code that represents the insurance clause. |
| ContentText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe template, containing variables, used to generate the clause statement. |
| CreationMethod | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies how the insurance clause is added. Possible values are:AutoAddedManual |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the insurance clause becomes active. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when insurance clause becomes inactive. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the insurance clause. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of insurance clause. Possible values are:ClauseExclusion |
| Variables | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe variables (tokens) in the ContentTextthat are replaced with values when generating the clause statement. |
