---
title: "LoyaltyMembershipLifecycle"
domain: sfFieldRef
topic: loyaltymembershiplifecycle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.129Z
estimatedTokens: 397
keywords: [LoyaltyMembershipLifecycle, member's, lifecycle, loyalty, program]
---

# LoyaltyMembershipLifecycle

> Represents information about a member's lifecycle in the loyalty
         program.

# LoyaltyMembershipLifecycle

Represents information about a member's lifecycle in the loyalty program.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyMembershipLifecycle in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Comment | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveEndDate | Effective End Date | date |  |  |  |  |
| EffectiveStartDate | Effective Start Date | date |  |  |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Loyalty Membership Lifecycle ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| MembershipStatus | Membership Status | picklist |  | 40 |  |  |
| MembershipType | Membership Type | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
