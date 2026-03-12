---
title: "BenefitDisbursementAdj"
domain: sfFieldRef
topic: benefitdisbursementadj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.658Z
estimatedTokens: 371
keywords: [BenefitDisbursementAdj, changes, enrollee's, benefit, made, monetary, non-monetary, similar, units, measure, API, version, 56.0, later]
---

# BenefitDisbursementAdj

> Represents the changes of an enrollee's benefit that can be made as
         monetary or non-monetary with similar units of measure. This object is available in
      API version 56.0 and later.

# BenefitDisbursementAdj

Represents the changes of an enrollee's benefit that can be made as monetary or non-monetary with similar units of measure. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BenefitDisbursementAdj in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| AdjustmentReason | Adjustment Reason | string |  | 255 |  |  |
| BenefitAssignmentAdjustmentId | Benefit Assignment Adjustment ID | reference |  | 18 |  |  |
| BenefitDisbursementId | Benefit Disbursement ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Benefit Disbursement Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
