---
title: "Benefit"
domain: life-sciences-dev-guide
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.006Z
estimatedTokens: 594
keywords: [Benefit, benefits, associated, financial, assistance, program, mapped, members, rules, API, version, 51.0, later, Calls]
---

# Benefit

> Represents information about benefits associated with the financial
      assistance program. Benefits are mapped to the members based on the program rules. This
    object is available in API version 51.0 and later.

# Benefit

Represents information about benefits associated with the financial assistance program. Benefits are mapped to the members based on the program rules. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the benefit type.This field is a relationship field.Relationship NameBenefitTypeRelationship TypeLookupRefers ToBenefitType |
| BudgetAmountUsed | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe budget amount used by an employee after enrolling in a corresponding program. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the benefit. |
| EnrolleeAmountLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount limit allocated to enrollee for a corresponding program. |
| EnrolleeLimitFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe assigned frequency for an enrollee limit for a corresponding program.Possible values are:MonthlyMonthly, Yearly , Annual, Weekly, QuarterlyYearly |
| EnrolleeTrxnAmountLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe enrollee transaction amount limit for a corresponding program. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the program benefit is active. |
| MaxBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount that can be disbursed for a period. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit. |
| PayoutFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:AnnualBiWeekly - Bi-WeeklyMonthlyOnDemand - On-DemandQuaterlyWeekly |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the program that's associated with the benefit.This field is a relationship field. |
