---
title: "PartyFinancialAssetLien"
domain: sfFieldRef
topic: partyfinancialassetlien
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.671Z
estimatedTokens: 428
keywords: [PartyFinancialAssetLien, lien, financial, asset, owned, individual, account, API, version, 61.0, later]
---

# PartyFinancialAssetLien

> Represents information about the lien of the financial asset owned by an
         individual or account. This object is available in API version 61.0 and later.

# PartyFinancialAssetLien

Represents information about the lien of the financial asset owned by an individual or account. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyFinancialAssetLien in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EstablishmentDate | Establishment Date | datetime |  |  |  |  |
| ExternalIdentifier | External Identifier | string |  | 255 |  |  |
| Id | Party Financial Asset Lien ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LienAmount | Lien Amount | currency |  |  | 18 | 2 |
| LienHolder | Lien Holder | string |  | 255 |  |  |
| MaturityDate | Maturity Date | date |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PartyFinancialAssetId | Party Financial Asset ID | reference |  | 18 |  |  |
| PerfectionDate | Perfection Date | datetime |  |  |  |  |
| Position | Position | picklist |  | 40 |  |  |
| ReleaseDate | Release Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
