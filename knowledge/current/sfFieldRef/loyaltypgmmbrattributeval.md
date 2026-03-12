---
title: "LoyaltyPgmMbrAttributeVal"
domain: sfFieldRef
topic: loyaltypgmmbrattributeval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.196Z
estimatedTokens: 411
keywords: [LoyaltyPgmMbrAttributeVal, reached, loyalty, program, member, engagement, attribute]
---

# LoyaltyPgmMbrAttributeVal

> Represents information about the value reached by a loyalty program member
         for an engagement attribute.

# LoyaltyPgmMbrAttributeVal

Represents information about the value reached by a loyalty program member for an engagement attribute.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmMbrAttributeVal in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CumulativeValue | Cumulative Value | double |  |  | 18 | 2 |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentValue | Current Value | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Loyalty Program Member Attribute Value ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastResetDate | Last Reset Date | date |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyPgmEngmtAttributeId | Loyalty Program Engagement Attribute ID | reference |  | 18 |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| ResetCount | Reset Count | int | 9 |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
