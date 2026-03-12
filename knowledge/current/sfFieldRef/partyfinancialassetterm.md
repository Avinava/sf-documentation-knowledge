---
title: "PartyFinancialAssetTerm"
domain: sfFieldRef
topic: partyfinancialassetterm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.711Z
estimatedTokens: 433
keywords: [PartyFinancialAssetTerm, term, condition, associated, financial, asset, Aids, identifying, tracking, terms, lender, legal, regulatory, around, asset's]
---

# PartyFinancialAssetTerm

> Represents a term or condition associated with a financial asset. Aids in
         identifying and tracking the terms set by a lender or the legal or regulatory terms around
         a financial asset's ownership, usage, maintenance, and monitoring. This object is
      available in API version 65.0 and later. Available with Digital Lending permission
      set.

# PartyFinancialAssetTerm

Represents a term or condition associated with a financial asset. Aids in identifying and tracking the terms set by a lender or the legal or regulatory terms around a financial asset's ownership, usage, maintenance, and monitoring. This object is available in API version 65.0 and later. Available with Digital Lending permission set.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyFinancialAssetTerm in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalInformation | Additional Information | string |  | 21 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDate | Effective End Date | date |  |  |  |  |
| EffectiveStartDate | Effective Start Date | date |  |  |  |  |
| Id | Party Financial Asset Term ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLegallyEnforceable | Is Legally Enforceable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PartyFinancialAssetId | Party Financial Asset ID | reference |  | 18 |  |  |
| ReferenceRecordId | Reference Record ID | reference |  | 18 |  |  |
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
