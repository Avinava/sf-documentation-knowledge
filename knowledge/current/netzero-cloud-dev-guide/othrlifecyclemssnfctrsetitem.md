---
title: "OthrLifecyclEmssnFctrSetItem"
domain: netzero-cloud-dev-guide
topic: othrlifecyclemssnfctrsetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.643Z
estimatedTokens: 4173
keywords: [OthrLifecyclEmssnFctrSetItem, individual, emissions, factor, fuel, calculate, occur, throughout, lifecycle, extraction, end-of-life, stationary, vehicle, assets, electricity]
---

# OthrLifecyclEmssnFctrSetItem

> Represents the individual emissions factor for a fuel used to calculate
         emissions that occur throughout its lifecycle, from extraction to end-of-life. This fuel is
         used in stationary and vehicle assets other than electricity. This object is available
      in API version 66.0 and later.

# OthrLifecyclEmssnFctrSetItem

Represents the individual emissions factor for a fuel used to calculate emissions that occur throughout its lifecycle, from extraction to end-of-life. This fuel is used in stationary and vehicle assets other than electricity. This object is available in API version 66.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| ExternalIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe external identifier for the emissions factor. |
| FuelType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of fuel associated with this emissions factor record. For custom fuels, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the FuelType object}; for example, ftPackage_custom_wood, else this value is custom_{DeveloperName of the FuelType object}; for example, custom_wood.Possible values are:AutogasLPG—Autogas/LPGBiodieselBiomassCityGas—City GasCompressedNaturalGasCNG—Compressed Natural Gas (CNG)CoolingDieselElectricityEthanolFuelOil—Fuel OilGasolineHeatHeavyOil—Heavy OilJetFuel—Jet FuelKeroseneLightOil—Light OilLiquidNaturalGasLNG—Liquefied Natural Gas (LNG)NaturalGas—Natural GasPropaneSteam |
| FuelTypeRefId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe fuel type record related to the emissions factor.This field is a relationship field.Relationship NameFuelTypeRefRefers ToFuelType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription |
| ParentEmissionFactorId | TypereferencePropertiesFilter, Group, SortDescriptionThe name of the parent emissions factor.This field is a relationship field.Relationship NameParentEmissionFactorRelationship TypeMaster-detailRefers ToOthrLifecyclEmssnFctrSet (the master object) |
| ReferenceDataLoadLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe reference data load log record related to the emissions factor.This field is a relationship field.Relationship NameReferenceDataLoadLogRefers ToReferenceDataLoadLog |
| ShouldLockDtastUpdtForRec | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescription"Indicates whether the emissions factor record can be locked from dataset updates. The default value is false."The default value is false. |
| TrnsmDstrCh4EmssnFctr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of methane (CH4) released into the atmosphere for each unit of electricity transmitted and distributed. |
| TrnsmDstrCh4EmssnFctrUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the amount of methane (CH4) released into the atmosphere for each unit of electricity transmitted and distributed.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| TrnsmDstrCo2EmssnFctr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of carbon dioxide (CO2) released into the atmosphere for each unit of electricity transmitted and distributed. |
| TrnsmDstrCo2EmssnFctrUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the amount of carbon dioxide (CO2) released into the atmosphere for each unit of electricity transmitted and distributed.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| TrnsmDstrCo2eEmssnKl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's calculated in metric tons of CO2-equivalent emissions per kiloliter (kl) for each unit of electricity transmitted and distributed. |
| TrnsmDstrCo2eEmssnKm | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's calculated in metric tons of CO2-equivalent emissions per kilometer (Km) for each unit of electricity transmitted and distributed. |
| TrnsmDstrCo2eEmssnMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's calculated in metric tons of CO2-equivalent emissions per mega watthour (MWh) for each unit of electricity transmitted and distributed. |
| TrnsmDstrN2oEmssnFctr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of nitrous oxide (N2O) released into the atmosphere for each unit of electricity transmitted and distributed. |
| TrnsmDstrN2oEmssnFctrUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the amount of nitrous oxide (N2O) released into the atmosphere for each unit of electricity transmitted and distributed.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| TrnsmDstrSuplCo2eEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's provided by the vendor to override the CO2-equivalent emissions factor calculated for the electricity transmittion and distribution. The emissions factor value is calculated by using the CO2, CH4, and N2O emission values. |
| TrnsmDstrSuplCo2eEmssnUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the carbon dioxide-equivalent (CO2-equivalent) emissions factor that's provided by the vendor to override the CO2-equivalent emissions factor calculated during the electricity transmittion and distribution.Possible values are:G_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US galTONNES_PER_GJ—tonnes/GJTONNES_PER_KL—tonnes/klTONNES_PER_KWH—tonnes/kWhTONNES_PER_L—tonnes/LTONNES_PER_MMBTU—tonnes/MMBtuTONNES_PER_MWH—tonnes/MWh |
| Well2TkCh4EmssnFctr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe methane (CH4) gas emitted during the extraction, production, processing, and transportation of the fuel to make it ready to use. It excludes emissions during the use of the fuel. |
| Well2TkCh4EmssnFctrUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for methane (CH4) gas emitted during the extraction, production, processing, and transportation of the fuel to make it ready to use.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Well2TkCo2EmssnFctr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide (CO2) gas emitted during the extraction, production, processing, and transportation of the fuel to make it ready to use. It excludes emissions during the use of the fuel. |
| Well2TkCo2EmssnFctrUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for carbon dioxide (CO2) gas emitted during the extraction, production, processing, and transportation of the fuel to make it ready to use.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Well2TkCo2eEmssnFctrKl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor calculated in metric tons of CO2-equivalent emissions per kiloliter (kl) for the fuel during the extraction, production, processing, and transportation of the fuel to make it ready to use. It excludes emissions during the use of the fuel. |
| Well2TkCo2eEmssnFctrKm | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor calculated in metric tons of CO2-equivalent emissions per kilometer (Km) for the fuel during the extraction, production, processing, and transportation of the fuel to make it ready to use. It excludes emissions during the use of the fuel. |
| Well2TkCo2eEmssnFctrMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor calculated in metric tons of CO2-equivalent emissions per mega watthour (MWh) for the fuel during the extraction, production, processing, and transportation of the fuel to make it ready to use. It excludes emissions during the use of the fuel.` |
| Well2TkN2oEmssnFctr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe nitrous oxide (N2O) gas emitted during the extraction, production, processing, and transportation of the fuel to make it ready to use. It excludes emissions during the use of the fuel. |
| Well2TkN2oEmssnFctrUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for nitrous oxide (N2O) gas emitted during the extraction, production, processing, and transportation of the fuel to make it ready to use.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Well2TkSuplCo2eEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide (CO2) emitted during production, transportation, and distribution of a fuel. |
| Well2TkSuplCo2eEmssnUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the carbon dioxide (CO2) emitted during production, transportation, and distribution of a fuel.Possible values are:G_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US galTONNES_PER_GJ—tonnes/GJTONNES_PER_KL—tonnes/klTONNES_PER_KWH—tonnes/kWhTONNES_PER_L—tonnes/LTONNES_PER_MMBTU—tonnes/MMBtuTONNES_PER_MWH—tonnes/MWh |
| Well2TkTrnsmCh4Emssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe methane (CH4) emitted during production, transportation and distribution of a fuel. |
| Well2TkTrnsmCh4EmssnUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the methane (CH4) emitted during the production, transportation, and distribution of a fuel.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Well2TkTrnsmCo2Emssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide (CO2) emitted during production, transportation, and distribution of a fuel. |
| Well2TkTrnsmCo2EmssnUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the carbon dioxide (CO2) emitted during production, transportation, and distribution of a fuel.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Well2TkTrnsmCo2eEmssnKl | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's calculated in metric tons of CO2-equivalent emissions per kiloliter (kl) during production, transportation, and distribution of a fuel. |
| Well2TkTrnsmCo2eEmssnKm | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's calculated in metric tons of CO2-equivalent emissions per kilometer (Km) during production, transportation, and distribution of a fuel. |
| Well2TkTrnsmCo2eEmssnMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's calculated in metric tons of CO2-equivalent emissions per mega watthour (MWh) during production, transportation, and distribution of a fuel. |
| Well2TkTrnsmN2oEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe nitrous oxide (N2O) emitted during production, transportation, and distribution of a fuel. |
| Well2TkTrnsmN2oEmssnUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the nitrous oxide (N2O) emitted during production, transportation, and distribution of a fuel.Possible values are:G_PER_KL—g/klG_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KL—kg/klKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US gal |
| Well2TkTrnsmSuplCo2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide-equivalent (CO2-equivalent) emissions factor that's provided by the vendor to override the CO2-equivalent emissions factor calculated for the production, transportation, and distribution of a fuel. The emissions factor value is calculated by using the CO2, CH4, and N2O emission values. |
| Well2TkTrnsmSuplCo2eUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of measure for the carbon dioxide-equivalent (CO2-equivalent) emissions factor that's provided by the vendor to override the CO2-equivalent emissions factor calculated for the production, transportation, and distribution of a fuel.Possible values are:G_PER_KM—g/kmG_PER_KWH—g/kWhG_PER_L—g/LG_PER_MILES—g/mileG_PER_MMBTU—g/MMBtuG_PER_US_GAL—g/US galKG_PER_GJ—kg/GJKG_PER_KM—kg/kmKG_PER_KWH—kg/kWhKG_PER_L—kg/LKG_PER_MILES—kg/mileKG_PER_MJ—kg/MJKG_PER_MMBTU—kg/MMBtuKG_PER_US_GAL—kg/US galTONNES_PER_GJ—tonnes/GJTONNES_PER_KL—tonnes/klTONNES_PER_KWH—tonnes/kWhTONNES_PER_L—tonnes/LTONNES_PER_MMBTU—tonnes/MMBtuTONNES_PER_MWH—tonnes/MWh |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OthrLifecyclEmssnFctrSetItemChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[OthrLifecyclEmssnFctrSetItemHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- OthrLifecyclEmssnFctrSetItemChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- OthrLifecyclEmssnFctrSetItemHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
