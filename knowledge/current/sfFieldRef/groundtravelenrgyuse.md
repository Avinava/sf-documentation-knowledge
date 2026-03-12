---
title: "GroundTravelEnrgyUse"
domain: sfFieldRef
topic: groundtravelenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.821Z
estimatedTokens: 565
keywords: [GroundTravelEnrgyUse, energy, consumption, ground, travel]
---

# GroundTravelEnrgyUse

> Represents the energy consumption related to ground travel.

# GroundTravelEnrgyUse

Represents the energy consumption related to ground travel.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GroundTravelEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| CostCenter | Cost Center | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyCode | Currency Code | picklist |  | 255 |  |  |
| Distance | Distance | double |  |  | 18 | 2 |
| DistanceUnit | Distance Unit | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| ExpenseType | Expense Type | picklist |  | 255 |  |  |
| GroundTravelEmssnFctrId | Ground Travel Emissions Factor ID | reference |  | 18 |  |  |
| Id | Ground Travel Energy Use ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PcmtEmssnFctrSetItemId | Procurement Emissions Factor Set Item ID | reference |  | 18 |  |  |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmissionsInTco2e | Scope 3 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| Scope3GhgCategory | Scope 3 GHG Category | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SuplScope3Emissions | Supplemental Scope 3 Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TravelerName | Traveler Name | string |  | 255 |  |  |
| TripCost | Trip Cost | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
