---
title: "RebateProgramPayoutPeriod"
domain: sfFieldRef
topic: rebateprogrampayoutperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.628Z
estimatedTokens: 389
keywords: [RebateProgramPayoutPeriod, period, payout, calculation, 1st, 31st, Jan, Dec, 14th]
---

# RebateProgramPayoutPeriod

> The period of the payout calculation. For example, 1st to 31st Jan, or 1st Dec
      to 14th Dec.

# RebateProgramPayoutPeriod

The period of the payout calculation. For example, 1st to 31st Jan, or 1st Dec to 14th Dec.

For more information, see RebateProgramPayoutPeriod in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Rebate Program Payout Period ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastCalculationDate | Last Calculation Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MemberPayoutCount | Number of Member Payouts | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PayoutCalculationDate | Payout Calculation Date | date |  |  |  |  |
| RebateProgramId | Rebate Program ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalApprovedAmount | Total Approved Amount | currency |  |  | 18 | 2 |
| TotalRejectedAmount | Total Rejected Amount | currency |  |  | 18 | 2 |
| TransactionGracePeriodDate | Transaction Grace Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
