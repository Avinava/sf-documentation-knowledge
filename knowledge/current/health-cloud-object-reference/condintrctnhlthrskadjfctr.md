---
title: "CondIntrctnHlthRskAdjFctr"
domain: health-cloud-object-reference
topic: condintrctnhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.891Z
estimatedTokens: 1028
keywords: [CondIntrctnHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, interacting, conditions, they, diagnosed, status, their, benefits, eligibility]
---

# CondIntrctnHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on the set
         of interacting conditions they are diagnosed with and the status of their benefits
         eligibility. This object is available in API version 61.0 and later.

# CondIntrctnHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on the set of interacting conditions they are diagnosed with and the status of their benefits eligibility. This object is available in API version 61.0 and later.

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
| ConditionCodeList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the first set of condition codes for the condition interactions that the risk adjustment factors are defined for. |
| Institutional | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at a healthcare facility. |
| InteractingCondCodeList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the codes of the interacting conditions for the condition interactions that the risk adjustment factors are defined for. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the specified condition interactions and risk adjustment factor combinations are currently active.The default value is false. |
| IsDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the interaction is with a condition or a disability.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record in the system.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublishedYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year when the risk adjust factors were published. |
