---
title: "PreventiveCareAgreement"
domain: sfFieldRef
topic: preventivecareagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.496Z
estimatedTokens: 363
keywords: [PreventiveCareAgreement, payment, terms, contracts, Preventive, Care, Fee, Agreement]
---

# PreventiveCareAgreement

> Specifies the payment terms for contracts of Preventive Care Fee
         Agreement.

# PreventiveCareAgreement

Specifies the payment terms for contracts of Preventive Care Fee Agreement.

For more information, see PreventiveCareAgreement in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalInformation | Additional Information | string |  | 255 |  |  |
| BonusMeasureDescription | Bonus Measure Description | string |  | 255 |  |  |
| BonusMeasureType | Bonus Measure Type | string |  | 80 |  |  |
| BonusPayout | Bonus Payout | currency |  |  | 18 | 0 |
| ContractPaymentAgreementId | ContractPaymentAgreement ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentMeasurePercent | Current Measure Percent | percent |  |  | 5 | 2 |
| Id | Preventive Care Agreement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Preventive Care Agreement Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetMeasurePercent | Target Measure Percent | percent |  |  | 5 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
