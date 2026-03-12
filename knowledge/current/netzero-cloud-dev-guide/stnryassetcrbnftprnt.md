---
title: "StnryAssetCrbnFtprnt"
domain: netzero-cloud-dev-guide
topic: stnryassetcrbnftprnt
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.009Z
estimatedTokens: 6512
keywords: [StnryAssetCrbnFtprnt, total, carbon, emissions, environmental, attributes, stationary, assets, footprint, quantifies, effect, atmospheric, warming, represented, metric]
---

# StnryAssetCrbnFtprnt

> Represents the total carbon emissions and other environmental attributes from
         stationary assets. Carbon footprint quantifies the effect of atmospheric warming, which is
         represented in metric tonnes of carbon dioxide equivalent (tCO₂e). Additionally, it also
         quantifies various aspects of the energy performance of the asset. This object is
      available in API version 54.0 and later.

# StnryAssetCrbnFtprnt

Represents the total carbon emissions and other environmental attributes from stationary assets. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). Additionally, it also quantifies various aspects of the energy performance of the asset. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AllocatedRenewableEnergyInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total renewable energy allocated to this carbon footprint record. |
| AllocationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe allocation status of renewable energy for this carbon footprint record.Possible values are:AllocatedIn ProgressNot Allocated |
| AnnualEmssnInventoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emissions inventory record for a particular year that’s related to the stationary asset carbon footprint record.This is a relationship field.Relationship NameAnnualEmssnInventoryRelationship TypeLookupRefers ToAnnualEmssnInventory |
| AuditApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of audit approval of this carbon footprint record.Possible values are:ApprovedPending Approval |
| AvgDataCenterPue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe average power usage effectiveness of the data center that’s calculated based on all the associated energy use records. This value is calculated by dividing the data center’s total electricity consumption value by the data center computing equipment’s total electricity consumption value. |
| AvgMonthlyElectrCnsmpInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe average monthly-normalized electricity consumption in kWh. This value is calculated based on the electricity consumption values across all stationary asset energy use records associated with this carbon footprint record. |
| BuildingEnergyIntensityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe building energy intensity record that can be used to fill energy consumption data gaps.This is a relationship field.Relationship NameBuildingEnergyIntensityRelationship TypeLookupRefers ToBldgEnrgyIntensity |
| CarbonInventoryRecordCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of energy use records associated with this carbon footprint record. |
| Ch4EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CH4 emissions that are calculated for this energy use record. |
| Co2EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 emissions that are calculated for this energy use record. |
| DataCtrItDieselCnsmpIntensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe diesel consumption intensity of the data center’s computing equipment. |
| DataGapStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of filling the energy consumption data gaps for this carbon footprint record.Possible values are:CompleteData Gaps IdentifiedPending Review |
| ElectricityIntensityVarPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference between the regional electricity consumption intensity of the carbon footprint and the electricity consumption intensity of the associated carbon footprint item. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this carbon footprint record are valid. |
| EnrgyCnsmpIntensityInKbtuM2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity of all the associated energy use records in kBtu per square meter. |
| EnrgyCnsmpIntensityInKbtuSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity of all the associated energy use records in kBtu per square foot. |
| EnrgyCnsmpIntensityInKwhM2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity of all the associated energy use records in kWh per square meter. |
| EnrgyCnsmpIntensityInKwhSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity of all the associated energy use records in kWh per square foot. |
| EnrgyIntensityVariancePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference between the electricity consumption intensity and the regional electricity consumption intensity of the carbon footprint |
| FootprintStage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe workflow stage for this carbon footprint record.Possible values are:CompletedData CollectionData Gap FillingData ValidationEmission Source ConfirmationExternal AuditInternal AuditRenewable Energy Allocation |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the stationary asset carbon footprint record and the associated energy use records are locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LocBasedElectrFrOthrFuelInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from other fuel energy sources for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromBiomassInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from biomass for all the associated energy use records, that's used to calculate emissions using the location-based method. |
| LocBasedElectrFromCoalInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from coal for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromGasInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from gas for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromHydroInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from hydroelectric energy sources for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromNuclearInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from nuclear power for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromOilInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from oil for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromSolarInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from solar photovoltaic energy sources for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBasedElectrFromWindInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from wind for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBsdElectrFrGeothermalInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from geothermal energy sources for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| LocBsdElectrOthrFossilFuelKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from other fossil fuel energy sources for all the associated energy use records, that’s used to calculate emissions using the location-based method. |
| MaxVarianceAboveAvgElectrCnsmp | TypepercentPropertiesFilter, Nillable, SortDescriptionThe difference between the highest normalized monthly electricity consumption and the average monthly electricity consumption of all the associated energy use records |
| MaxVarianceBelowAvgElectrCnsmp | TypepercentPropertiesFilter, Nillable, SortDescriptionThe difference between the lowest normalized monthly electricity consumption and the average monthly electricity consumption of all the associated energy use records |
| MktBsdElectrFrBiomassInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from biomass for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrFromCoalInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from coal for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrGasInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from gas for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrGeothermalInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from geothermal energy sources for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrHydroInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from hydroelectric energy sources for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrNuclearInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from nuclear power for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrOilInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from oil for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrOthrFuelInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from other fuel energy sources for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrSolarInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from solar photovoltaic energy sources for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrFrWindInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from wind for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| MktBsdElectrOthrFossilFuelKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total electricity generated from other fossil fuel energy sources for all the associated energy use records, that’s used to calculate emissions using the market-based method. |
| N2oEmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe N2O emissions that are calculated for this energy use record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for this carbon footprint record. |
| OccupiedFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value to override the occupied floor area of the associated stationary asset environmental source. |
| OccupiedFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the occupied floor area of the associated stationary asset environmental source.Possible values are:m2sqftThe default value is 'sqft'. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PrevYrAnnlCarbonFootprintId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe previous year's carbon footprint record for the associated stationary asset environmental source.This is a relationship field.Relationship NamePrevYrAnnlCarbonFootprintRelationship TypeLookupRefers ToStnryAssetCrbnFtprnt |
| PrevYrDataCenterPue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe data center’s power usage effectiveness for the previous year. |
| PrevYrEnrgyIntensityKbtuM2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity for the previous year in kBtu per square meter. |
| PrevYrEnrgyIntensityKbtuSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity for the previous year in kBtu per square foot. |
| PrevYrEnrgyIntensityKwhM2 | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity for the previous year in kWh per square meter. |
| PrevYrEnrgyIntensityKwhSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy consumption intensity for the previous year in kWh per square foot. |
| RegionalBldgEnergyIntensityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe building energy intensity record containing the standard building energy intensity data from a government source.This is a relationship field.Relationship NameRegionalBldgEnergyIntensityRelationship TypeLookupRefers ToBldgEnrgyIntensity |
| ReportingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when this carbon footprint record data is due to be sent to a reporting body. |
| ReportingYear | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year in which this carbon footprint record data is due to be sent to a reporting body.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |
| RgnlElectrCnsmpIntensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total regional electricity consumption intensity from the associated regional building energy intensity record in kWh per square foot. |
| RgnlEnrgyCnsmpIntensity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total regional electricity consumption intensity from the associated regional building energy intensity record in kBtu per square foot. |
| Scope3EmssnDnstrmLsdAst | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream leased assets that are included in category 13 of the related carbon footprint record or the override value. |
| Scp3EmssnCptlGoods | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of capital goods that are included in category 2 of the related carbon footprint record or the override value. |
| Scp3EmssnEmpCommute | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the employee commute that's included in category 7 of the related carbon footprint record or the override values. |
| Scp3EmssnFranchises | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of franchises that are included in category 14 of the related carbon footprint record or the override value. |
| Scp3EmssnInvestments | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from investment that are included in category 15 of the related carbon footprint record or the override value. |
| Scp3EmssnProcSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the processing of sold products that are included in category 10 of the related carbon footprint record or the override value. |
| Scp3EmssnPurchGoodsSrvcs | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions from the production of purchased goods and services that are ncluded in category 1 associated with the carbon footprint record or the relevant override value. |
| Scp3EmssnUpstrmLsdAst | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of upstream leased assets that are included in category 8 of the related carbon footprint record or the override value. |
| Scp3EmssnUseOfSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the use of sold products and services that are included in category 11 of the related carbon footprint record or the override value. |
| Scp3EmssnWstGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the treatment and disposal of generated waste that is included in category 5 of the related carbon footprint record or the override value. |
| Scp3EndLifeTreatSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the end-of-life treatment of sold products that are included in category 12 of the related carbon footprint record or the override value. |
| Scp3FuelEnrgyRelaActv | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of fuel and energy that are included in category 3 of the related carbon footprint record or the override values. |
| Scp3MktEmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 market-based emissions, measured in metric tons, from producing fuel and energy. These emissions are included in the category 3 of the related carbon footprint record or the override values. |
| Scp3UncategorizedEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from uncategorized sources in the related carbon footprint record or the override value. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this carbon footprint record are valid. |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset environmental source record associated with this carbon footprint record.This is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| SuplScope1Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 1 emissions value that’s added to the calculated total scope 1 emissions value. |
| SuplScope2LocationBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 2 location-based emissions value that’s added to the calculated total scope 2 location-based emissions value. |
| SuplScope2MarketBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 2 market-based emissions value that’s added to the calculated total scope 2 market-based emissions value. |
| SuplScope3DnstrmEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value from downstream activities that’s added to the calculated total scope 3 emissions value. |
| SuplScope3UpstrmEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value from upstream activities that’s added to the calculated total scope 3 emissions value. |
| TotBldgIndirectEnrgyCnsmpInMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total consumption of energy generated from electricity, heat, cooling, and steam. The consumption value excludes energy generated from other building fuels. |
| TotEnergyConsumptionInGj | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy consumption from all the energy sources and associated energy use records converted from kWh to gigajoules. |
| TotEnergyConsumptionInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy consumption from all the energy sources and associated energy use records. |
| TotEnergyConsumptionInMwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total energy consumption from all the energy sources and associated energy use records converted from kWh to MWh. |
| TotRnwlEnrgyExclHydroInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total renewable energy excluding hydroelectric energy. This value is calculated based on the market-based grid mix values and allocated renewable energy values. |
| TotRnwlEnrgyExclHydroPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of total renewable energy excluding hydroelectric energy out of the total electricity consumption. |
| TotScope1EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 1 emissions from all the associated energy use records and supplemental emissions. |
| TotScope2LocBasedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions value that’s calculated based on the location-based data of grid emissions. |
| TotScope2MktBasedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions value that's calculated based on the utility-provided emissions data and allocated renewable energy. |
| TotalFloorArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value to override the total floor area of the associated stationary asset environmental source. |
| TotalFloorAreaUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the total floor area of the associated stationary asset environmental source.Possible values are:m2sqftThe default value is 'sqft'. |
| TotalRenewableEnergyInKwh | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total renewable energy in kWh that's calculated based on the market-based grid mix values and the allocated renewable energy value. |
| TotalRenewableEnergyPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of total renewable energy out of the total electricity consumption. |
| TotalScp3DnstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream activities. This value is calculated based on the scope 3 downstream emission values and supplemental scope 3 downstream emission values of all the associated energy use records. |
| TotalScp3UpstrmEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from upstream activities. This value is calculated based on the scope 3 upstream emission values and supplemental scope 3 upstream emission values of all the associated energy use records. |
| YearOverYearPueVariancePct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage difference of the data center’s power usage effectiveness in the current year’s carbon footprint and the previous year’s carbon footprint. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StnryAssetCrbnFtprntChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[StnryAssetCrbnFtprntFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StnryAssetCrbnFtprntHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[StnryAssetCrbnFtprntShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- StnryAssetCrbnFtprntChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- StnryAssetCrbnFtprntFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- StnryAssetCrbnFtprntHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- StnryAssetCrbnFtprntShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
