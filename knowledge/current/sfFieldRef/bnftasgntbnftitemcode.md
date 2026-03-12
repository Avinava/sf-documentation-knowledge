---
title: "BnftAsgntBnftItemCode"
domain: sfFieldRef
topic: bnftasgntbnftitemcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.200Z
estimatedTokens: 334
keywords: [BnftAsgntBnftItemCode, junction, benefit, assignment, item, code, assigned, beneficiary, API, version, 66.0, later]
---

# BnftAsgntBnftItemCode

> Represents a junction between a benefit assignment and a benefit item code.
         Indicates the benefit item assigned to the beneficiary. This object is available in
      API version 66.0 and later.

# BnftAsgntBnftItemCode

Represents a junction between a benefit assignment and a benefit item code. Indicates the benefit item assigned to the beneficiary. This object is available in API version 66.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BnftAsgntBnftItemCode in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitAssignmentId | Benefit Assignment ID | reference |  | 18 |  |  |
| BenefitItemCodeId | Benefit Item Code ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Benefit Assignment Benefit Item Code ID | id |  | 18 |  |  |
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
