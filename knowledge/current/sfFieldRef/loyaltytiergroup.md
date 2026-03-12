---
title: "LoyaltyTierGroup"
domain: sfFieldRef
topic: loyaltytiergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.457Z
estimatedTokens: 480
keywords: [LoyaltyTierGroup, tier, groups, loyalty, program, group, categorizes, members, their, points]
---

# LoyaltyTierGroup

> Represents information about tier groups of a loyalty program. Tier
      group categorizes members based on their loyalty points.

# LoyaltyTierGroup

Represents information about tier groups of a loyalty program. Tier group categorizes members based on their loyalty points.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyTierGroup in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| ExtendExpiration | Extend Expiration | picklist |  | 255 |  |  |
| Id | Loyalty Tier Group ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHiddenToMembers | Hidden To Members | boolean |  |  |  |  |
| IsPrimary | Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| Name | Tier Group Name | string |  | 255 |  |  |
| QpResetDate | Qualifying Points Reset Date | date |  |  |  |  |
| QpResetFrequency | Qualifying Points Reset Frequency | int | 9 |  |  |  |
| QpResetPeriod | Qualifying Points Reset Period | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TierAssessmentCurrencyId | Currency ID | reference |  | 18 |  |  |
| TierModel | Tier Model | picklist |  | 255 |  |  |
| TierPeriodQuantity | Period Quantity | int | 9 |  |  |  |
| TierPeriodUnit | Period Duration Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
