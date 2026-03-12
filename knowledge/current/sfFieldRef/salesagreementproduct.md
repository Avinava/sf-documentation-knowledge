---
title: "SalesAgreementProduct"
domain: sfFieldRef
topic: salesagreementproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.830Z
estimatedTokens: 574
keywords: [SalesAgreementProduct, total, quantity, amount, pricing, product, category, across, time, period, sales, agreement]
---

# SalesAgreementProduct

> Represents the total quantity or amount and the default pricing information of
      a product or category across the total time period of the sales agreement.

# SalesAgreementProduct

Represents the total quantity or amount and the default pricing information of a product or category across the total time period of the sales agreement.

For more information, see SalesAgreementProduct in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DiscountPercentage | Discount Percentage | percent |  |  | 5 | 2 |
| Id | Sales Agreement Product ID | id |  | 18 |  |  |
| InitialPlannedAmount | Initial Planned Amount | currency |  |  | 18 | 2 |
| InitialPlannedQuantity | Initial Total Quantity | int | 9 |  |  |  |
| IsAddedAfterActivation | Added After Activation | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsUnderRevision | Under Revision | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| ProductCategoryId | Category ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SalesAgreementId | Sales Agreement ID | reference |  | 18 |  |  |
| SalesPrice | Sales Price | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalActualAmount | Total Actual Amount | currency |  |  | 18 | 2 |
| TotalActualQuantity | Total Actual Quantity | int | 9 |  |  |  |
| TotalForecastedAmount | Total Forecasted Amount | currency |  |  | 18 | 2 |
| TotalForecastedQuantity | Total Forecasted Quantity | int | 9 |  |  |  |
| TotalPlannedAmount | Total Planned Amount | currency |  |  | 18 | 2 |
| TotalPlannedQuantity | Total Planned Quantity | int | 9 |  |  |  |
| TotalProposedPlannedAmount | Total Proposed Planned Amount | currency |  |  | 18 | 2 |
| TotalProposedPlannedQuantity | Total Proposed Planned Quantity | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
