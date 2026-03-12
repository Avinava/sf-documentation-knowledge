---
title: "InsurancePolicySurcharge"
domain: sfFieldRef
topic: insurancepolicysurcharge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.558Z
estimatedTokens: 572
keywords: [InsurancePolicySurcharge, charges, calculated, insurance, policy, assets, coverages, participants, region, API, version, 51.0, later]
---

# InsurancePolicySurcharge

> Represents the charges calculated for an insurance policy and its related
      assets, coverages, and participants in a region. This object is available in API version
    51.0 and later.

# InsurancePolicySurcharge

Represents the charges calculated for an insurance policy and its related assets, coverages, and participants in a region. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicySurcharge in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicableObjectType | Surcharged Item | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Insurance Policy Surcharge ID | id |  | 18 |  |  |
| InsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| InsurancePolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| InsurancePolicyTransactionId | Insurance Policy Transaction ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsProrationAllowed | Proration Allowed | boolean |  |  |  |  |
| IsRefundAllowed | Refund Allowed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginalSurchargeId | Insurance Policy Surcharge ID | reference |  | 18 |  |  |
| ParentSurchargeId | Insurance Policy Surcharge ID | reference |  | 18 |  |  |
| PriorSurchargeId | Insurance Policy Surcharge ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SurchargeAmount | Surcharge Amount | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermSurchargeAmount | Term Surcharge Amount | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
