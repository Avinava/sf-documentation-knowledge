---
title: "PartyPhilanthropicMilestone"
domain: sfFieldRef
topic: partyphilanthropicmilestone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.884Z
estimatedTokens: 684
keywords: [PartyPhilanthropicMilestone, philanthropic, activities, financial, status, period, time, API, version, 63.0, later]
---

# PartyPhilanthropicMilestone

> Represents philanthropic activities and financial status for a period of
         time. This object is available in API version 63.0 and later.

# PartyPhilanthropicMilestone

Represents philanthropic activities and financial status for a period of time. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyPhilanthropicMilestone in the Fundraising Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AssetLiquidationValue | Asset Liquidation Value | currency |  |  | 18 | 2 |
| BusinessOwnershipValue | Business Ownership Value | currency |  |  | 18 | 2 |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | date |  |  |  |  |
| ExtendedSummary | Extended Summary | textarea |  | 32000 |  |  |
| GivingLevel | Giving Level | picklist |  | 40 |  |  |
| Id | Party Philanthropic Milestone ID | id |  | 18 |  |  |
| Income | Income | currency |  |  | 18 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherAssetsValue | Other Assets Value | currency |  |  | 18 | 2 |
| OtherNonprofitGiftAmount | Other Nonprofit Gift Amount | currency |  |  | 18 | 2 |
| OtherNonprofitGiftCount | Other Nonprofit Gift Count | int | 9 |  |  |  |
| OverallRating | Overall Rating | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PtyPhilanthropicAsmtCnt | Party Philanthropic Assessment Count | int | 9 |  |  |  |
| PtyPhilanthropicIndCnt | Party Philanthropic Indicator Count | int | 9 |  |  |  |
| PtyPhilanthropicOccrCnt | Party Philanthropic Occurrence Count | int | 9 |  |  |  |
| RealEstateValue | Real Estate Value | currency |  |  | 18 | 2 |
| ResponsiblePersonId | User ID | reference |  | 18 |  |  |
| RetirementSavingsAmount | Retirement Savings Amount | currency |  |  | 18 | 2 |
| ShortSummary | Short Summary | textarea |  | 1000 |  |  |
| StockValue | Stock Value | currency |  |  | 18 | 2 |
| StrengthsAndOpportunities | Strengths and Opportunities | textarea |  | 32000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WeaknessesAndDrawbacks | Weaknesses and Drawbacks | textarea |  | 32000 |  |  |
| WealthAmount | Wealth Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
