---
title: "LoyaltyMemberTier"
domain: sfFieldRef
topic: loyaltymembertier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.118Z
estimatedTokens: 396
keywords: [LoyaltyMemberTier, current, tier, member, across, groups]
---

# LoyaltyMemberTier

> Represents information about the current tier of the member across tier
      groups.

# LoyaltyMemberTier

Represents information about the current tier of the member across tier groups.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyMemberTier in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AreBenefitsAssigned | Are Benefits Assigned | boolean |  |  |  |  |
| ChangeReasonType | Change Reason Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| Id | Loyalty Member Tier ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| LoyaltyTierGroupId | Loyalty Tier Group ID | reference |  | 18 |  |  |
| LoyaltyTierId | Loyalty Tier ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| ReasonForChange | Reason for Change | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TierExpirationDate | Tier Expiration Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
