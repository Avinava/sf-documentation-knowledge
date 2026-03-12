---
title: "MfgProgramForecastFact"
domain: mfg-api-devguide
topic: mfgprogramforecastfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.833Z
estimatedTokens: 1052
keywords: [MfgProgramForecastFact, generated, manufacturing, program, forecast, records, API, version, 55.0, later, Calls]
---

# MfgProgramForecastFact

> Represents information about the generated manufacturing program forecast
         records. This object is available in API version 55.0 and later.

# MfgProgramForecastFact

Represents information about the generated manufacturing program forecast records. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe adjusted value of the forecasted quantity. |
| AdjustedForecastedRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe adjusted value of the forecasted revenue. |
| AdvAcctForecastSetUseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advanced account forecast set context associated with the manufacturing program forecast fact record.This is a relationship field.Relationship NameAdvAcctForecastSetUseRelationship TypeLookupRefers ToAdvAcctForecastSetUse |
| ExpectedRevenuePerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected revenue per unit of the product. |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe external identifier for the manufacturing program forecast fact record. |
| ForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted quantity of the product associated with the manufacturing program that’s calculated by multiplying the product quantity with the market share percentage. |
| ForecastedRevenue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted revenue of the manufacturing program that’s calculated by multiplying the forecasted quantity with the market share percentage. |
| ManufacturingProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing program associated with the manufacturing program forecast fact record.This is a relationship field.Relationship NameManufacturingProgramRelationship TypeLookupRefers ToManufacturingProgram |
| MarketSharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe market share of the total number of product units in percent. For example, if an OEM is planning to manufacture 10,000 cars of the ABC model in December 2021 and 25% will be manufactured at plant XYZ, 25% is the market share. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the manufacturing program forecast fact record. |
| PeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe calendar period associated with the manufacturing program forecast fact record.This is a relationship field.Relationship NamePeriodRelationship TypeLookupRefers ToPeriod |
| PeriodStartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe start date of the period for which the manufacturing program forecast fact records are generated. |
| PreviousPeriodProgramQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe product quantity in the previous period. |
| ProductionLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production location of the account.This is a relationship field.Relationship NameProductionLocationRelationship TypeLookupRefers ToLocation |
| ProductionModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production model associated with the manufacturing program forecast fact record.This is a relationship field.Relationship NameProductionModelRelationship TypeLookupRefers ToProduct2 |
| ProgramQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of units of the product that is manufactured as part of the program. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the manufacturing program forecast fact record.Possible values are:ActiveInactiveThe default value is 'Inactive'. |
