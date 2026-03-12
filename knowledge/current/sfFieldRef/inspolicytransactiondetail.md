---
title: "InsPolicyTransactionDetail"
domain: sfFieldRef
topic: inspolicytransactiondetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.258Z
estimatedTokens: 387
keywords: [InsPolicyTransactionDetail, insurance, policy, transaction, API, version, 55.0, later]
---

# InsPolicyTransactionDetail

> Represents the details of an insurance policy transaction. This object is available in API version 55.0 and later.

# InsPolicyTransactionDetail

Represents the details of an insurance policy transaction. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsPolicyTransactionDetail in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChargeType | Charge Type | picklist |  | 255 |  |  |
| Commission | Commission | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Fee | Fee | currency |  |  | 18 | 2 |
| Id | Insurance Policy Transaction Detail ID | id |  | 18 |  |  |
| InsurancePolicyTransactionId | Insurance Policy Transaction ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Premium | Premium | currency |  |  | 18 | 2 |
| ReferenceObjectId | Reference Object ID | reference |  | 18 |  |  |
| ReferenceObjectVersionId | Reference Object Version ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Tax | Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
