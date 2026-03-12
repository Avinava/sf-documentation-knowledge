---
title: "WasteFootprint"
domain: sfFieldRef
topic: wastefootprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.050Z
estimatedTokens: 681
keywords: [WasteFootprint, volume, aggregated, waste, carbon, emissions, generated, either, part, operations, end-, of-, life, product]
---

# WasteFootprint

> Represents the volume of aggregated waste and carbon emissions from waste
         generated either as part of operations or during the end- of- life of a product.

# WasteFootprint

Represents the volume of aggregated waste and carbon emissions from waste generated either as part of operations or during the end- of- life of a product.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WasteFootprint in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnualEmssnInventoryId | Annual Emissions Inventory ID | reference |  | 18 |  |  |
| AuditApprovalStatus | Audit Approval Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FootprintStage | Footprint Stage | picklist |  | 40 |  |  |
| GeneratedWasteDetailRecordCnt | Generated Waste Detail Record Count | double |  |  | 16 | 0 |
| Id | Waste Footprint ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReportingDate | Reporting Date | date |  |  |  |  |
| ReportingYear | Reporting Year | picklist |  | 255 |  |  |
| Scope1EmissionsInTco2e | Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| Scp3DnstrmEndLifeSoldPrdct | Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scp3UpstrmWstGenInOper | Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 2 |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SuplScope1EmissionsInTco2e | Supplemental Scope 1 Emissions (tCO2e) | double |  |  | 18 | 5 |
| SuplScp3DnstrmEndLifeSoldPrdct | Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| SuplScp3UpstrmWstGenInOper | Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 5 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalWasteQuantityinTonnes | Total Waste Quantity in Tonnes | double |  |  | 18 | 5 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
