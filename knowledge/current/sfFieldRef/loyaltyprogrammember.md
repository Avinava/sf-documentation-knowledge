---
title: "LoyaltyProgramMember"
domain: sfFieldRef
topic: loyaltyprogrammember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:03.312Z
estimatedTokens: 656
keywords: [LoyaltyProgramMember, member, belongs, loyalty, program, individual, corporate]
---

# LoyaltyProgramMember

> Represents information about member who belongs to a loyalty program.
      The member can be individual or corporate type.

# LoyaltyProgramMember

Represents information about member who belongs to a loyalty program. The member can be individual or corporate type.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramMember in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CanReceivePartnerPromotions | Receive Partner Promotion | boolean |  |  |  |  |
| CanReceivePromotions | Receive Promotion | boolean |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EnrollmentChannel | Enrollment Channel | picklist |  | 255 |  |  |
| EnrollmentDate | Enrollment Date | date |  |  |  |  |
| GroupCreatedByMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| GroupName | Group Name | string |  | 80 |  |  |
| Id | Loyalty Program Member ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEligibleForTierAssessment | Eligible For Tier Assessment | boolean |  |  |  |  |
| LastActivityDate | Last Activity Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberStatus | Member Status | picklist |  | 40 |  |  |
| MemberType | Member Type | picklist |  | 255 |  |  |
| MembershipEndDate | Membership End Date | date |  |  |  |  |
| MembershipLastRenewalDate | Membership Last Renewal Date | date |  |  |  |  |
| MembershipNumber | Membership Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| ReferralCode | Referral Code | string |  | 255 |  |  |
| ReferredById | Referred By ID | reference |  | 18 |  |  |
| RelatedCorporateMembershipId | Associated Corporate Membership ID | reference |  | 18 |  |  |
| StatementFrequency | Statement Frequency | picklist |  | 255 |  |  |
| StatementLastGeneratedDate | Statement Last Generated Date | datetime |  |  |  |  |
| StatementMethod | Statement Method | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
