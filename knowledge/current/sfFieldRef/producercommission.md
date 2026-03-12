---
title: "ProducerCommission"
domain: sfFieldRef
topic: producercommission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.023Z
estimatedTokens: 647
keywords: [ProducerCommission, producer's, commission, insurance, policy, calculated, commissionable, transactions, populated, external, system, API, version, 51.0, later]
---

# ProducerCommission

> Represents a producer's commission for an insurance policy. The commission
         can be calculated from the commissionable transactions or can be populated from an external
         system. This object is available in API version 51.0 and
      later.

# ProducerCommission

Represents a producer's commission for an insurance policy. The commission can be calculated from the commissionable transactions or can be populated from an external system. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProducerCommission](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_producercommission.htm "HTML (New Window)") in the Financial Services Cloud Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CommissionAmount | Commission Amount | currency |  |  | 18 | 2 |
| CommissionableAmount | Commissionable Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Producer Commission ID | id |  | 18 |  |  |
| InsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| InsurancePolicyTransactionId | Insurance Policy Transaction ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaxCommissionAmount | Max Commission Amount | currency |  |  | 18 | 2 |
| MinCommissionAmount | Min Commission Amount | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentProducerCommissionId | Producer Commission ID | reference |  | 18 |  |  |
| PaymentDatetime | Payment Date | datetime |  |  |  |  |
| ProcessingProducerId | Producer ID | reference |  | 18 |  |  |
| ProducerId | Producer ID | reference |  | 18 |  |  |
| ProducerProductionCode | Producer Production Code | string |  | 255 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
