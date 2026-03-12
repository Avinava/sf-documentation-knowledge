---
title: "Benefit"
domain: nonprofit-cloud
topic: benefit
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:01.936Z
estimatedTokens: 1415
keywords: [Benefit, benefits, associated, program, Management, API, version, 57.0, later, Calls]
---

# Benefit

> Represents information about benefits associated with a program.
      This object is available with Program Management in API version 57.0 and later.

# Benefit

Represents information about benefits associated with a program. This object is available with Program Management in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person in charge of the benefit.This field is a relationship field.Relationship NameBenefitManagerRelationship TypeLookupRefers ToUser |
| BenefitStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the benefit.Possible values are:ActiveCancelledCompletedPlannedThe default value is Active. |
| BenefitTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the type of the benefit.This field is a relationship field.Relationship NameBenefitTypeRelationship TypeMaster-DetailRefers ToBenefitType |
| BnftDisbFieldSetApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field set that groups benefit specific fields for the benefit disbursement object. |
| CurrentMonthDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the current month. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| CurrentYearAssignedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits assigned in the current year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| CurrentYearDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the current year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the benefit. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date until when the benefit is valid. |
| EnrollmentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times the benefit is applicable to an individual. |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe goal definition associated with the benefit.This field is a relationship field.Relationship NameGoalDefinitionRelationship TypeLookupRefers ToGoalDefinition |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the benefit is active.The default value is false. |
| MaximumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum amount that can be disbursed for a period. |
| MinimumBenefitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum amount that can be disbursed for a period. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit. |
| PreviousMonthDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the previous month. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| PreviousYearAssignedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits assigned in the previous year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| PreviousYearDisbursedQty | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of benefits disbursed in the previous year. Data Processing Engine calculates this field if you activate the Program Management Data Processing Engine Definition templates in Setup. You can schedule this calculation to run on a regular basis. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the program that's associated with the benefit.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the benefit starts. |
| UnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the unit of measure that's used to calculate the benefit.This field is a relationship field.Relationship NameUnitRelationship TypeLookupRefers ToUnitOfMeasure |
