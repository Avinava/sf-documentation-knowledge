---
title: "Voucher"
domain: sfFieldRef
topic: voucher
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.907Z
estimatedTokens: 606
keywords: [Voucher, that's, issued, loyalty, program, member]
---

# Voucher

> Represents details about a voucher that's issued to a loyalty program
      member.

# Voucher

Represents details about a voucher that's issued to a loyalty program member.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Voucher in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BenefitId | Benefit ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DiscountPercent | Discount Percentage | int | 9 |  |  |  |
| EffectiveDate | Effective Date | date |  |  |  |  |
| EffectiveDateTime | Effective Date Time | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| ExpirationDateTime | Expiration Date Time | datetime |  |  |  |  |
| FaceValue | Face Value | currency |  |  | 18 | 2 |
| Id | Voucher ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| Name | Voucher Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| Reason | Reason | string |  | 255 |  |  |
| RedeemedValue | Redeemed Value | currency |  |  | 18 | 2 |
| RemainingValue | Remaining Value | currency |  |  | 18 | 2 |
| ReservationKey | Reservation Key | string |  | 255 |  |  |
| ReservedDateTime | Reserved Date Time | datetime |  |  |  |  |
| ReservedValue | Reserved Value | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionJournalId | Transaction Journal ID | reference |  | 18 |  |  |
| UseDate | Use Date | date |  |  |  |  |
| VoucherCode | Voucher Code | string |  | 255 |  |  |
| VoucherDefinitionId | Voucher Definition ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
