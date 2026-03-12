---
title: "VehicleAssetEnrgyUse"
domain: sfFieldRef
topic: vehicleassetenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.557Z
estimatedTokens: 999
keywords: [VehicleAssetEnrgyUse, fuel, consumption, vehicles]
---

# VehicleAssetEnrgyUse

> Represents the fuel consumption related to vehicles.

# VehicleAssetEnrgyUse

Represents the fuel consumption related to vehicles.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see VehicleAssetEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AircraftFuelEconomy | Aircraft Fuel Economy | double |  |  | 18 | 2 |
| AircraftFuelEconomyInGph | Aircraft Fuel Economy (gal/h) | double |  |  | 18 | 2 |
| AircraftFuelEconomyUnit | Aircraft Fuel Economy Unit | picklist |  | 255 |  |  |
| AircraftType | Aircraft Type | string |  | 100 |  |  |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| Ch4EmissionsInKg | CH4 Emissions (kg) | double |  |  | 16 | 6 |
| Co2EmissionsInKg | CO2 Emissions (kg) | double |  |  | 16 | 6 |
| CostCenter | Cost Center | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Distance | Distance | double |  |  | 18 | 2 |
| DistanceUnit | Distance Unit | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FlightDate | Flight Date | date |  |  |  |  |
| FlightDurationInHours | Flight Duration (Hours) | double |  |  | 16 | 1 |
| FuelConsumption | Fuel Consumption | double |  |  | 18 | 2 |
| FuelConsumptionUnit | Fuel Consumption Unit | picklist |  | 255 |  |  |
| FuelEfficiency | Fuel Efficiency | double |  |  | 18 | 2 |
| FuelEfficiencyInMpg | Fuel Efficiency (mpg) | double |  |  | 18 | 2 |
| FuelEfficiencyUnit | Fuel Efficiency Unit | picklist |  | 255 |  |  |
| FuelType | Fuel Type | picklist |  | 255 |  |  |
| Id | Vehicle Asset Energy Use ID | id |  | 18 |  |  |
| IsCompanyOwnedAsset | Company-Owned Asset | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oEmissionsInKg | N2O Emissions (kg) | double |  |  | 16 | 6 |
| Name | Name | string |  | 255 |  |  |
| OtherEmssnFctrId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Scope1EmissionsInTco2e | Scope 1 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope2LocBasedEmssnInTco2e | Scope 2 Location-Based Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope2MktBasedEmssnInTco2e | Scope 2 Market-Based Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3DnstrmEmissionsInTco2e | Scope 3 Downstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scope3GhgCategory | Scope 3 GHG Category | picklist |  | 255 |  |  |
| Scope3UpstrmEmissionsInTco2e | Scope 3 Upstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| StartDate | Start Date | date |  |  |  |  |
| SuplScope1Emissions | Supplemental Scope 1 Emissions | double |  |  | 18 | 5 |
| SuplScope2LocationBasedEmssn | Supplemental Scope 2 Location-Based Emissions | double |  |  | 18 | 5 |
| SuplScope2MarketBasedEmssn | Supplemental Scope 2 Market-Based Emissions | double |  |  | 18 | 5 |
| SuplScope3DnstrmEmissions | Supplemental Scope 3 Downstream Emissions | double |  |  | 18 | 5 |
| SuplScope3UpstrmEmissions | Supplemental Scope 3 Upstream Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalFuelConsumptionInGal | Total Fuel Consumption (US Gallons) | double |  |  | 18 | 2 |
| TotalFuelConsumptionInLiter | Total Fuel Consumption (Liters) | double |  |  | 18 | 2 |
| VehicleAssetCrbnFtprntId | Vehicle Asset Carbon Footprint ID | reference |  | 18 |  |  |
| VehicleAssetEmssnSrcId | Vehicle Asset Emissions Source ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
