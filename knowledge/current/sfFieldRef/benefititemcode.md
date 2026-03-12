---
title: "BenefitItemCode"
domain: sfFieldRef
topic: benefititemcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.704Z
estimatedTokens: 314
keywords: [BenefitItemCode, code, bundle, identifies, item, associated, benefit, API, version, 59.0, later]
---

# BenefitItemCode

> Represents information about a code set or a code set bundle that
         identifies an item that is associated with a benefit. This object is available in API
      version 59.0 and later.

# BenefitItemCode

Represents information about a code set or a code set bundle that identifies an item that is associated with a benefit. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BenefitItemCode in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitId | Benefit ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Benefit Item Code ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemCodeId | Item Code ID | reference |  | 18 |  |  |
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
