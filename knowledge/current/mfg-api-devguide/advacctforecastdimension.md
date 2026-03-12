---
title: "AdvAcctForecastDimension"
domain: mfg-api-devguide
topic: advacctforecastdimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.527Z
estimatedTokens: 564
keywords: [AdvAcctForecastDimension, dimensions, selected, advanced, account, forecast, API, version, 53.0, later, Calls]
---

# AdvAcctForecastDimension

> Represents information about the dimensions selected for an advanced account
         forecast set. This object is available in API version 53.0 and later.

# AdvAcctForecastDimension

Represents information about the dimensions selected for an advanced account forecast set. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvAcctForecastDimName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the dimension. |
| AdvAcctForecastDimSourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe dimension source associated with the advanced account forecast set dimension record.This is a relationship field.Relationship NameAdvAcctForecastDimSourceRelationship TypeLookupRefers ToAdvAcctForecastDimSource |
| AdvAcctForecastSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast set associated with the dimension.This is a relationship field.Relationship NameAdvAcctForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| DimensionFieldName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API name of the field for the dimension in the custom object that contains the generated advanced account forecast records.Possible values are:AccountId—Advanced Account Forecast Fact:Account IDAccount__c—AAFFact:AccountAdvAccountForecastSetId—Advanced Account Forecast Fact:Advanced Account Forecast Set IDAdvAcctForecastSetPartnerId—Advanced Account Forecast Fact:Advanced Account Forecast Set Partner IDCountry__c—Advanced Account Forecast Fact:CountryCreatedById—Advanced Account Forecast Fact:Created By IDCurrencyIsoCode—Advanced Account Forecast Fact:Currency ISO CodeLastModifiedById—Advanced Account Forecast Fact:Last Modified By IDName—Advanced Account Forecast Fact:NameOwnerId—Advanced Account Forecast Fact:Owner IDPeriodId—Advanced Account Forecast Fact:Period IDProductId—Advanced Account Forecast Fact:Product IDRegion__c—Advanced Account Forecast Fact:RegionUserRecordAccessId—Advanced Account Forecast Fact:Object Access Level ID |
| HierarchySequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display sequence of the dimension in the forecast data grid. |
