---
title: "RentalCarEnrgyUse"
domain: sfFieldRef
topic: rentalcarenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.200Z
estimatedTokens: 702
keywords: [RentalCarEnrgyUse, energy, consumption, rental, cars]
---

# RentalCarEnrgyUse

> Represents the energy consumption related to rental cars.

# RentalCarEnrgyUse

Represents the energy consumption related to rental cars.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RentalCarEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| Ch4EmissionsInKg | CH4 Emissions (kg) | double |  |  | 16 | 6 |
| Co2EmissionsInKg | CO2 Emissions (kg) | double |  |  | 16 | 6 |
| CostCenter | Cost Center | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Distance | Distance | double |  |  | 18 | 2 |
| DistanceUnit | Distance Unit | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FuelEfficiencyInLkm | Fuel Efficiency (L/100 km) | double |  |  | 18 | 2 |
| FuelEfficiencyInMpg | Fuel Efficiency (mpg) | double |  |  | 18 | 2 |
| FuelType | Fuel Type | picklist |  | 255 |  |  |
| Id | Rental Car Energy Use ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oEmissionsInKg | N2O Emissions (kg) | double |  |  | 16 | 6 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RentalCarCompanyCode | Rental Car Company Code | string |  | 100 |  |  |
| RentalCarCompanyName | Rental Car Company Name | string |  | 255 |  |  |
| RentalCarEmssnFctrId | Rental Car Emissions Factor ID | reference |  | 18 |  |  |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmissionsInTco2e | Scope 3 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| Scope3GhgCategory | Scope 3 GHG Category | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SuplScope3Emissions | Supplemental Scope 3 Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalFuelConsumptionInGal | Total Fuel Consumption (US Gallons) | double |  |  | 18 | 2 |
| TotalFuelConsumptionInLiter | Total Fuel Consumption (Liters) | double |  |  | 18 | 2 |
| TravelerName | Traveler Name | string |  | 255 |  |  |
| VendorProvidedEmissionsInTco2e | Vendor-Provided Emissions (tCO2e) | double |  |  | 16 | 6 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
