---
title: "PgmBasedHlthRskAdjFctr"
domain: health-cloud-object-reference
topic: pgmbasedhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.819Z
estimatedTokens: 1015
keywords: [PgmBasedHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, their, eligibility, certain, benefits, programs, instance, Medicaid, API]
---

# PgmBasedHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on their
         eligibility for certain benefits programs. For instance, Medicaid in the US. This
      object is available in API version 61.0 and later.

# PgmBasedHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on their eligibility for certain benefits programs. For instance, Medicaid in the US. This object is available in API version 61.0 and later.

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
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the gender of the patient. |
| Institutional | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at a healthcare facility. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the risk adjustment factors defined in the record are active.The default value is false. |
| IsDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the patient has a disability.The default value is false. |
| IsOriginallyDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that patient was originally disabled.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record in the system.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of program that the risk adjustment factors are defined for. |
| PublishedYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year when the risk adjustment factors were published. |
