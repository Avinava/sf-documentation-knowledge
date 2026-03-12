---
title: "VehicleAssetEnrgyUse"
domain: netzero-cloud-dev-guide
topic: vehicleassetenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.374Z
estimatedTokens: 3606
keywords: [VehicleAssetEnrgyUse, fuel, consumption, vehicles, API, version, 54.0, later, Calls, Associated, Objects]
---

# VehicleAssetEnrgyUse

> Represents the fuel consumption related to vehicles. This object is
      available in API version 54.0 and later.

# VehicleAssetEnrgyUse

Represents the fuel consumption related to vehicles. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AircraftFuelEconomy | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fuel economy of the aircraft. |
| AircraftFuelEconomyInGph | TypedoublePropertiesFilter, Nillable, SortDescriptionThe fuel economy of the aircraft in gallons per hour. |
| AircraftFuelEconomyUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the fuel economy of the aircraft.Possible values are:GALLONS_PER_HOUR—Gallons per HourLITERS_PER_HOUR—Liters per Hour |
| AircraftType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of aircraft. |
| CarbonFootprintReportDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the carbon footprint data of the associated stationary asset is due to be sent to a reporting body. |
| Ch4EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CH4 emissions that are calculated for this energy use record. |
| Co2EmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CO2 emissions that are calculated for this energy use record. |
| CostCenter | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe cost center associated with this energy use record. |
| CrbnEmssnScopeAlloc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe allocation of fuel consumption for different scope emissions to override the scope allocation defined in the vehicle asset for the fuel type.Possible values are:Scope 1Scope 2Scope 3 DownstreamScope 3 UpstreamScope3BusinessTravel—Total Scope 3 Business TravelTotScp3DnstrmLsdAsset—Total Scope 3 Downstream Leased AssetTotScp3DnstrmTrnspDstr—Total Scope 3 Downstream Transportation and DistributionTotScp3EmpComut—Total Scope 3 Employee CommutingTotScp3UpstrmTrnspDstr—Total Scope 3 Upstream Transportation and Distribution |
| Distance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe distance traveled. For a fleet vehicle, the distance is calculated if you’ve already entered the fuel efficiency and fuel consumption. |
| DistanceUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the distance travelled.Possible values are:KilometersMilesThe default value is 'Kilometers'. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the values of this energy use record are valid. |
| FlightDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the flight was taken. |
| FlightDurationInHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe duration of the flight in hours. |
| FuelConsumption | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe calculated fuel consumption when you enter the distance and fuel effeciency |
| FuelConsumptionUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the consumed fuel. For custom fuel unit of measure, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the SustainabilityUom object}; for example, ftPackage_custom_bundle, else this value is custom_{DeveloperName of the SustainabilityUom object}; for example, custom_bundle.Possible values are:LITERS—LitersUsGallons—US GallonskWh |
| FuelEfficiency | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fuel efficiency value. For a fleet vehicle, the fuel efficiency is calculated if you’ve already entered the distance and fuel consumption. |
| FuelEfficiencyInMpg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe fuel efficiency of the vehicle in miles per gallons. |
| FuelEfficiencyUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the fuel efficiency of the vehicle.Possible values are:LITRES_PER_100KM—L per 100 kmMILES_PER_GALLON—Miles per GallonThe default value is 'LITRES_PER_100KM'. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of fuel consumed for this energy use record. For custom fuels, if the NamespacePrefix exists then this value is {NamespacePrefix}_custom_{DeveloperName of the FuelType object}; for example, ftPackage_custom_wood, else this value is custom_{DeveloperName of the FuelType object}; for example, custom_wood.Possible values are:AutogasLPG—Autogas/LPGBiodieselCompressedNaturalGasCNG—Compressed Natural Gas (CNG)DieselElectricityEthanolGasolineJetFuel—Jet Fuel |
| IsCompanyOwnedAsset | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the asset is owned by the organization.The default value is 'false'. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the vehicle asset energy use record is locked for editing because the associated carbon footprint is locked for editing.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| N2oEmissionsInKg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe N2O emissions that are calculated for this energy use record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OtherEmssnFctrId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe other emission factors that are used to calculate the emissions.This is a relationship field.Relationship NameOtherEmssnFctrRelationship TypeLookupRefers ToOtherEmssnFctrSet |
| OthrLifecyclEmssnFctrSetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe other lifecycle emission factor set record related to the energy use.This field is a relationship field.Relationship NameOthrLifecyclEmssnFctrSetRefers ToOthrLifecyclEmssnFctrSet |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Scope1EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 1 emissions from all the associated energy use records and supplemental emissions. |
| Scope2LocBasedEmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions value that’s calculated based on the location-based data of grid emissions. |
| Scope2MktBasedEmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions value that's calculated based on the utility-provided emissions data and allocated renewable energy. |
| Scope3DnstrmEmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions from downstream activities. This value is calculated based on the scope 3 downstream emission values and supplemental scope 3 downstream emission values of all the associated energy use records. |
| Scope3GhgCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the scope 3 GHG category for the total scope 3 emissions related to the energy use by the stationary asset environmental source.Possible values are:Scope3BusinessTravel—Business TravelTotScp3DnstrmLsdAsset—Downstream Leased AssetTotScp3DnstrmTrnspDstr—Downstream Transportation and DistributionTotScp3EmpComut—Employee CommutingTotScp3UpstrmTrnspDstr—Upstream Transportation and Distribution |
| Scope3UpstrmEmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions from upstream activities. This value is calculated based on the scope 3 upstream emission values and supplemental scope 3 upstream emission values of all the associated energy use records. |
| Scp3Ch4EmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe methane (CH4) emissions, measured in kilograms, from producing, transmitting, and delivering fuels and energy a vehicle uses. |
| Scp3Co2EmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe carbon dioxide (CO2) emissions, measured in kilograms, from producing, transmitting, and delivering fuels and energy a vehicle uses. |
| Scp3EmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions, measured in metric tons, that occur upstream from a company's direct use of energy in a vehicle, such as the extraction, refining, production, transmission, and transport of fuels. |
| Scp3N2oEmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe nitrous oxide (N2O) emissions, measured in kilograms, from producing, transmitting, and delivering fuels and energy a vehicle uses. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the values of this energy use record are valid. |
| SuplScope1Emissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 1 emissions value that’s added to the calculated total scope 1 emissions value. |
| SuplScope2LocationBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 2 location-based emissions value that’s added to the calculated total scope 2 location-based emissions value. |
| SuplScope2MarketBasedEmssn | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 2 market-based emissions value that’s added to the calculated total scope 2 market-based emissions value. |
| SuplScope3DnstrmEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value from downstream activities that’s added to the calculated total scope 3 emissions value |
| SuplScope3UpstrmEmissions | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe supplemental scope 3 emissions value from upstream activities that’s added to the calculated total scope 3 emissions value |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier that is associated with this energy use record.This is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| TotalFuelConsumptionInGal | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total fuel consumed in US gallons. |
| TotalFuelConsumptionInLiter | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total fuel consumed in liters. For a private jet, the fuel consumption and fuel consumption unit values are prioritized for calculations over the aircraft fuel economy and aircraft fuel economy unit values. For a fleet vehicle, the total fuel consumption value is the fuel consumption value converted to liters. |
| VehicleAssetCrbnFtprntId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle asset carbon footprint record that's associated with this energy use record.This is a relationship field.Relationship NameVehicleAssetCrbnFtprntRelationship TypeLookupRefers ToVehicleAssetCrbnFtprnt |
| VehicleAssetEmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe vehicle asset emission source that's associated with this energy use record.This is a relationship field.Relationship NameVehicleAssetEmssnSrcRelationship TypeLookupRefers ToVehicleAssetEmssnSrc |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[VehicleAssetEnrgyUseChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[VehicleAssetEnrgyUseFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[VehicleAssetEnrgyUseHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[VehicleAssetEnrgyUseShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- VehicleAssetEnrgyUseChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- VehicleAssetEnrgyUseFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- VehicleAssetEnrgyUseHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- VehicleAssetEnrgyUseShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
