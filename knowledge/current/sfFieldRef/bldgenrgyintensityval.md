---
title: "BldgEnrgyIntensityVal"
domain: sfFieldRef
topic: bldgenrgyintensityval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.159Z
estimatedTokens: 460
keywords: [BldgEnrgyIntensityVal, calculated, average, energy, intensity, individual, fuel, across, buildings, record, stores, function, floor, area, occupied]
---

# BldgEnrgyIntensityVal

> Represents the calculated average energy intensity for an individual fuel
         type across a set of buildings. Each record stores the fuel use intensity as a function of
         the floor area of the occupied space of that building.

# BldgEnrgyIntensityVal

Represents the calculated average energy intensity for an individual fuel type across a set of buildings. Each record stores the fuel use intensity as a function of the floor area of the occupied space of that building.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BldgEnrgyIntensityVal in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnualIntensityValueInKwhM2 | Annual Intensity Value (kWh/m2) | double |  |  | 13 | 3 |
| AnnualIntensityValueInKwhSqft | Annual Intensity Value (kWh/sqft) | double |  |  | 13 | 3 |
| BuildingEnergyIntensityId | Building Energy Intensity ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnergyUseRecordCount | Energy Use Record Count | double |  |  | 5 | 0 |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| FuelType | Fuel Type | picklist |  | 255 |  |  |
| Id | Building Energy Intensity Value ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NumberOfDaysUsedForCalc | Number of Days Used For Calculation | double |  |  | 5 | 0 |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
