---
title: "LoyaltyPgmEngmtAttribute"
domain: sfFieldRef
topic: loyaltypgmengmtattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.164Z
estimatedTokens: 448
keywords: [LoyaltyPgmEngmtAttribute, engagement, attribute, loyalty, program]
---

# LoyaltyPgmEngmtAttribute

> Represents information about an engagement attribute for a loyalty
         program.

# LoyaltyPgmEngmtAttribute

Represents information about an engagement attribute for a loyalty program.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmEngmtAttribute in the Loyalty Management Developer Guide and Referral Marketing Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DefaultValue | Default Value | string |  | 255 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Loyalty Program Engagement Attribute ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| MaximumResetCountPerPeriod | Maximum Reset Count Per Period | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ResetValueOn | Reset Value On | string |  | 255 |  |  |
| ShouldOverwriteAttrCurrVal | Overwrite Attribute Current Value | boolean |  |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetValue | Target Value | string |  | 255 |  |  |
| ValueResetFrequency | Value Reset Frequency | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
