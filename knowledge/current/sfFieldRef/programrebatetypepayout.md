---
title: "ProgramRebateTypePayout"
domain: sfFieldRef
topic: programrebatetypepayout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.463Z
estimatedTokens: 363
keywords: [ProgramRebateTypePayout, payout, member, particular, rebate, volume, Jan'19, ABC, enterprises, $560, petrol, engine, $440]
---

# ProgramRebateTypePayout

> The payout given to a member for a particular rebate type. For example, volume
      rebate payout in Jan'19 for ABC enterprises is $560, petrol engine payout for ABC in Jan'19 is
      $440.

# ProgramRebateTypePayout

The payout given to a member for a particular rebate type. For example, volume rebate payout in Jan'19 for ABC enterprises is $560, petrol engine payout for ABC in Jan'19 is $440.

For more information, see ProgramRebateTypePayout in the Rebate Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccruedAmount | Accrued Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Program Rebate Type Payout ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProgramRebateTypeId | Program Rebate Type ID | reference |  | 18 |  |  |
| RebateAmount | Rebate Amount | currency |  |  | 18 | 2 |
| RebateProgramMemberPayoutId | Rebate Program Member Payout ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalBenefitQualifierValue | Total Benefit Qualifier Value | double |  |  | 18 | 2 |
| TotalMeasureValue | Total Measure Value | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
