---
title: "InsurancePolicyTransaction"
domain: sfFieldRef
topic: insurancepolicytransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.579Z
estimatedTokens: 597
keywords: [InsurancePolicyTransaction, transaction, change, affects, premium, insurance, policy, endorsement, renewal, cancellation, API, version, 60.0, later]
---

# InsurancePolicyTransaction

> Represents a transaction related to a change that affects the premium of an
         insurance policy, such as an endorsement, renewal, or cancellation. This object is
      available in API version 60.0 and later.

# InsurancePolicyTransaction

Represents a transaction related to a change that affects the premium of an insurance policy, such as an endorsement, renewal, or cancellation. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicyTransaction in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 255 |  |  |
| CommissionAmount | Commission Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFromDate | Effective From Date | date |  |  |  |  |
| Id | Insurance Policy Transaction ID | id |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| InsurancePolicyVersionId | Insurance Policy ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentTransactionId | Insurance Policy Transaction ID | reference |  | 18 |  |  |
| PostedDate | Posted Date | date |  |  |  |  |
| PriorTransactionId | Insurance Policy Transaction ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalTransactionAmount | Total Transaction Amount | currency |  |  | 18 | 2 |
| TransactionAmount | Transaction Amount | currency |  |  | 18 | 2 |
| TransactionEffectiveDate | Transaction Effective Date | datetime |  |  |  |  |
| TransactionFeeAmount | Transaction Fee | currency |  |  | 18 | 2 |
| TransactionNumber | Transaction Number | string |  | 255 |  |  |
| TransactionPostedDate | Transaction Posted Date | datetime |  |  |  |  |
| TransactionTaxAmount | Transaction Tax | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
