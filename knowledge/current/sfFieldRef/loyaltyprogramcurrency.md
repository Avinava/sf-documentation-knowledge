---
title: "LoyaltyProgramCurrency"
domain: sfFieldRef
topic: loyaltyprogramcurrency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.279Z
estimatedTokens: 481
keywords: [LoyaltyProgramCurrency, qualifying, non-qualifying, currencies, associated, program, currency, engagement, member, it’s, tier, group, represent, points, earns]
---

# LoyaltyProgramCurrency

> Represents qualifying and non-qualifying currencies associated with the
      program. Qualifying currency represents the engagement of a member with the program and it’s
      associated with a tier group. Non-qualifying currency represent the points that the member
      earns for redemption.

# LoyaltyProgramCurrency

Represents qualifying and non-qualifying currencies associated with the program. Qualifying currency represents the engagement of a member with the program and it’s associated with a tier group. Non-qualifying currency represent the points that the member earns for redemption.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramCurrency in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CostperUnit | Cost per Unit | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrencyType | Currency Type | picklist |  | 255 |  |  |
| ExpiryModel | Expiration Model | picklist |  | 255 |  |  |
| ExpiryPeriodFrequency | Expiration Interval | int | 9 |  |  |  |
| ExpiryPeriodUnit | Expiration Interval Unit | picklist |  | 255 |  |  |
| ExtendExpiration | Extend Expiration | picklist |  | 255 |  |  |
| HasEscrow | Has Escrow | boolean |  |  |  |  |
| Id | Currency ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| LoyaltyTierGroupId | Loyalty Tier Group ID | reference |  | 18 |  |  |
| Name | Currency Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
