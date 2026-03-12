---
title: "ProgramRebateType"
domain: channel-revenue-management-dev-guide
topic: programrebatetype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.567Z
estimatedTokens: 1815
keywords: [ProgramRebateType, Provide, rebate, part, program, volume, revenue, every, transaction, API, version, 51.0, later, Calls, Usage]
---

# ProgramRebateType

> Provide the rebate types that are part of this program. For example, volume
      rebate, revenue rebate, or rebate on every transaction. This object is available in API
    version 51.0 and later.

# ProgramRebateType

Provide the rebate types that are part of this program. For example, volume rebate, revenue rebate, or rebate on every transaction. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccrualRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate you want to accrue at for the rebate program member. This rate is in the same units as the specified measure type, for example percent or amount. This field is available in API version 52.0 and later. |
| AggregateObjectName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the custom aggregation entity. For example, RebateMemberProductAggregate. |
| BenefitQualifierField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents an attribute in the aggregate object whose value will be used, in conjunction with Aggregate Field and Rebate Type Benefit Field attributes from the PgmRebateTypBnftMapping entity, to determine the Benefit Value from the ProgramRebateTypeBenefit entity.Possible values are:GrowthAmount—Rebate Member Product Aggregate:Growth Amount.GrowthAmountPercent—Rebate Member Product Aggregate:Growth Amount Percent.GrowthQuantity—Rebate Member Product Aggregate:Growth Quantity.GrowthQuantityPercent—Rebate Member Product Aggregate:Growth Quantity Percent.PriorTotalQuantity—Rebate Member Product Aggregate:Prior Total Quantity.PriorTotalTransactionAmount—Rebate Member Product Aggregate:Prior Total Transaction Amount.TotalQuantity—Rebate Member Product Aggregate:Total Quantity.TotalTransactionAmount—Rebate Member Product Aggregate:Total Transaction Amount. |
| CalcObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the data processing engine definition used for the calculation. Only active data processing engine definitions can be used.Possible values are:Aggregate By MemberAggregate By ProductAccount Hierarchy Member AggregateProcess Per TransactionShip and Debit Member AggregateYear on Year Growth |
| CalculationBasis | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecify the basis for rebate amount calculation. This field is available in API version 52.0 and later.Possible values are:Accrual: Accrual rate, if provided, or the benefit setup is used to calculate the rebate amount.Payout: Benefit setup is used to calculate the rebate amount.PayoutAndAccrual—Payout and Accrual: Benefit setup is used for payout , and accrual rate for accrual amount.The default value is 'Payout'. |
| CalculationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the rule for calculating rebate benefits.Possible values are:RetrospectiveStepped |
| CalculationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of calculation for the rebate type.Possible values are:AggregateBasedCustomGrowthBasedPerTransaction |
| FilterCriteria | TypetextareaPropertiesNillableDescriptionStores the rebate type filter definition in JSON format, which will be consumed by the Calc object. |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the filter criteria options that are offered - AND, OR, Custom. |
| IsInTransitQtyApplicable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermine eligibility to include or exclude in-transit quantitiesThe default value is false. |
| IsIntegratable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field determines if the rebate type record is of type template or not, based on which the record can be associated with an opportunity,contract, quote, or any other eligible object.The default value is 'false'. |
| MeasureField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStores the reference to the aggregate object that will be used for rebate amount calculations based on the measure type selected and the benefit value fetched.Possible values are:GrowthAmount—Rebate Member Product Aggregate:Growth Amount.GrowthAmountPercent—Rebate Member Product Aggregate:Growth Amount Percent.GrowthQuantity—Rebate Member Product Aggregate:Growth Quantity.GrowthQuantityPercent—Rebate Member Product Aggregate:Growth Quantity Percent.PriorTotalQuantity—Rebate Member Product Aggregate:Prior Total Quantity.PriorTotalTransactionAmount—Rebate Member Product Aggregate:Prior Total Transaction Amount.TotalQuantity—Rebate Member Product Aggregate:Total Quantity.TotalTransactionAmount—Rebate Member Product Aggregate:Total Transaction Amount. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the program rebate type. |
| ProductFilterType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe criteria to be applied for the products present in the Included or Excluded Products list.Possible values are:ExcludeProducts—Exclude ProductsIncludeProducts—Include Products |
| RebateMeasureType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of rebate.Possible values are:AmountperUnitCustomFixedAmountPercentageOfRevenue |
| RebateProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the rebate program. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the rebate type.Possible values are:ActiveInactive |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure associated with the program rebate type. This field is available in API version 52.0 and later.This is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |
| ValidityDuration | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDuration for which the inventory is eligible for price protection/Duration of inventory eligibility for price protection |
| ValidityDurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the validity duration.Possible values are:DaysMonthsYearsThe default value is Years. |

## Usage

Each program can have multiple rebate types. For example, buy 100 units and get 2% revenue back, buy 10 units of petrol engines and get 1% rebate, and so on. If you want to give tiered benefits, select the Benefit Qualifier Field. For example, to give a tiered benefit of $5 for 0–100 units and $10 for 101–500 units, select Total Quantity in the Benefit Qualifier Field when the Measure Type is Total Quantity.
