---
title: "LoyaltyPgmPtnrPrepaidPack"
domain: sfFieldRef
topic: loyaltypgmptnrprepaidpack
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.247Z
estimatedTokens: 363
keywords: [LoyaltyPgmPtnrPrepaidPack, prepaid, points, purchased, loyalty, program, partner]
---

# LoyaltyPgmPtnrPrepaidPack

> Represents information about a prepaid set of points purchased by a loyalty
         program partner.

# LoyaltyPgmPtnrPrepaidPack

Represents information about a prepaid set of points purchased by a loyalty program partner.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPgmPtnrPrepaidPack in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Loyalty Program Partner Prepaid Pack ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| PurchaseDate | Purchase Date | date |  |  |  |  |
| PurchasedPoints | Purchased Points | double |  |  | 18 | 2 |
| RemainingPoints | Remaining Points | double |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
