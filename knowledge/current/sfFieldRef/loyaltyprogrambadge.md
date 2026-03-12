---
title: "LoyaltyProgramBadge"
domain: sfFieldRef
topic: loyaltyprogrambadge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.266Z
estimatedTokens: 393
keywords: [LoyaltyProgramBadge, badge, that's, associated, loyalty, program]
---

# LoyaltyProgramBadge

> Represents information about the badge that's associated with a
         loyalty program.

# LoyaltyProgramBadge

Represents information about the badge that's associated with a loyalty program.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramBadge in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Loyalty Program Badge ID | id |  | 18 |  |  |
| ImageUrl | Image | url |  | 1000 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramId | Loyalty Program ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValidityDuration | Validity Duration | int | 9 |  |  |  |
| ValidityDurationUnit | Validity Duration Unit | picklist |  | 255 |  |  |
| ValidityEndDate | Validity End Date | date |  |  |  |  |
| ValidityType | Validity Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
