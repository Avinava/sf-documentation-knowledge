---
title: "FrgtHaulingEnrgyUse"
domain: sfFieldRef
topic: frgthaulingenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.698Z
estimatedTokens: 563
keywords: [FrgtHaulingEnrgyUse, energy, consumption, freight, hauling]
---

# FrgtHaulingEnrgyUse

> Represents the energy consumption related to freight hauling.

# FrgtHaulingEnrgyUse

Represents the energy consumption related to freight hauling.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FrgtHaulingEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| Ch4EmissionsInKg | CH4 Emissions (kg) | double |  |  | 18 | 8 |
| Co2EmissionsInKg | CO2 Emissions (kg) | double |  |  | 18 | 8 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Distance | Distance | double |  |  | 18 | 2 |
| DistanceUnit | Distance Unit | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FreightHaulingMode | Freight Hauling Mode | picklist |  | 40 |  |  |
| FrgtHaulingEmssnFctrId | Freight Hauling Emissions Factor ID | reference |  | 18 |  |  |
| Id | Freight Hauling Energy Use ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oEmissionsInKg | N2O Emissions (kg) | double |  |  | 18 | 8 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Scope3Category | Scope 3 Category | picklist |  | 255 |  |  |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmissionsInTco2e | Scope 3 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SuplScope3Emissions | Supplemental Scope 3 Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Weight | Weight | double |  |  | 18 | 1 |
| WeightUnit | Weight Unit | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
