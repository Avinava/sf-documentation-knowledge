---
title: "BldgEnrgyIntensityVal"
domain: netzero-cloud-dev-guide
topic: bldgenrgyintensityval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.570Z
estimatedTokens: 856
keywords: [BldgEnrgyIntensityVal, calculated, average, energy, intensity, individual, fuel, across, buildings, record, stores, function, floor, area, occupied]
---

# BldgEnrgyIntensityVal

> Represents the calculated average energy intensity for an individual fuel
         type across a set of buildings. Each record stores the fuel use intensity as a function of
         the floor area of the occupied space of that building. This object is available in API
      version 54.0 and later.

# BldgEnrgyIntensityVal

Represents the calculated average energy intensity for an individual fuel type across a set of buildings. Each record stores the fuel use intensity as a function of the floor area of the occupied space of that building. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AnnualIntensityValueInKwhM2 | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual building energy consumption intensity of the selected fuel type for a year in kWh per square meter. |
| AnnualIntensityValueInKwhSqft | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe annual building energy consumption intensity of the selected fuel type for a year in kWh per square foot. |
| BuildingEnergyIntensityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent building energy intensity record for this intensity value record.This is a relationship field.Relationship NameBuildingEnergyIntensityRelationship TypeLookupRefers ToBldgEnrgyIntensity |
| EnergyUseRecordCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of energy use records used to calculate the building energy intensity value. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of fuel for this intensity value record.Possible values are:CityGas—City GasCoolingDieselElectricityFuelOil—Fuel OilHeatHeavyOil—Heavy OilKeroseneLightOil—Light OilLiquidNaturalGasLNG—Liquid Natural Gas (LNG)NaturalGas—Natural GasPropaneSteam |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is locked for editing.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| NumberOfDaysUsedForCalc | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of days between the averaging window start date and end date that contained energy use data, which is used to calculate the building energy intensity. |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
