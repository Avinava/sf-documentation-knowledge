---
title: "BldgEnrgyIntensity"
domain: sfFieldRef
topic: bldgenrgyintensity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.135Z
estimatedTokens: 773
keywords: [BldgEnrgyIntensity, average, energy, intensity, fuel, across, buildings, derive, data, published, sources, Alternatively, records, source, setting]
---

# BldgEnrgyIntensity

> Represents the average energy intensity by fuel type across a set of
         buildings. You can derive this data from published sources. Alternatively, you can do so by
         using energy use records as the data source and then setting up a window of time with some
         characteristics of the building size and type.

# BldgEnrgyIntensity

Represents the average energy intensity by fuel type across a set of buildings. You can derive this data from published sources. Alternatively, you can do so by using energy use records as the data source and then setting up a window of time with some characteristics of the building size and type.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BldgEnrgyIntensity in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnualEnergyIntensityInKwhM2 | Annual Energy Intensity (kWh/m2) | double |  |  | 13 | 3 |
| AnnualEnergyIntensityInKwhSqft | Annual Energy Intensity (kWh/sqft) | double |  |  | 13 | 3 |
| AreSysGenEnrgyUseRecIncluded | System Generated Energy Use Records Included | boolean |  |  |  |  |
| AveragePowerUsageEffectiveness | Average Power Usage Effectiveness | double |  |  | 11 | 3 |
| AveragingWindowEndDate | Averaging Window End Date | date |  |  |  |  |
| AveragingWindowStartDate | Averaging Window Start Date | date |  |  |  |  |
| BldgEnergyIntensityIdentifier | Building Energy Intensity ID | textarea |  | 32000 |  |  |
| BuildingAssetType | Building Asset Type | string |  | 255 |  |  |
| BuildingSize | Building Size | string |  | 255 |  |  |
| BuildingSizeCategoryId | Building Size Category ID | reference |  | 18 |  |  |
| BusinessRegion | Business Region | string |  | 255 |  |  |
| Country | Country | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionFactorDataSource | Emissions Factor Data Source | textarea |  | 32000 |  |  |
| EmissionFactorUpdateYear | Emissions Factor Update Year | string |  | 4 |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Building Energy Intensity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastCalculatedDate | Last Calculated Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumBuildingSizeInM2 | Maximum Building Size (m2) | double |  |  | 18 | 5 |
| MaximumBuildingSizeInSqft | Maximum Building Size (Sqft) | double |  |  | 18 | 5 |
| MinimumBuildingSizeInM2 | Minimum Building Size (m2) | double |  |  | 18 | 5 |
| MinimumBuildingSizeInSqft | Minimum Building Size (Sqft) | double |  |  | 18 | 5 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceDataLoadLogId | Reference Data Load Log ID | reference |  | 18 |  |  |
| RegionalDivision | Regional Division | picklist |  | 255 |  |  |
| State | State | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
