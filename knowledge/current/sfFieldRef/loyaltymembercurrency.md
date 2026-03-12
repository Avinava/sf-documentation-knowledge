---
title: "LoyaltyMemberCurrency"
domain: sfFieldRef
topic: loyaltymembercurrency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.099Z
estimatedTokens: 606
keywords: [LoyaltyMemberCurrency, point, balance, member, particular, currency]
---

# LoyaltyMemberCurrency

> Represents the information about point balance for a member and a particular
      currency.

# LoyaltyMemberCurrency

Represents the information about point balance for a member and a particular currency.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyMemberCurrency in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BalanceBeforeReset | Balance Before Reset | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EscrowPointsBalance | Escrow Points Balance | double |  |  | 18 | 2 |
| ExpirablePoints | Total Expirable Points | double |  |  | 18 | 2 |
| Id | Loyalty Member Currency ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastAccrualProcessedDate | Last Accrual Processed Date | datetime |  |  |  |  |
| LastEscrowProcessedDate | Last Escrow Processed Date | datetime |  |  |  |  |
| LastExpirationProcessRunDate | Last Expiration Process Run Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastResetDate | Last Reset Date | date |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| LoyaltyProgramCurrencyId | Currency ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| NextResetDate | Next Reset Date | date |  |  |  |  |
| PointsBalBeforeSecondLastReset | Points Balance Bef Second To Last Reset | double |  |  | 18 | 2 |
| PointsBalance | Points Balance | double |  |  | 18 | 2 |
| RedemStlPendFromDateTime | Redemption Settlement Pending From Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalEscrowPointsAccrued | Total Escrow Points Accrued | double |  |  | 18 | 2 |
| TotalEscrowRolloverPoints | Total Escrow Rollover Points | double |  |  | 18 | 2 |
| TotalPointsAccrued | Total Points Accrued | double |  |  | 18 | 2 |
| TotalPointsExpired | Total Points Expired | double |  |  | 18 | 2 |
| TotalPointsRedeemed | Total Points Redeemed | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
