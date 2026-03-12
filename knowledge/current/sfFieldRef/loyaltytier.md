---
title: "LoyaltyTier"
domain: sfFieldRef
topic: loyaltytier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.443Z
estimatedTokens: 363
keywords: [LoyaltyTier, tiers, loyalty, program, tier, group, sequential, order]
---

# LoyaltyTier

> Represents information about tiers of a loyalty program. A tier group
      has a set of tiers in a sequential order.

# LoyaltyTier

Represents information about tiers of a loyalty program. A tier group has a set of tiers in a sequential order.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyTier in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Color | Color | string |  | 9 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| Id | Loyalty Tier ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyTierGroupId | Loyalty Tier Group ID | reference |  | 18 |  |  |
| MaximumEligibleBalance | Maximum Eligible Balance | double |  |  | 18 | 2 |
| MinimumEligibleBalance | Minimum Eligible Balance | double |  |  | 18 | 2 |
| Name | Tier Name | string |  | 255 |  |  |
| SequenceNumber | Sequence Number | int | 4 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
