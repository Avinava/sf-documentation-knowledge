---
title: "AgeBandHlthRskAdjFctr"
domain: health-cloud-object-reference
topic: agebandhlthrskadjfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.994Z
estimatedTokens: 989
keywords: [AgeBandHlthRskAdjFctr, Stores, risk, adjustment, factor, patients, members, age, band, they’re, part, status, their, benefits, eligibility]
---

# AgeBandHlthRskAdjFctr

> Stores the risk adjustment factor for patients and members based on the age
         band that they’re a part of and the status of their benefits eligibility. This object
      is available in API version 61.0 and later.

# AgeBandHlthRskAdjFctr

Stores the risk adjustment factor for patients and members based on the age band that they’re a part of and the status of their benefits eligibility. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AgeBandEnd | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe upper limit of the age band. |
| AgeBandStart | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe lower limit of the age band. |
| CmnyFullBnftDualDisabled | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has full benefits from both Medicare and Medicaid, and is enrolled in Medicare because of a disability. |
| CmnyPartialBenefitDualAged | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has partial benefits from both Medicare and Medicaid, and is enrolled in Medicare because of their age. |
| CmnyPartialBnftDualDsbl | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has partial benefits from both Medicare and Medicaid, and is enrolled in Medicare because of a disability. |
| Community | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home. |
| CommunityFullBnftDualAged | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, has full benefits from both Medicare and Medicaid, and is enrolled in Medicare because of their age. |
| CommunityNonDualAged | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, is covered only by Medicare, and is enrolled in Medicare because of their age. |
| CommunityNonDualDisabled | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment factor for a patient who lives at home, is covered only by Medicare, and is enrolled in Medicare because of a disability. |
| EnrolleeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the patient is a new enrollee or a continued enrollee.Possible values are:ContinuedNewThe default value is New. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the gender of the patient. |
| Institutional | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the risk adjustment. factor for a patient who lives at a healthcare facility. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the risk adjustment factors specified in the record are active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time that the record was referenced. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record in the system.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublishedYear | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe year when the risk adjustment factors in the record were published. |
