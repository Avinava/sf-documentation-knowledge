---
title: "BuyerAccount"
domain: sfFieldRef
topic: buyeraccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.810Z
estimatedTokens: 407
keywords: [BuyerAccount, account, enabled, buyer, Lightning, B2B, Commerce]
---

# BuyerAccount

> Represents an account that is enabled as a buyer for Lightning B2B
         Commerce.

# BuyerAccount

Represents an account that is enabled as a buyer for Lightning B2B Commerce.

For more information, see BuyerAccount in the Object Reference for Salesforce and Lightning Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvailableCredit | Available Balance | currency |  |  | 18 | 2 |
| BuyerId | Account ID | reference |  | 18 |  |  |
| BuyerStatus | Buyer Status | picklist |  | 40 |  |  |
| CommerceType | Commerce Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditLimit | Credit Balance | currency |  |  | 18 | 2 |
| CreditStatus | Credit Rating/Status | picklist |  | 40 |  |  |
| CurrentBalance | Current Balance | currency |  |  | 18 | 2 |
| Id | Buyer Account ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLocked | Is Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MaximumOrderLimit | Maximum Order Limit | currency |  |  | 18 | 2 |
| MayEdit | May Edit | boolean |  |  |  |  |
| MinimumOrderLimit | Minimum Order Limit | currency |  |  | 18 | 2 |
| Name | Buyer Account Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PayerId | Account ID | reference |  | 18 |  |  |
| SendToId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
