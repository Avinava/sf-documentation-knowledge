---
title: "LoyaltyProgramMbrPromotion"
domain: sfFieldRef
topic: loyaltyprogrammbrpromotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.297Z
estimatedTokens: 417
keywords: [LoyaltyProgramMbrPromotion, promotions, applied, loyalty, program, member, Tracks, enrollment, status, promotion, progress]
---

# LoyaltyProgramMbrPromotion

> Represents details about the promotions to be applied for a loyalty program
      member. Tracks the enrollment status, promotion status, and progress for a promotion of a
      member.

# LoyaltyProgramMbrPromotion

Represents details about the promotions to be applied for a loyalty program member. Tracks the enrollment status, promotion status, and progress for a promotion of a member.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramMbrPromotion in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CumulativeUsageCompletePercent | Cumulative Usage Complete Percentage | percent |  |  | 5 | 2 |
| CumulativeUsageCompleted | Cumulative Usage Completed | int | 9 |  |  |  |
| CumulativeUsageTarget | Cumulative Usage Target | int | 9 |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Loyalty Program Member Promotion ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnrollmentActive | Enrollment active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
