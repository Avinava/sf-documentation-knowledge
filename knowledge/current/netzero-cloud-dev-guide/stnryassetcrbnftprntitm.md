---
title: "StnryAssetCrbnFtprntItm"
domain: netzero-cloud-dev-guide
topic: stnryassetcrbnftprntitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.021Z
estimatedTokens: 1610
keywords: [StnryAssetCrbnFtprntItm, total, tCO₂e, emissions, individual, fuel, child, records, stationary, asset, carbon, footprint, record, API, version]
---

# StnryAssetCrbnFtprntItm

> Represents the total tCO₂e emissions of individual fuel types, which are the
         child records of the stationary asset carbon footprint record. This object is
      available in API version 54.0 and later.

# StnryAssetCrbnFtprntItm

Represents the total tCO₂e emissions of individual fuel types, which are the child records of the stationary asset carbon footprint record. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| EnergyIntensityVariancePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference of energy consumption intensity between the current year and the previous year for the fuel type of the carbon footprint item. |
| EnrgyCnsmpIntensityInKwhM2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity of the selected fuel type in kWh per square meter. This value is calculated based on the fuel type’s energy consumption intensity as a function of the parent carbon footprint record’s occupied floor area. |
| EnrgyCnsmpIntensityInKwhSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity of the selected fuel type in kWh per square foot. This value is calculated based on the fuel type’s energy consumption intensity as a function of the parent carbon footprint record’s occupied floor area. |
| FuelType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe fuel type for this carbon footprint item record. For custom fuels, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the FuelType object}; for example, ftPackage_custom_wood, else this value is custom_{DeveloperName of the FuelType object}; for example, custom_wood.Possible values are:CityGas—City GasCoolingDieselElectricityFuelOil—Fuel OilHeatHeavyOil—Heavy OilITElectricity—IT ElectricityKeroseneLightOil—Light OilLiquidNaturalGasLNG—Liquid Natural Gas (LNG)NaturalGas—Natural GasPropaneRefrigerantSteam |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the stationary asset carbon footprint item record and the associated energy use records are locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this stationery asset carbon footprint item record. |
| ParentCarbonFootprintId | TypereferencePropertiesFilter, Group, SortDescriptionThe parent carbon footprint record for this carbon footprint item record.This is a relationship field.Relationship NameParentCarbonFootprintRelationship TypeLookupRefers ToStnryAssetCrbnFtprnt |
| PrevYearCarbonFootprintItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe previous year’s carbon footprint item record for the selected fuel type.This is a relationship field.Relationship NamePrevYearCarbonFootprintItemRelationship TypeLookupRefers ToStnryAssetCrbnFtprntItm |
| PrevYrEnrgyIntensityKwhM2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consumption intensity of the selected fuel type for the previous year in kWh per square meter. This value is calculated based on the fuel type’s energy consumption intensity as a function of the parent carbon footprint record’s occupied floor area. |
| PrevYrEnrgyIntensityKwhSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consumption intensity of the selected fuel type for the previous year in kWh per square foot. This value is calculated based on the fuel type’s energy consumption intensity as a function of the parent carbon footprint record’s occupied floor area. |
| TotEmssnUseMktBsdMthd | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total emissions for the carbon footprint item calculated using the market-based emissions factors. |
| TotalEmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescription​​The total emissions for this carbon footprint item record in metric tonnes of carbon dioxide equivalent. |
| TotalEnergyConsumptionInGj | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy consumption for this carbon footprint item record in gigajoules. |
| TotalEnergyConsumptionInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy consumption for this carbon footprint item record in kWh. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetCrbnFtprntItmChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 65.0)

Change events are available for the object.

[StnryAssetCrbnFtprntItmFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetCrbnFtprntItmHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- StnryAssetCrbnFtprntItmChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- StnryAssetCrbnFtprntItmFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetCrbnFtprntItmHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
