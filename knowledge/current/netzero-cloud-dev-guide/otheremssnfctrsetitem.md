---
title: "OtherEmssnFctrSetItem"
domain: netzero-cloud-dev-guide
topic: otheremssnfctrsetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.597Z
estimatedTokens: 1934
keywords: [OtherEmssnFctrSetItem, individual, entries, emissions, conversion, factors, various, data, sources, neither, electricity, grid, nor, scope, API]
---

# OtherEmssnFctrSetItem

> Represents the individual entries for emissions and conversion factors for
         various data types and sources that are neither the electricity grid nor scope 3 data
         types. This object is available in API version 54.0 and
      later.

# OtherEmssnFctrSetItem

Represents the individual entries for emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalorificValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calorific value of the fuel source. |
| CalorificValueUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the calorific value of the fuel source.Possible values are:KWH_PER_L—kWh/LKWH_PER_M3—kWh/m3KWH_PER_SCF—kWh/scfMMBTU_PER_GAL—MMBtu/galMMBTU_PER_SCF—MMBtu/scfThe default value is 'KWH_PER_M3'. |
| Ch4EmissionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CH4 emissions factor for petroleum fuel source. |
| Ch4EmissionFactorUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the CH4 emissions factor.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Co2EmissionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 emissions factor for petroleum fuel sources. |
| Co2EmissionFactorUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the CO2 emissions factor.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Co2eEmissionFactorInTco2eGj | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2-equivalent emissions factor that's calculated in tonnes of CO2-equivalent emissions per gigajoule (GJ). |
| Co2eEmissionFactorInTco2eMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 equivalent emissions factor that's calculated from CO2, CH4, and N2O emissions factors |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier for the emissions factor. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of fuel associated with this emissions factor record. For custom fuels, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the FuelType object}; for example, ftPackage_custom_wood, else this value is custom_{DeveloperName of the FuelType object}; for example, custom_wood.Possible values are:AutogasLPG—Autogas/LPGBiodieselBiomassCityGas—City GasCompressedNaturalGasCNG—Compressed Natural Gas (CNG)CoolingDieselElectricityEthanolFuelOil—Fuel OilGasolineHeatHeavyOil—Heavy OilJetFuel—Jet FuelKeroseneLightOil—Light OilLiquidNaturalGasLNG—Liquefied Natural Gas (LNG)NaturalGas—Natural GasPropaneSteam |
| FuelTypeRefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is available in API version 57.0 and later.This field is a relationship field.Relationship NameFuelTypeRefRelationship TypeLookupRefers ToFuelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oEmissionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe N2O emissions factor for petroleum fuel sources. |
| N2oEmissionFactorUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the N2O emissions factor.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| ParentEmissionFactorId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe name of the parent emissions factor.This is a relationship field.Relationship NameParentEmissionFactorRelationship TypeLookupRefers ToOtherEmssnFctrSet |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record that's associated with the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRelationship TypeLookupRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the emissions factor record can be locked from dataset updates.The default value is false. |
| SuppliedEmissionsFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe CO2 equivalent emissions factor provided by the vendor to override the CO2e emissions factor that’s calculated using the CO2, CH4, and N2O emission values. |
| SuppliedEmissionsFactorUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the supplied emissions factor value. For custom fuel unit of measure, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the SustainabilityUom object}; for example, ftPackage_custom_bundle, else this value is custom_{DeveloperName of the SustainabilityUom object}; for example, custom_bundle.Possible values are:G_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US galTONNES_PER_GJ—tonnes/GJTONNES_PER_KL—tonnes/klTONNES_PER_KWH—tonnes/kWhTONNES_PER_L—tonnes/LTONNES_PER_MMBTU—tonnes/MMBtuTONNES_PER_MWH—tonnes/MWh |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OtherEmssnFctrSetItemFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OtherEmssnFctrSetItemHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- OtherEmssnFctrSetItemFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- OtherEmssnFctrSetItemHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
