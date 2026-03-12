---
title: "AirTravelEnrgyUse"
domain: sfFieldRef
topic: airtravelenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.955Z
estimatedTokens: 757
keywords: [AirTravelEnrgyUse, energy, consumption, air, travel]
---

# AirTravelEnrgyUse

> Represents the energy consumption related to air travel.

# AirTravelEnrgyUse

Represents the energy consumption related to air travel.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AirTravelEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AirTravelEmssnFctrId | Air Travel Emissions Factor ID | reference |  | 18 |  |  |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| Ch4PassengerKmInKgCo2e | CH4/Passenger-km (kg CO2e) | double |  |  | 18 | 7 |
| Ch4PassengerMileInKgCo2e | CH4/Passenger-mile (kg CO2e) | double |  |  | 18 | 7 |
| Co2PassengerKmInKg | CO2/Passenger-km (kg) | double |  |  | 18 | 7 |
| Co2PassengerMileInKg | CO2/Passenger-mile (kg) | double |  |  | 18 | 7 |
| CostCenter | Cost Center | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DestinationCity | Destination City | string |  | 255 |  |  |
| DestinationCountry | Destination Country | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| HaulLength | Haul Length | string |  | 24 |  |  |
| Id | Air Travel Energy Use ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oPassengerKmInKgCo2e | N2O/Passenger-km (kg CO2e) | double |  |  | 18 | 7 |
| N2oPassengerMileInKgCo2e | N2O/Passenger-mile (kg CO2e) | double |  |  | 18 | 7 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmissionsInTco2e | Scope 3 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| SegmentDistance | Segment Distance | double |  |  | 18 | 1 |
| SegmentDistanceInMiles | Segment Distance (Miles) | double |  |  | 18 | 1 |
| SegmentDistanceUnit | Segment Distance Unit | picklist |  | 255 |  |  |
| SourceCity | Source City | string |  | 255 |  |  |
| SourceCountry | Source Country | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SuplScope3Emissions | Supplemental Scope 3 Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TravelerBaseCity | Traveler Base City | string |  | 255 |  |  |
| TravelerBaseCountry | Traveler Base Country | picklist |  | 255 |  |  |
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
