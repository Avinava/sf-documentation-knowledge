---
title: "RebateProgramMemberPayout"
domain: sfFieldRef
topic: rebateprogrammemberpayout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.604Z
estimatedTokens: 388
keywords: [RebateProgramMemberPayout, payout, calculated, member, period, $1000, Jan'21, ABC, enterprises]
---

# RebateProgramMemberPayout

> The payout calculated for a member for the period. For example, $1000 Jan'21
      payout for ABC enterprises.

# RebateProgramMemberPayout

The payout calculated for a member for the period. For example, $1000 Jan'21 payout for ABC enterprises.

For more information, see RebateProgramMemberPayout in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccruedAmount | Accrued Amount | currency |  |  | 18 | 2 |
| CalculatedRebateAmount | Calculated Rebate Amount | currency |  |  | 18 | 2 |
| CalculationDate | Calculation Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Rebate Program Member Payout ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberId | Rebate Program Member ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| PaymentId | Rebate Payment ID | reference |  | 18 |  |  |
| PeriodId | Rebate Program Payout Period ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalApprovedAdjustmentAmount | Total Approved Adjustment Amount | currency |  |  | 18 | 2 |
| TotalRebateAmount | Total Rebate Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
