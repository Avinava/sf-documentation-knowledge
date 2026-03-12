---
title: "MfgProgramVariantFrcstFact"
domain: mfg-api-devguide
topic: mfgprogramvariantfrcstfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.854Z
estimatedTokens: 901
keywords: [MfgProgramVariantFrcstFact, generated, manufacturing, program, product, variant, forecast, records, API, version, 55.0, later, Calls]
---

# MfgProgramVariantFrcstFact

> Represents information about the generated manufacturing program product
         variant forecast records. This object is available in API version 55.0 and later.

# MfgProgramVariantFrcstFact

Represents information about the generated manufacturing program product variant forecast records. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe adjusted value of the forecasted quantity. |
| AdvAcctForecastSetUseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe advanced account forecast set context associated with the manufacturing program variant forecast fact record.This is a relationship field.Relationship NameAdvAcctForecastSetUseRelationship TypeLookupRefers ToAdvAcctForecastSetUse |
| ExternalReferenceNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe external identifier for the manufacturing program variant forecast fact record. |
| ForecastedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecasted quantity of the product variant that’s calculated by multiplying the forecasted quantity of the associated manufacturing program with the variant’s market share percentage. |
| ManufacturingProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturing program associated with the manufacturing program product variant forecast fact record.This is a relationship field.Relationship NameManufacturingProgramRelationship TypeLookupRefers ToManufacturingProgram |
| MarketSharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe market share of the total number of variant product units in percent. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the manufacturing program variant forecast fact record. |
| PeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe calendar period associated with the manufacturing program product variant forecast fact record.This is a relationship field.Relationship NamePeriodRelationship TypeLookupRefers ToPeriod |
| PeriodStartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe start date of the period for which the manufacturing program product variant forecast fact records are generated. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product variant associated with the manufacturing program product variant forecast fact record.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| ProductionLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production location of the account.This is a relationship field.Relationship NameProductionLocationRelationship TypeLookupRefers ToLocation |
| ProductionModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model associated with the manufacturing program variant forecast fact record.This is a relationship field.Relationship NameProductionModelRelationship TypeLookupRefers ToProduct2 |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the manufacturing program product variant forecast fact record.Possible values are:ActiveInactiveThe default value is 'Inactive'. |
