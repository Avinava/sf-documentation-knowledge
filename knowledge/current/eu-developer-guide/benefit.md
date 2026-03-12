---
title: "Benefit"
domain: eu-developer-guide
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.044Z
estimatedTokens: 923
keywords: [Benefit, benefits, associated, program, Management, API, version, 57.0, later]
---

# Benefit

> Represents information about benefits associated with a program.
      This object is available with Program Management in API version 57.0 and later.

# Benefit

Represents information about benefits associated with a program. This object is available with Program Management in API version 57.0 and later.

| Field | Details |
| --- | --- |
| BenefitManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person in charge of the benefit.This field is a relationship field. |
| BenefitStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit.Possible values are:ActiveCancelledCompletedPlannedThe default value is Active. |
| BenefitTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the type of the benefit.This field is a relationship field. |
| CurrentMonthDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the current month. |
| CurrentYearAssignedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits assigned in the current year. |
| CurrentYearDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the current year. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the benefit. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date until when the benefit is valid. |
| EnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the benefit is applicable to an individual. |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe goal definition associated with the benefit.This field is a relationship field. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the benefit is active.The default value is false. |
| IsBenefitCalculated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Benefit is calculated in runtimeThe default value is false. |
| MaximumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount that can be disbursed for a period. |
| MinimumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum amount that can be disbursed for a period. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit. |
| PreviousMonthDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the previous month. |
| PreviousYearAssignedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits assigned in the previous year. |
| PreviousYearDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the previous year. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the program that's associated with the benefit.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the benefit starts. |
| UnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit.This field is a relationship field. |
