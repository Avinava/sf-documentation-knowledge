---
title: "HierCondHlthRskAdjFctr"
domain: health-cloud-object-reference
topic: hiercondhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.338Z
estimatedTokens: 1044
keywords: [HierCondHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, Hierarchical, Condition, Category, HCC, codes, apply, status, their]
---

# HierCondHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on the set
         of Hierarchical Condition Category (HCC) codes that apply to them and the status of their
         benefits eligibility. This object is available in API version 61.0 and later.

# HierCondHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on the set of Hierarchical Condition Category (HCC) codes that apply to them and the status of their benefits eligibility. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CmnyFullBnftDualDisabled | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has full benefits from both Medicare and Medicaid, and is enrolled in Medicare because of a disability. |
| CmnyPartialBenefitDualAged | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has partial benefits from both Medicare and Medicaid, and is enrolled in Medicare because of their age. |
| CmnyPartialBnftDualDsbl | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has partial benefits from both Medicare and Medicaid, and is enrolled in Medicare because of a disability. |
| Community | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home. |
| CommunityFullBnftDualAged | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has full benefits from both Medicare and Medicaid, and is enrolled in Medicare because of their age. |
| CommunityNonDualAged | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, is covered only by Medicare, and is enrolled in Medicare because of their age. |
| CommunityNonDualDisabled | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, is covered only by Medicare, and is enrolled in Medicare because of a disability. |
| Condition | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the condition for which the HCC code is defined. |
| ConditionCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the broader category that the specified condition belongs to. For instance, Respiratory Ailment. |
| HierCondCategoryCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record ID of the HCC code.This field is a relationship field.Relationship NameHierCondCategoryCodeRelationship TypeLookupRefers ToCodeSet |
| Institutional | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at a healthcare facility. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the risk adjustment factors defined in the record are active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |
| OverriddenCodes | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe list of HCC codes overridden by the specified HCC code. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record in the system.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublishedYear | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe year when the specified risk adjustment factors were published. |
