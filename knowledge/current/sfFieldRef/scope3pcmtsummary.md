---
title: "Scope3PcmtSummary"
domain: sfFieldRef
topic: scope3pcmtsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.083Z
estimatedTokens: 1066
keywords: [Scope3PcmtSummary, amount, organization, spends, individual, procurement, category, Scope, summary, quantifies, effect, atmospheric, warming, represented, tonnes]
---

# Scope3PcmtSummary

> Represents the amount that the organization spends for an individual
         procurement category. Scope 3 procurement summary quantifies the effect on atmospheric
         warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched
         emission factor from an associated Procurement Emission Factor Item record.

# Scope3PcmtSummary

Represents the amount that the organization spends for an individual procurement category. Scope 3 procurement summary quantifies the effect on atmospheric warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched emission factor from an associated Procurement Emission Factor Item record.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Scope3PcmtSummary in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalendarYear | Calendar Year | picklist |  | 255 |  |  |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyCode | Currency Code | picklist |  | 255 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Scope 3 Procurement Summary ID | id |  | 18 |  |  |
| InflationRate | Inflation Rate | percent |  |  | 16 | 4 |
| InflationRateCalculated | Current Inflation Rate | percent |  |  | 16 | 4 |
| InflationRateOverride | Inflation Rate Override | percent |  |  | 16 | 4 |
| IsComplete | Complete | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PcmtEmssnFctrId | Procurement Emissions Factor Set ID | reference |  | 18 |  |  |
| Scope3CrbnFtprntId | Scope 3 Carbon Footprint ID | reference |  | 18 |  |  |
| Scope3EmssnSrcId | Scope 3 Emissions Source ID | reference |  | 18 |  |  |
| Scp3EmssnBusinessTravel | Scope 3 Emissions from Business Travel (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnCapitalGood | Scope 3 Emissions from Capital Goods (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnDnstrmLeasedAsset | Scope 3 Emissions from Downstream Leased Asset (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnDnstrmTrnspDistr | Scope 3 Emissions from Downstream Transportation Distribution (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnEndLifeSoldProdt | Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnFranchise | Scope 3 Emissions from Franchise (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnFuelEnergyActivity | Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnInvestment | Scope 3 Emissions from Investment (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnProcSoldProduct | Scope 3 Emissions from Processing Sold Product (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnPurchGoodsService | Scope 3 Emissions from Purchased Goods Services (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnUpstrmLeasedAsset | Scope 3 Emissions from Upstream Leased Asset (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnUpstrmTrnspDistr | Scope 3 Emissions from Upstream Transportation Distribution (tCO2e) | double |  |  | 18 | 5 |
| Scp3EmssnUseOfSoldProduct | Scope 3 Emissions from Use of Sold Product (tCO2e) | double |  |  | 18 | 5 |
| Scp3UncatgEmissions | Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scp3WasteGenInOper | Scope 3 Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 5 |
| ScpEmssnEmployeeCommuting | Scope 3 Emissions from Employee Commuting (tCO2e) | double |  |  | 18 | 5 |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalScp3DnstrmEmissions | Total Scope 3 Downstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| TotalScp3Emissions | Total Scope 3 Emissions (tCO2e) | double |  |  | 18 | 5 |
| TotalScp3UpstrmEmissions | Total Scope 3 Upstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| TotalSpentAmount | Total Spent Amount | double |  |  | 18 | 5 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
