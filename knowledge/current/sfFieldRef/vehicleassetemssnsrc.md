---
title: "VehicleAssetEmssnSrc"
domain: sfFieldRef
topic: vehicleassetemssnsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.527Z
estimatedTokens: 537
keywords: [VehicleAssetEmssnSrc, assets, mobile, nature, energy, recorded, source, greenhouse, gas, emissions]
---

# VehicleAssetEmssnSrc

> Represents assets that are mobile in nature, use energy that can be recorded,
         and are the source of greenhouse gas emissions.

# VehicleAssetEmssnSrc

Represents assets that are mobile in nature, use energy that can be recorded, and are the source of greenhouse gas emissions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see VehicleAssetEmssnSrc in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessRegion | Business Region | picklist |  | 40 |  |  |
| City | City | string |  | 255 |  |  |
| Country | Country | picklist |  | 255 |  |  |
| CrbnEmssnScopeAlloc | Carbon Emissions Scope Allocation | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| FleetVehicleType | Fleet Vehicle Type | picklist |  | 255 |  |  |
| Id | Vehicle Asset Emissions Source ID | id |  | 18 |  |  |
| IsCompanyOwnedAsset | Company-Owned Asset | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeaseExpirationDate | Lease Expiration Date | date |  |  |  |  |
| LeaseIdentifier | Lease ID | string |  | 100 |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherEmssnFctrId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentEmissionSourceId | Vehicle Asset Emissions Source ID | reference |  | 18 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| State | State | string |  | 128 |  |  |
| StreetAddress | Street Address | string |  | 255 |  |  |
| StreetAddress2 | Street Address 2 | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VehicleIdentifier | Vehicle ID | string |  | 255 |  |  |
| VehicleType | Vehicle Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
