---
title: "ProgramRebateTypPayoutSrc"
domain: sfFieldRef
topic: programrebatetyppayoutsrc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.387Z
estimatedTokens: 401
keywords: [ProgramRebateTypPayoutSrc, rebate, amount, tier, applied, calculated, row, aggregate, There, relation, payout, source]
---

# ProgramRebateTypPayoutSrc

> The rebate amount and the tier applied calculated for each row in the
      aggregate. There is a 1 to 1 relation between payout source and aggregate.

# ProgramRebateTypPayoutSrc

The rebate amount and the tier applied calculated for each row in the aggregate. There is a 1 to 1 relation between payout source and aggregate.

For more information, see ProgramRebateTypPayoutSrc in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccrualRate | Accrual Rate | double |  |  | 18 | 2 |
| AccruedAmount | Accrued Amount | currency |  |  | 18 | 2 |
| AggregateIdentifierId | Aggregate Source ID | reference |  | 18 |  |  |
| BenefitQualifierValue | Benefit Qualifier Value | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Program Rebate Type Payout Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MeasureValue | Measure Value | double |  |  | 18 | 2 |
| MemberId | Rebate Program Member ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| ProgramRebateTypeBenefitId | Rebate Type Benefit ID | reference |  | 18 |  |  |
| ProgramRebateTypePayoutId | Program Rebate Type Payout ID | reference |  | 18 |  |  |
| RebateAmount | Rebate Amount | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
