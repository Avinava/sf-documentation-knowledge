---
title: "AdvAcctForecastFactAdj"
domain: mfg-api-devguide
topic: advacctforecastfactadj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.538Z
estimatedTokens: 456
keywords: [AdvAcctForecastFactAdj, adjustments, made, advanced, account, forecast, fact, records, API, version, 53.0, later, Calls]
---

# AdvAcctForecastFactAdj

> Represents information about adjustments made to advanced account forecast
         fact records. This object is available in API version 53.0 and later.

# AdvAcctForecastFactAdj

Represents information about adjustments made to advanced account forecast fact records. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustedById | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the user who’s made an adjustment to the advanced account forecast fact record.This is a relationship field.Relationship NameAdjustedByRelationship TypeLookupRefers ToUser |
| AdvAcctForecastFactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe advanced account forecast fact record to which an adjustment was made.This is a polymorphic relationship field.Relationship NameAdvAcctForecastFactRelationship TypeLookupRefers ToAAFFact__c, AdvAccountForecastFact, Country__c, Region__c, lookup_to_rebate_product__c, testRebate__c |
| AdvAcctForecastMeasureDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast set measure definition of the forecast fact record to which the adjustment is being made.This is a relationship field.Relationship NameAdvAcctForecastMeasureDefRelationship TypeLookupRefers ToAdvAcctForecastMeasureDef |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information related to the adjustment of the forecast data. |
| InitialValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe forecast value in the forecast fact record before the adjustment is made. |
| UpdatedValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe forecast value in the forecast fact record after the adjustment is made. |
