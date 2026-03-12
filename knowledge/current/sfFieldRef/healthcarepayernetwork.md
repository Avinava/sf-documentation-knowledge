---
title: "HealthcarePayerNetwork"
domain: sfFieldRef
topic: healthcarepayernetwork
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.269Z
estimatedTokens: 433
keywords: [HealthcarePayerNetwork, insurance, network, group, company’s, exclusive, provider, organization, EPO, plans]
---

# HealthcarePayerNetwork

> Represents an insurance network group. For example, an insurance company’s
      exclusive provider organization (EPO) plans.

# HealthcarePayerNetwork

Represents an insurance network group. For example, an insurance company’s exclusive provider organization (EPO) plans.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthcarePayerNetwork in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Code | Code | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| Id | Healthcare Payer Network ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LineofBusiness | Line of Business | picklist |  | 40 |  |  |
| Name | Payer Network Name | string |  | 255 |  |  |
| NetworkType | Network Type | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentPayerNetworkId | Healthcare Payer Network ID | reference |  | 18 |  |  |
| PayerId | Account ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
