---
title: "CodeSet"
domain: sfFieldRef
topic: codeset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.431Z
estimatedTokens: 466
keywords: [CodeSet, various, industry, defined, codes, context, their, systems, versions, sorts, digital, records, API, version, 59.0]
---

# CodeSet

> Represents various industry defined codes in the context of their systems and
      versions of those systems. These codes are used in all sorts of digital records. This
    object is available in API version 59.0 and later.

# CodeSet

Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts of digital records. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CodeSet in the Manufacturing Cloud Developer Guide, Public Sector Solutions Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Code | Code | string |  | 255 |  |  |
| CodeDescription | Code Description | textarea |  | 32000 |  |  |
| CodeSetKey | Code Set Key | string |  | 255 |  |  |
| CodeSetType | Code Set Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Code Set ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsCustomCode | Custom Code | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| StartDate | Effective Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| SystemVersion | System Version | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
