---
title: "Scope3CrbnFtprnt"
domain: sfFieldRef
topic: scope3crbnftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.009Z
estimatedTokens: 1486
keywords: [Scope3CrbnFtprnt, total, carbon, emissions, scope, activities, footprint, quantifies, effect, atmospheric, warming, represented, metric, tonnes, dioxide]
---

# Scope3CrbnFtprnt

> Represents the total carbon emissions from scope 3 activities. Carbon
         footprint quantifies the effect of atmospheric warming, which is represented in metric
         tonnes of carbon dioxide equivalent (tCO₂e).

# Scope3CrbnFtprnt

Represents the total carbon emissions from scope 3 activities. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Scope3CrbnFtprnt in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnualEmssnInventoryId | Annual Emissions Inventory ID | reference |  | 18 |  |  |
| AuditApprovalStatus | Audit Approval Status | picklist |  | 40 |  |  |
| CarbonInventoryRecordCount | Carbon Inventory Record Count | double |  |  | 16 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| FootprintStage | Footprint Stage | picklist |  | 40 |  |  |
| Id | Scope 3 Carbon Footprint ID | id |  | 18 |  |  |
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
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| Scp3EmssnCapitalGood | Scope 3 Emissions from Capital Goods (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnDnstrmLeasedAsset | Scope 3 Emissions from Downstream Leased Asset (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnDnstrmTrnspDistr | Scope 3 Emissions from Downstream Transportation Distribution (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnEmployeeCommuting | Scope 3 Emissions from Employee Commuting (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnEndLifeSoldProdt | Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnFranchise | Scope 3 Emissions from Franchise (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnFuelEnergyActivity | Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnInvestment | Scope 3 Emissions from Investments (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnProcSoldProduct | Scope 3 Emissions from Processing Sold Products (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnPurchGoodsService | Scope 3 Emissions from Purchased Goods Services (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnUpstrmLeasedAsset | Scope 3 Emissions from Upstream Leased Assets (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnUpstrmTrnspDistr | Scope 3 Emissions from Scope 3 Upstream Transportation Distribution (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnUseOfSoldProduct | Scope 3 Emissions from Use of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| Scp3UncatgEmissions | Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scp3WasteGenInOper | Scope 3 Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 5 |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SuplScope3Emission | Supplemental Scope 3 Emissions (tCO2e) | double |  |  | 18 | 5 |
| SupplDnstrmLsdAst | Supplemental Scope 3 Emissions from Downstream Leased Assets (tCO2e) | double |  |  | 18 | 5 |
| SupplEndLifeTreatSoldPrdct | Supplemental Scope 3 Emissions from End-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| SupplFuelEnrgyRelaActv | Supplemental Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) | double |  |  | 18 | 5 |
| SupplProcessingSoldPrdct | Supplemental Scope 3 Emissions from Processing of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| SupplPurchGoodSrvcs | Supplemental Scope 3 Emissions from Purchased Goods Services (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnBizTravl | Supplemental Scope 3 Emissions from Business Travel (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnCptlGoods | Supplemental Scope 3 Emissions from Capital Goods (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnDnstrmTrnspDstr | Supplemental Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnEmpComut | Supplemental Scope 3 Emissions from Employee Commuting (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnFranch | Supplemental Scope 3 Emissions from Franchises (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnInvestments | Supplemental Scope 3 Emissions from Investments (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3EmssnWstGenOper | Supplemental Scope 3 Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 5 |
| SupplScp3UncatgEmssn | Supplemental Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 5 |
| SupplUpstrmLsdAst | Supplemental Scope 3 Emissions from Upstream Leased Assets (tCO2e) | double |  |  | 18 | 5 |
| SupplUpstrmTrnspDstr | Supplemental Scope 3 Emissions from Upstream Transportation Distribution (tCO2e) | double |  |  | 18 | 5 |
| SupplUseSoldPrdct | Supplemental Scope 3 Emissions from Use of Sold Products (tCO2e) | double |  |  | 18 | 5 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotScope3EmissionsInTco2e | Total Scope 3 Emissions (tCO2e) | double |  |  | 18 | 5 |
| TotalScp3DnstrmEmissions | Total Scope 3 Downstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| TotalScp3EmssnBusTrvl | Total Scope 3 Emissions from Business Travel (tCO2e) | double |  |  | 18 | 5 |
| TotalScp3UpstrmEmissions | Total Scope 3 Upstream Emissions (tCO2e) | double |  |  | 18 | 5 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
