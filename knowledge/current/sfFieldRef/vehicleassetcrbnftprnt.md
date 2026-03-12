---
title: "VehicleAssetCrbnFtprnt"
domain: sfFieldRef
topic: vehicleassetcrbnftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.502Z
estimatedTokens: 937
keywords: [VehicleAssetCrbnFtprnt, total, carbon, emissions, vehicles, footprint, quantifies, effect, atmospheric, warming, represented, metric, tonnes, dioxide, equivalent]
---

# VehicleAssetCrbnFtprnt

> Represents the total carbon emissions from vehicles. Carbon footprint
         quantifies the effect of atmospheric warming, which is represented in metric tonnes of
         carbon dioxide equivalent (tCO₂e).

# VehicleAssetCrbnFtprnt

Represents the total carbon emissions from vehicles. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see VehicleAssetCrbnFtprnt in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnualEmssnInventoryId | Annual Emissions Inventory ID | reference |  | 18 |  |  |
| AuditApprovalStatus | Audit Approval Status | picklist |  | 40 |  |  |
| CarbonInventoryRecordCount | Carbon Inventory Record Count | double |  |  | 16 | 0 |
| Ch4EmissionsInKg | CH4 Emissions (kg) | double |  |  | 16 | 6 |
| Co2EmissionsInKg | CO2 Emissions (kg) | double |  |  | 16 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| FootprintStage | Footprint Stage | picklist |  | 40 |  |  |
| Id | Vehicle Asset Carbon Footprint ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| N2oEmissionsInKg | N2O Emissions (kg) | double |  |  | 16 | 6 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReportingDate | Reporting Date | date |  |  |  |  |
| ReportingYear | Reporting Year | picklist |  | 255 |  |  |
| Scp3EmssnBusTravl | Scope 3 Emissions from Business Travel (tCO2e) | double |  |  | 15 | 2 |
| Scp3EmssnDnstrmTrnspDstr | Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) | double |  |  | 15 | 2 |
| Scp3EmssnEmpComut | Scope 3 Emissions from Employee Commute (tCO2e) | double |  |  | 15 | 2 |
| Scp3EmssnUpstrmTrnspDstr | Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) | double |  |  | 15 | 2 |
| Scp3UncategorizedEmssn | Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 2 |
| StartDate | Start Date | date |  |  |  |  |
| SuplScope1Emissions | Supplemental Scope 1 Emissions (tCO2e) | double |  |  | 18 | 4 |
| SuplScope2LocationBasedEmssn | Supplemental Scope 2 Location-Based Emissions | double |  |  | 18 | 5 |
| SuplScope2MarketBasedEmssn | Supplemental Scope 2 Market-Based Emissions | double |  |  | 18 | 5 |
| SuplScope3DnstrmEmissions | Supplemental Scope 3 Downstream Emissions | double |  |  | 18 | 5 |
| SuplScope3UpstrmEmissions | Supplemental Scope 3 Upstream Emissions | double |  |  | 18 | 5 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotFuelCnsmpInGallons | Total Fuel Consumption (Gallons) | double |  |  | 18 | 2 |
| TotFuelCnsmpInLiters | Total Fuel Consumption (Liters) | double |  |  | 18 | 2 |
| TotScope1EmissionsInTco2e | Total Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotScope2LocBasedEmissions | Total Scope 2 Location-Based Emissions | double |  |  | 18 | 2 |
| TotScope2MktBasedEmissions | Total Scope 2 Market-based Emissions | double |  |  | 18 | 2 |
| TotalScp3DnstrmEmissions | Total Scope 3 Downstream Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScp3UpstrmEmissions | Total Scope 3 Upstream Emissions (tCO2e) | double |  |  | 18 | 2 |
| VehicleAssetEmssnSrcId | Vehicle Asset Emissions Source ID | reference |  | 18 |  |  |
| VehicleType | Vehicle Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
