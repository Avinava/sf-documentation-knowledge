---
title: "LoyaltyPgmEngmtAttrProm"
domain: sfFieldRef
topic: loyaltypgmengmtattrprom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.151Z
estimatedTokens: 344
keywords: [LoyaltyPgmEngmtAttrProm, junction, Loyalty, Program, Engagement, Attribute, Promotion, Associate, want, track, period]
---

# LoyaltyPgmEngmtAttrProm

> Represents a junction between Loyalty Program Engagement Attribute and
         Promotion. Associate an engagement attribute with a promotion if you want to track the
         engagement attribute during the promotion period.

# LoyaltyPgmEngmtAttrProm

Represents a junction between Loyalty Program Engagement Attribute and Promotion. Associate an engagement attribute with a promotion if you want to track the engagement attribute during the promotion period.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmEngmtAttrProm in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Loyalty Program Engagement Attribute Promotion ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramEngmtAttrId | Loyalty Program Engagement Attribute ID | reference |  | 18 |  |  |
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
