---
title: "SalesAgreementProductSchedule"
domain: sfFieldRef
topic: salesagreementproductschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.851Z
estimatedTokens: 545
keywords: [SalesAgreementProductSchedule, quantity, amount, pricing, product, category, particular, schedule, sales, agreement]
---

# SalesAgreementProductSchedule

> Represents the quantity or amount and the pricing information of a product or
      category for a particular schedule of the sales agreement.

# SalesAgreementProductSchedule

Represents the quantity or amount and the pricing information of a product or category for a particular schedule of the sales agreement.

For more information, see SalesAgreementProductSchedule in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualAmount | Actual Amount | currency |  |  | 18 | 0 |
| ActualQuantity | Actual Quantity | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DerivedPlannedAmount | Planned Amount | currency |  |  | 18 | 2 |
| DiscountPercentage | Discount Percentage | percent |  |  | 5 | 2 |
| EndDate | End Date | date |  |  |  |  |
| ForecastedAmount | Forecasted Amount | currency |  |  | 18 | 0 |
| ForecastedQuantity | Forecasted Quantity | int | 9 |  |  |  |
| Id | Sales Agreement Product Schedule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsUnderRevision | Under Revision | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PlannedAmount | Planned Amount | currency |  |  | 18 | 2 |
| PlannedQuantity | Planned Quantity | int | 9 |  |  |  |
| ProposedDerivedPlannedAmount | Proposed Derived Planned Amount | currency |  |  | 18 | 2 |
| ProposedDiscountPercentage | Proposed Discount Percentage | percent |  |  | 5 | 2 |
| ProposedPlannedAmount | Proposed Planned Amount | currency |  |  | 18 | 2 |
| ProposedPlannedQuantity | Proposed Planned Quantity | int | 9 |  |  |  |
| ProposedSalesPrice | Proposed Sales Price | currency |  |  | 18 | 2 |
| SalesAgreementProductId | Sales Agreement Product ID | reference |  | 18 |  |  |
| SalesPrice | Sales Price | currency |  |  | 18 | 2 |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
