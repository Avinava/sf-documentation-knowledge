---
title: "LoyaltyProgramMemberMerge"
domain: sfFieldRef
topic: loyaltyprogrammembermerge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.352Z
estimatedTokens: 409
keywords: [LoyaltyProgramMemberMerge, merged, loyalty, program, memberships]
---

# LoyaltyProgramMemberMerge

> Represents information about merged loyalty program memberships.

# LoyaltyProgramMemberMerge

Represents information about merged loyalty program memberships.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramMemberMerge in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Loyalty Program Member Merge ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Reason | Reason | string |  | 255 |  |  |
| SourceMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| SrcMbrDataBody | Source Member Data Body | base64 |  |  |  |  |
| SrcMbrDataContentType | Source Member Data Content Type | picklist |  | 255 |  |  |
| SrcMbrDataLength | Source Member Data Length | int | 9 |  |  |  |
| SrcMbrDataName | Source Member Data Name | string |  | 40 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
