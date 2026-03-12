---
title: "LoyaltyPgmGroupMbrRlnsp"
domain: sfFieldRef
topic: loyaltypgmgroupmbrrlnsp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.180Z
estimatedTokens: 450
keywords: [LoyaltyPgmGroupMbrRlnsp, junction, Corporate, Individual, loyalty, program, member, part, group]
---

# LoyaltyPgmGroupMbrRlnsp

> Represents a junction between a Corporate or Individual type loyalty program
         member who is part of a group and the Group type loyalty program member.

# LoyaltyPgmGroupMbrRlnsp

Represents a junction between a Corporate or Individual type loyalty program member who is part of a group and the Group type loyalty program member.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmGroupMbrRlnsp in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CanMemberRedeemFromGroup | Member can redeem group points | boolean |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContributionCalculationType | Contribution Calculation Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Loyalty Program Group Account Member ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramGroupMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| MemberName | Member Name | string |  | 255 |  |  |
| MemberPointContributionPercent | Contribution Percentage | percent |  |  | 3 | 0 |
| MemberRole | Member Role | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| RelatedLoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
