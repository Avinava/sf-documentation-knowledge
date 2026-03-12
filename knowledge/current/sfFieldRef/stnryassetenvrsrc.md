---
title: "StnryAssetEnvrSrc"
domain: sfFieldRef
topic: stnryassetenvrsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.532Z
estimatedTokens: 720
keywords: [StnryAssetEnvrSrc, assets, stationary, nature, energy, recorded, source, greenhouse, gas, emissions]
---

# StnryAssetEnvrSrc

> Represents assets that are stationary in nature, use energy that can
         be recorded, and are the source of greenhouse gas emissions.

# StnryAssetEnvrSrc

Represents assets that are stationary in nature, use energy that can be recorded, and are the source of greenhouse gas emissions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetEnvrSrc in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessRegion | Business Region | picklist |  | 40 |  |  |
| City | City | string |  | 255 |  |  |
| Country | Country | picklist |  | 255 |  |  |
| CrbnEmssnScopeAllocId | Carbon Emissions Scope Allocation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| ElectricityEmssnFctrId | Electricity Emissions Factor Set ID | reference |  | 18 |  |  |
| EnvironmentalRiskId | Environmental Risk ID | reference |  | 18 |  |  |
| Id | Stationary Asset Environmental Source ID | id |  | 18 |  |  |
| IsCompanyOwnedAsset | Company-Owned Asset | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLeedCertified | LEED Certified | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeaseExpirationDate | Lease Expiration Date | date |  |  |  |  |
| LeaseIdentifier | Lease ID | string |  | 100 |  |  |
| Name | Name | string |  | 255 |  |  |
| OccupiedFloorArea | Occupied Floor Area | double |  |  | 18 | 0 |
| OccupiedFloorAreaUnit | Occupied Floor Area Unit | picklist |  | 255 |  |  |
| OtherEmssnFctrId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentEnvironmentalSourceId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| PremiseIdentifier | Premise ID | string |  | 255 |  |  |
| RefrigerantEmssnFctrId | Refrigerant Emissions Factor ID | reference |  | 18 |  |  |
| RegionalBldgEnergyIntensityId | Building Energy Intensity ID | reference |  | 18 |  |  |
| State | State | string |  | 128 |  |  |
| StationaryAssetIdentifier | Stationary Asset ID | string |  | 255 |  |  |
| StationaryAssetType | Stationary Asset Type | picklist |  | 40 |  |  |
| StreetAddress | Street Address | string |  | 255 |  |  |
| StreetAddress2 | Street Address 2 | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalFloorArea | Total Floor Area | double |  |  | 18 | 0 |
| TotalFloorAreaUnit | Total Floor Area Unit | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
