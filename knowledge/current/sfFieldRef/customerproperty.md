---
title: "CustomerProperty"
domain: sfFieldRef
topic: customerproperty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.321Z
estimatedTokens: 1078
keywords: [CustomerProperty, insurable, insured, customer]
---

# CustomerProperty

> Represents the insurable and insured properties of a customer.

# CustomerProperty

Represents the insurable and insured properties of a customer.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CustomerProperty in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| AnnualMileage | Expected Annual Mileage | int | 9 |  |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| BathroomCount | Number of Bathrooms | double |  |  | 18 | 0 |
| BedroomCount | Number of Bedrooms | double |  |  | 18 | 0 |
| BuiltUpArea | Built-Up Area | string |  | 100 |  |  |
| CeilingType | Ceiling Type | picklist |  | 40 |  |  |
| City | City | string |  | 40 |  |  |
| ConstructionClass | Construction Class | picklist |  | 40 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DaysDrivenTowork | Days Driven to Work (One Way) | int | 9 |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DwellingType | Dwelling Type | picklist |  | 40 |  |  |
| EngineDisplacementVolume | Engine Displacement Volume | int | 9 |  |  |  |
| FactoryPrice | Factory Price | currency |  |  | 18 | 2 |
| FairMarketValue | Fair Market Value | currency |  |  | 18 | 2 |
| FinancingType | Financing Type | picklist |  | 40 |  |  |
| FloorCount | Number of Floors | int | 9 |  |  |  |
| FloorType | Floor Type | picklist |  | 40 |  |  |
| FoundationType | Foundation Type | picklist |  | 40 |  |  |
| FuelType | Fuel Type | picklist |  | 40 |  |  |
| GarageSpaceCount | Number of Parking Spaces in Garage | int | 9 |  |  |  |
| GarageType | Garage Type | picklist |  | 40 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| GrossVehicleWeight | Gross Vehicle Weight | int | 9 |  |  |  |
| Id | Customer Property ID | id |  | 18 |  |  |
| IsBasementIncluded | Includes Basement | boolean |  |  |  |  |
| IsChimneyIncluded | Includes Chimney | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPassedSmogCheck | Passed Smog Check | boolean |  |  |  |  |
| IsSwimmingPoolIncluded | Includes Swimming Pool | boolean |  |  |  |  |
| KitchenCount | Number of Kitchens | double |  |  | 18 | 0 |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| LeasePeriod | Lease Period | int | 9 |  |  |  |
| LienHolderName | Lien Holder Name | string |  | 255 |  |  |
| LoadCapacity | Load Capacity | string |  | 255 |  |  |
| Longitude | Longitude | double |  |  | 18 | 15 |
| LotArea | Lot Area | string |  | 100 |  |  |
| Make | Make | string |  | 255 |  |  |
| MakeYear | Make Year | int | 9 |  |  |  |
| MilesDrivenToWork | Miles Driven to Work (One way) | int | 9 |  |  |  |
| ModelName | Model Name | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OdometerReading | Odometer Reading | int | 9 |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PassengerSeatCapacity | Passenger Seat Capacity | int | 9 |  |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| PrimaryOwnerId | Account ID | reference |  | 18 |  |  |
| PrimaryUse | Primary Use | picklist |  | 40 |  |  |
| PurchaseDate | Purchase Date | date |  |  |  |  |
| PurchasePrice | Purchase Price | currency |  |  | 18 | 2 |
| RegistrationNumber | Registration Number | string |  | 255 |  |  |
| RegistrationType | Registration Type | picklist |  | 40 |  |  |
| RoofType | Roof Type | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| State | State | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransmissionType | Transmission Type | picklist |  | 40 |  |  |
| Vin | VIN | string |  | 255 |  |  |
| YearBuilt | Year Built | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
