---
title: "Scope3PcmtItem"
domain: sfFieldRef
topic: scope3pcmtitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.059Z
estimatedTokens: 698
keywords: [Scope3PcmtItem, procurement, corporate, spending, entry, records, considered, amount, organization, spends, goods, services]
---

# Scope3PcmtItem

> Represents the procurement (corporate spending) entry records. Procurement is
         considered as the amount that the organization spends on goods and services.

# Scope3PcmtItem

Represents the procurement (corporate spending) entry records. Procurement is considered as the amount that the organization spends on goods and services.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Scope3PcmtItem in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculatedScope3EmssnInTco2e | Scope 3 Spend-Based Emissions (tCO2e) | double |  |  | 18 | 5 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Scope 3 Procurement Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PcmtEmssnFctrSetItemId | Procurement Emissions Factor Set Item ID | reference |  | 18 |  |  |
| ProcurementSummaryId | Scope 3 Procurement Summary ID | reference |  | 18 |  |  |
| ProductEmissionsFactorId | Product Emissions Factor ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| PurchaseQuantity | Purchase Quantity | double |  |  | 18 | 5 |
| ReportDate | Report Date | date |  |  |  |  |
| Scope3EmissionsCalculationType | Scope 3 Emissions Calculation Type | picklist |  | 255 |  |  |
| Scope3EmissionsInTco2 | Final Scope 3 Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scope3GhgCategory | Scope 3 GHG Category | picklist |  | 255 |  |  |
| Scp3QtyBsdEmssnInTco2e | Scope 3 Quantity-Based Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scp3UncatgEmissions | Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 5 |
| SpendingCategory1 | Spending Category 1 | string |  | 255 |  |  |
| SpendingCategory2 | Spending Category 2 | string |  | 255 |  |  |
| SpendingCategory3 | Spending Category 3 | string |  | 255 |  |  |
| SpentAmount | Spent Amount | double |  |  | 18 | 2 |
| SpentDate | Spent Date | date |  |  |  |  |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SustainabilityScorecardId | Sustainability Scorecard ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotScpe3EmssnPerMillionSpent | Total Scope 3 Emissions per Million Spent (tCO2e) | double |  |  | 18 | 8 |
| UnitOfMeasure | Unit of Measure | picklist |  | 255 |  |  |
| VendorPrvdScope3EmssnInTco2e | Scope 3 Emissions Override (tCO2e) | double |  |  | 18 | 5 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
