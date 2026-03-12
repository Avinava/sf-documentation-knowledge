---
title: "InsurancePolicyAsset"
domain: sfFieldRef
topic: insurancepolicyasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.402Z
estimatedTokens: 656
keywords: [InsurancePolicyAsset, customer, insured, insurance, policy]
---

# InsurancePolicyAsset

> Represents the customer property insured through the insurance policy.

# InsurancePolicyAsset

Represents the customer property insured through the insurance policy.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicyAsset in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetCode | Asset Code | string |  | 255 |  |  |
| AssetName | Asset Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomerPropertyId | Customer Property ID | reference |  | 18 |  |  |
| EffectiveFromDate | Effective From Date | date |  |  |  |  |
| EffectiveToDate | Effective To Date | date |  |  |  |  |
| Id | Insurance Policy Asset ID | id |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginalAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryPolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| PriorAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| RelatedInsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| StandardCommissionAmount | Standard Commission | currency |  |  | 18 | 2 |
| StandardFeeAmount | Standard Fee | currency |  |  | 18 | 2 |
| StandardPremiumAmount | Standard Premium | currency |  |  | 18 | 2 |
| StandardTaxAmount | Standard Tax | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermCommissionAmount | Term Commission | currency |  |  | 18 | 2 |
| TermFeeAmount | Term Fee | currency |  |  | 18 | 2 |
| TermPremiumAmount | Term Premium | currency |  |  | 18 | 2 |
| TermTaxAmount | Term Tax | currency |  |  | 18 | 2 |
| TotalStandardAmount | Total Standard Amount | currency |  |  | 18 | 2 |
| TotalTermAmount | Total Term Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
