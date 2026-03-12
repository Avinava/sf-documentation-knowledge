---
title: "AirTravelEmssnFctr"
domain: sfFieldRef
topic: airtravelemssnfctr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.925Z
estimatedTokens: 857
keywords: [AirTravelEmssnFctr, emissions, factors, scope, commercial, air, travel]
---

# AirTravelEmssnFctr

> Represents the emissions factors for scope 3 commercial air travel.

# AirTravelEmssnFctr

Represents the emissions factors for scope 3 commercial air travel.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AirTravelEmssnFctr in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Ch4PsgrKmLongHaulInKgCo2e | CH4/Passenger-km for Long-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Ch4PsgrKmMediumHaulInKgCo2e | CH4/Passenger-km for Medium-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Ch4PsgrKmShortHaulInKgCo2e | CH4/Passenger-km for Short-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Ch4PsgrMileLongHaulInKgCo2e | CH4/Passenger-mile for Long-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Ch4PsgrMileMediumHaulInKgCo2e | CH4/Passenger-mile for Medium-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Ch4PsgrMileShortHaulInKgCo2e | CH4/Passenger-mile for Short-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Co2PsgrKmLongHaulInKg | CO2/Passenger-km for Long-Haul (kg) | double |  |  | 18 | 7 |
| Co2PsgrKmMediumHaulInKg | CO2/Passenger-km for Medium-Haul (kg) | double |  |  | 18 | 7 |
| Co2PsgrKmShortHaulInKg | CO2/Passenger-km for Short-Haul (kg) | double |  |  | 18 | 7 |
| Co2PsgrMileLongHaulInKg | CO2/Passenger-mile for Long-Haul (kg) | double |  |  | 18 | 7 |
| Co2PsgrMileMediumHaulInKg | CO2/Passenger-mile for Medium-Haul (kg) | double |  |  | 18 | 7 |
| Co2PsgrMileShortHaulInKg | CO2/Passenger-mile for Short-Haul (kg) | double |  |  | 18 | 7 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DistanceUnit | Distance Unit | picklist |  | 255 |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | picklist |  | 255 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Air Travel Emissions Factor ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LongHaulMinimumDistance | Long-Haul Minimum Distance | double |  |  | 18 | 1 |
| MediumHaulMaximumDistance | Medium-Haul Maximum Distance | double |  |  | 18 | 1 |
| N2oPsgrKmLongHaulInKgCo2e | N2O/Passenger-km for Long-Haul (kg CO2e) | double |  |  | 18 | 7 |
| N2oPsgrKmMediumHaulInKgCo2e | N2O/Passenger-km for Medium-Haul (kg CO2e) | double |  |  | 18 | 7 |
| N2oPsgrKmShortHaulInKgCo2e | N2O/Passenger-km for Short-Haul (kg CO2e) | double |  |  | 18 | 7 |
| N2oPsgrMileLongHaulInKgCo2e | N2O/Passenger-mile for Long-Haul (kg CO2e) | double |  |  | 18 | 7 |
| N2oPsgrMileMediumHaulInKgCo2e | N2O/Passenger-mile for Medium-Haul (kg CO2e) | double |  |  | 18 | 7 |
| N2oPsgrMileShortHaulInKgCo2e | N2O/Passenger-mile for Short-Haul (kg CO2e) | double |  |  | 18 | 7 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| ShortHaulMaximumDistance | Short-Haul Maximum Distance | double |  |  | 18 | 1 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
