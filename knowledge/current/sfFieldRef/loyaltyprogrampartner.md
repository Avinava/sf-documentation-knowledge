---
title: "LoyaltyProgramPartner"
domain: sfFieldRef
topic: loyaltyprogrampartner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.371Z
estimatedTokens: 588
keywords: [LoyaltyProgramPartner, partners, associated, loyalty, program, accrual, partner, redemption]
---

# LoyaltyProgramPartner

> Represents partners that are associated with a given loyalty program. Partners
      can be an accrual partner, a redemption partner, or both.

# LoyaltyProgramPartner

Represents partners that are associated with a given loyalty program. Partners can be an accrual partner, a redemption partner, or both.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramPartner in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccrualCostperUnit | Accrual Cost per Unit | currency |  |  | 18 | 2 |
| AlertValue | Alert Value | double |  |  | 18 | 2 |
| BillingType | Billing Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditedPoints | Credited Points | double |  |  | 18 | 2 |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DebitedPoints | Debited Points | double |  |  | 18 | 2 |
| Id | Loyalty Program Partner ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastProcessedDateTime | Last Processed Date Time | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartnerCategory | Program Partnership Category | picklist |  | 40 |  |  |
| PartnerIndustry | Industry | picklist |  | 40 |  |  |
| PartnerStatus | Status | picklist |  | 255 |  |  |
| PartnerType | Type | picklist |  | 255 |  |  |
| PartnershipEndDate | Program Partnership End Date | date |  |  |  |  |
| PartnershipStartDate | Program Partnership Start Date | date |  |  |  |  |
| PointsBalance | Points Balance | double |  |  | 18 | 2 |
| PostpaidBillAmount | Postpaid Bill Amount | currency |  |  | 18 | 2 |
| PurchasedPoints | Purchased Points | double |  |  | 18 | 2 |
| RedemptionCostperUnit | Redemption Cost per Unit | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
