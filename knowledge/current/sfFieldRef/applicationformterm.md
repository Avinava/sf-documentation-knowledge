---
title: "ApplicationFormTerm"
domain: sfFieldRef
topic: applicationformterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.657Z
estimatedTokens: 367
keywords: [ApplicationFormTerm, terms, associated, application, form, loan, lease, API, version, 62.0, later]
---

# ApplicationFormTerm

> Represents the terms associated with an application form for a loan or a
         lease. This object is available in API version 62.0 and later.

# ApplicationFormTerm

Represents the terms associated with an application form for a loan or a lease. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApplicationFormTerm in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDate | Effective End Date | date |  |  |  |  |
| EffectiveStartDate | Effective Start Date | date |  |  |  |  |
| Id | Application Form Term ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ReferenceRecordId | Reference Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermDetail | Term Detail | textarea |  | 255 |  |  |
| TermId | Term ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
