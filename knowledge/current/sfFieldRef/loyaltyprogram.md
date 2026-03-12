---
title: "LoyaltyProgram"
domain: sfFieldRef
topic: loyaltyprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.258Z
estimatedTokens: 370
keywords: [LoyaltyProgram, loyalty, program, organization, members, tiers, tier, groups, currencies, vouchers, benefits, partners, promotions, transactions, associated]
---

# LoyaltyProgram

> Represents the loyalty program within an organization. All the
      information related to members, tiers, tier groups, program currencies, vouchers, benefits,
      partners, promotions, transactions are associated with the program.

# LoyaltyProgram

Represents the loyalty program within an organization. All the information related to members, tiers, tier groups, program currencies, vouchers, benefits, partners, promotions, transactions are associated with the program.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgram in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 1333 |  |  |
| EscrowPeriod | Escrow Period | int | 9 |  |  |  |
| Id | Loyalty Program ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Program Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
