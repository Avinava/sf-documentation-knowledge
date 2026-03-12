---
title: "RebateMemberAggregateItem"
domain: sfFieldRef
topic: rebatememberaggregateitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.479Z
estimatedTokens: 335
keywords: [RebateMemberAggregateItem, junction, rebate, member, product, aggregate, transaction, journal]
---

# RebateMemberAggregateItem

> Represents a junction between a rebate member product aggregate and a
         transaction journal.

# RebateMemberAggregateItem

Represents a junction between a rebate member product aggregate and a transaction journal.

For more information, see RebateMemberAggregateItem in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | RebateMemberAggregateItem ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RebateAmount | Rebate Amount | currency |  |  | 18 | 2 |
| RebateMemberProductAggregateId | Rebate Aggregate Object ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionAmount | Transaction Amount | currency |  |  | 18 | 2 |
| TransactionJournalId | Transaction Journal ID | reference |  | 18 |  |  |
| TransactionQuantity | Transaction Quantity | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
