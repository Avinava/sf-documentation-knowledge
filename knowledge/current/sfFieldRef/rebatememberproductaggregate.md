---
title: "RebateMemberProductAggregate"
domain: sfFieldRef
topic: rebatememberproductaggregate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.505Z
estimatedTokens: 559
keywords: [RebateMemberProductAggregate, Stores, post, calculation, summary, journal, transactions, member, period, rebate, ABC, enterprises, May, against, Vol]
---

# RebateMemberProductAggregate

> Stores the post calculation summary of journal transactions by member, period,
      and rebate type. For example, ABC enterprises for May 2021 against Vol Rebate on Radius
      category, did a total quantity of 150 units and transaction amount of $80,000.

# RebateMemberProductAggregate

Stores the post calculation summary of journal transactions by member, period, and rebate type. For example, ABC enterprises for May 2021 against Vol Rebate on Radius category, did a total quantity of 150 units and transaction amount of $80,000.

For more information, see RebateMemberProductAggregate in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AggregateReferenceNumber | Aggregate Reference Number | string |  | 50 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GrowthAmount | Growth Amount | currency |  |  | 18 | 2 |
| GrowthAmountPercent | Growth Amount Percent | percent |  |  | 16 | 2 |
| GrowthQuantity | Growth Quantity | double |  |  | 18 | 2 |
| GrowthQuantityPercent | Growth Quantity Percent | percent |  |  | 16 | 2 |
| Id | Rebate Aggregate Object ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PriorTotalQuantity | Prior Total Quantity | double |  |  | 18 | 2 |
| PriorTotalTransactionAmount | Prior Total Transaction Amount | currency |  |  | 18 | 2 |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProgramRebateTypeId | Program Rebate Type ID | reference |  | 18 |  |  |
| RebateProgramMemberId | Rebate Program Member ID | reference |  | 18 |  |  |
| RebateProgramPayoutPeriodId | Rebate Program Payout Period ID | reference |  | 18 |  |  |
| RollupProgramMemberId | Rollup Program Member ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalQuantity | Total Quantity | double |  |  | 18 | 2 |
| TotalTransactionAmount | Total Transaction Amount | currency |  |  | 18 | 2 |
| TransactionJournalId | Transaction Journal ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
