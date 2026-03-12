---
title: "MfgProgramCpntFrcstFact"
domain: mfg-api-devguide
topic: mfgprogramcpntfrcstfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.823Z
estimatedTokens: 1352
keywords: [MfgProgramCpntFrcstFact, generated, manufacturing, program, component, forecast, records, API, version, 55.0, later, Calls]
---

# MfgProgramCpntFrcstFact

> Represents information about the generated manufacturing program component
         forecast records. This object is available in API version 55.0 and later.

# MfgProgramCpntFrcstFact

Represents information about the generated manufacturing program component forecast records. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe adjusted value of the forecasted quantity. |
| AdjustedForecastedRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe adjusted value of the forecasted revenue. |
| AdvAcctForecastSetUseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advanced account forecast set context associated with the manufacturing program component forecast fact record.This is a relationship field.Relationship NameAdvAcctForecastSetUseRelationship TypeLookupRefers ToAdvAcctForecastSetUse |
| CostUnitOfMeasurementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis is a relationship field.Relationship NameCostUnitOfMeasurementRelationship TypeLookupRefers ToUnitOfMeasure |
| ExpectedProfitPerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected profit per unit from the product variant component. |
| ExpectedProfitPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected profit from the product variant component in percent. |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe external identifier for the manufacturing program component forecast fact record. |
| ForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted quantity of the product variant component that’s calculated by multiplying the forecasted quantity of the associated manufacturing program with the number of component units per product variant unit. |
| ForecastedRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted revenue from the product variant component. |
| ManufacturingProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing program associated with the manufacturing program product variant component forecast fact record.This is a relationship field.Relationship NameManufacturingProgramRelationship TypeLookupRefers ToManufacturingProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Manufacturing Program Component Forecast Fact record. |
| PeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe period associated with the manufacturing program product variant component forecast fact record.This is a relationship field.Relationship NamePeriodRelationship TypeLookupRefers ToPeriod |
| PeriodStartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe start date of the period for which the manufacturing program component forecast fact records are generated. |
| ProductComponentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe component of the product variant that’s associated with the manufacturing program product variant component forecast fact record.This is a relationship field.Relationship NameProductComponentRelationship TypeLookupRefers ToProduct2 |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing program product associated with the manufacturing program product component forecast fact record.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductionLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production location of the account.This is a relationship field.Relationship NameProductionLocationRelationship TypeLookupRefers ToLocation |
| ProductionModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model associated with the manufacturing program component forecast fact record.This is a relationship field.Relationship NameProductionModelRelationship TypeLookupRefers ToProduct2 |
| SellingPricePerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe selling price of a unit of the product variant component. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the manufacturing program product variant component forecast fact record.Possible values are:ActiveInactiveThe default value is 'Inactive'. |
| TotalCostPerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total cost of a unit of the product variant component that's calculated by adding the total fixed cost per unit and the variable cost per unit. |
| TotalFixedCostPerUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total fixed cost of a unit of the product variant component. |
| VariableCostPerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe variable cost of a unit of the product variant component. |
