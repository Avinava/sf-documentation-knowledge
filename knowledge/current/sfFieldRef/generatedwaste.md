---
title: "GeneratedWaste"
domain: sfFieldRef
topic: generatedwaste
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.333Z
estimatedTokens: 743
keywords: [GeneratedWaste, waste, generated, operations, treating, end-of-life, products, were, sold]
---

# GeneratedWaste

> Represents the information on the waste generated in operations, the waste
         generated while treating end-of-life products that were sold, and so on.

# GeneratedWaste

Represents the information on the waste generated in operations, the waste generated while treating end-of-life products that were sold, and so on.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GeneratedWaste in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisposalSiteType | Disposal Site Type | picklist |  | 255 |  |  |
| DisposalType | Disposal Type | picklist |  | 40 |  |  |
| DisposedWasteQuantity | Disposed Waste Quantity | double |  |  | 18 | 5 |
| DisposedWasteQuantityUnit | Disposed Waste Quantity Unit | picklist |  | 255 |  |  |
| DisposedWasteQuantityinTonnes | Disposed Waste Quantity in Tonnes | double |  |  | 18 | 5 |
| EndDate | End Date | date |  |  |  |  |
| Id | Generated Waste ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHazardous | Hazardous | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Scope1EmissionsInTco2e | Scope 1 Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| Scp3DnstrmEndLifeSoldPrdct | Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| Scp3UpstrmWstGenInOper | Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 5 |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SuplScope1EmissionsInTco2e | Supplemental Scope 1 Emissions (tCO2e) | double |  |  | 18 | 5 |
| SuplScp3DnstrmEndLifeSoldPrdct | Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| SuplScp3UpstrmWstGenInOper | Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WasteFootprintId | Waste Footprint ID | reference |  | 18 |  |  |
| WasteType | Waste Type | picklist |  | 40 |  |  |
| WstDispoEmssnFctrId | Waste Disposal Emissions Factor ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
