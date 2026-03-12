---
title: "LoyaltyPgmMbrPromEligView"
domain: sfFieldRef
topic: loyaltypgmmbrpromeligview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.212Z
estimatedTokens: 725
keywords: [LoyaltyPgmMbrPromEligView, virtual, consolidated, view, loyalty, program, member’s, eligibility, promotion, their, enrollment, status, eligible, promotions]
---

# LoyaltyPgmMbrPromEligView

> Represents a virtual object that provides a consolidated view of the
         loyalty program member’s eligibility for a promotion and their enrollment status in
         eligible promotions.

# LoyaltyPgmMbrPromEligView

Represents a virtual object that provides a consolidated view of the loyalty program member’s eligibility for a promotion and their enrollment status in eligible promotions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmMbrPromEligView in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CurrPromotionLiabilityAmt | Current Promotion Liability Amount | currency |  |  | 18 | 2 |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentPromotionPointsCount | Current Promotion Points Count | int | 9 |  |  |  |
| DefaultVoucherDefinitionId | Voucher Definition ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DoesPromHavePtWithFctr | Promotion Have Points with Factor | boolean |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| ExternalId | External ID | string |  | 255 |  |  |
| FulfillmentAction | Fulfillment Action | picklist |  | 255 |  |  |
| Id | Loyalty Program Member Promotion Eligibility View ID | id |  | 18 |  |  |
| IsMbrEligBsdCmpnOrSgmt | Eligible Based on Segment Or Campaign | boolean |  |  |  |  |
| IsPromotionEnrollmentRqr | Enrollment Required | boolean |  |  |  |  |
| IssuedPromotionVoucherCount | Issued Promotion Voucher Count | int | 9 |  |  |  |
| LoyaltyProgramCurrencyId | Currency ID | reference |  | 18 |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| LoyaltyPromotionType | Loyalty Promotion Type | picklist |  | 255 |  |  |
| MaxPromotionLiabilityAmount | Maximum Promotion Liability Amount | currency |  |  | 18 | 2 |
| MaxPromotionVoucherCount | Maximum Promotion Voucher Count | int | 9 |  |  |  |
| MaximumPromotionRewardValue | Maximum Promotion Reward Value | int | 9 |  |  |  |
| MemberEligibilityCategory | Member Eligibility Category | picklist |  | 255 |  |  |
| Objective | Objective | textarea |  | 1000 |  |  |
| PromEnrollmentStartDate | Promotion Enrollment Start Date | date |  |  |  |  |
| PromotionCumulativeUsageTgt | Promotion Cumulative Usage Target | int | 9 |  |  |  |
| PromotionEnrollmentEndDate | Promotion Enrollment End Date | date |  |  |  |  |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| PromotionImageUrl | Promotion Image URL | url |  | 255 |  |  |
| PromotionName | Name | string |  | 255 |  |  |
| PromotionPointFactor | Promotion Point Factor | double |  |  | 18 | 0 |
| PromotionTrxnJournalType | Promotion Transaction Journal Type | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| TotalPromotionRewardPointsVal | Total Promotion Reward Points Value | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
