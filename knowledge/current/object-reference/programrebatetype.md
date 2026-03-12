---
title: "ProgramRebateType"
domain: object-reference
topic: programrebatetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.563Z
estimatedTokens: 1600
keywords: [ProgramRebateType, rebate, structure, associated, Program, API, version, 63.0, later, Calls]
---

# ProgramRebateType

> Represents a rebate structure associated with a Rebate Program. This
      object is available in API version 63.0 and later.

# ProgramRebateType

Represents a rebate structure associated with a Rebate Program. This object is available in API version 63.0 and later.

A ProgramRebateType record is created to define how benefits are calculated—such as accruals, payouts, or both—based on specified measure fields and logic.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccrualRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of accrual based on the value selected in the Measure Type field. For example, when the measure type is percent and you enter 10, the accrual rate is 10%. |
| AggregateObjectName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe object that stores the aggregation results. |
| BenefitQualifierField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field on the aggregation object used to define thresholds for qualifying benefits (minimum or maximum). |
| CalcObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLinks to a calculation definition from the Data Processing Engine.This field is a relationship field.Relationship NameCalcObjectRefers ToBatchCalcJobDefinition |
| CalculationBasis | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the method used to calculate the rebate amount.Possible values are:AccrualPayoutPayoutAndAccrual—Payout and AccrualThe default value is Payout. |
| CalculationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines how tiered rebate benefits are calculated.Possible values are:RetrospectiveSteppedThe default value is Retrospective. |
| CalculationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of rebate calculation logic to use.Possible values are:AggregateBased—Aggregate BasedCustomGrowthBased—Growth BasedPerTransaction—Per Transaction |
| ExecutionProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLinks to business rules that define custom execution logic.This field is a relationship field.Relationship NameExecutionProcedureRefers ToExpressionSet |
| FilterAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLogical operator to apply between filter conditions.Possible values are:AllConditionsMet—All Conditions Are Met (AND)AnyConditionMet—Any Condition Is Met (OR)CustomLogic—Custom Condition LogicNoConditionsMet—No Conditions Are Met |
| FilterCriteria | TypetextareaPropertiesNillableDescriptionHolds the filter conditions in textual format. Used to define eligibility criteria for rebate qualification. |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLogical formula used to combine filter conditions, typically using field references and logical operators. |
| IsIntegratable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen selected, allows this rebate type to be applied on transactional records such as orders or opportunities.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and the timestamp when the record was last referenced by the user. Useful for user activity tracking. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and the timestamp when the record was last opened or viewed. Tracks user interaction history. |
| MeasureField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe aggregation object field used with measure type and benefit value to calculate the rebate amount. This is required for the Amount per Unit and Percentage of Revenue measure types. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique name that identifies the rebate type configuration. Used as a reference label across related components. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies the user or group that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductFilterType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the rebate applies to included or excluded products.Possible values are:ExcludeProducts—Exclude ProductsIncludeProducts—Include Products |
| RebateMeasureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the method to measure benefit payout.Possible values are:AmountperUnit—Amount per UnitCustomFixedAmount—Fixed AmountPercentageOfRevenue—Percentage of Revenue |
| RebateProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionLinks this rebate type to its parent rebate program.This field is a relationship field.Relationship NameRebateProgramRelationship TypeMaster-detailRefers ToRebateProgram (the master object) |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the rebate type is currently active.Possible values are:ActiveInactiveThe default value is Inactive. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the unit of measure associated with the rebate type.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |
| ValidityDuration | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDuration for which the inventory is eligible for price protection. |
| ValidityDurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of time used to measure ValidityDuration.Possible values are:DaysMonthsYearsThe default value is Years. |
