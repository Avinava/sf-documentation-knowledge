---
title: "RegulatoryAuthorizationType"
domain: sfFieldRef
topic: regulatoryauthorizationtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.034Z
estimatedTokens: 443
keywords: [RegulatoryAuthorizationType, authorization, issued, regulatory]
---

# RegulatoryAuthorizationType

> Represents the authorization issued by the regulatory body.

# RegulatoryAuthorizationType

Represents the authorization issued by the regulatory body.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RegulatoryAuthorizationType in the Emergency Response Management Object Reference, Emergency Response Management for Public Health Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationUrl | Application URL | url |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| DurationType | Duration Type | picklist |  | 255 |  |  |
| Id | Regulatory Authorization Type ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IssuingDepartmentId | Regulatory Authority ID | reference |  | 18 |  |  |
| Jurisdiction | Jurisdiction | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessingDuration | Processing Duration | string |  | 255 |  |  |
| RegulatoryAuthCategory | Regulatory Authorization Category | picklist |  | 40 |  |  |
| RegulatoryAuthCode | Regulatory Authorization Code | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
