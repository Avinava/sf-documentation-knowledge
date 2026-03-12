---
title: "RebatePayoutAdjustment"
domain: sfFieldRef
topic: rebatepayoutadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.548Z
estimatedTokens: 317
keywords: [RebatePayoutAdjustment, Rebate, amount, adjustment, needs, manually, added, subtracted, calculated]
---

# RebatePayoutAdjustment

> Rebate amount adjustment that needs to be given manually. An adjustment is an
      amount added or subtracted to the calculated rebate amount.

# RebatePayoutAdjustment

Rebate amount adjustment that needs to be given manually. An adjustment is an amount added or subtracted to the calculated rebate amount.

For more information, see RebatePayoutAdjustment in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| ApprovedDate | Approval Date | date |  |  |  |  |
| Comments | Comments | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Rebate Payout Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| RebateProgramMemberPayoutId | Rebate Program Member Payout ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
