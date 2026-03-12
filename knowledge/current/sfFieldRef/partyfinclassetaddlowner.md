---
title: "PartyFinclAssetAddlOwner"
domain: sfFieldRef
topic: partyfinclassetaddlowner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.763Z
estimatedTokens: 406
keywords: [PartyFinclAssetAddlOwner, additional, owner, financial, asset, API, version, 60.0, later]
---

# PartyFinclAssetAddlOwner

> Represents an additional owner of a financial asset. This object is
      available in API version 60.0 and later.

# PartyFinclAssetAddlOwner

Represents an additional owner of a financial asset. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyFinclAssetAddlOwner in the Automotive Cloud Developer Guide and Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApplicantId | Applicant ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveEndDate | Effective End Date | datetime |  |  |  |  |
| EffectiveStartDate | Effective Start Date | datetime |  |  |  |  |
| Id | Party Financial Asset Additional Owner ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnershipSharePercent | Ownership Share Percent | percent |  |  | 8 | 5 |
| PartyFinancialAssetId | Party Financial Asset ID | reference |  | 18 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
