---
title: "PartyFinancialAssetRela"
domain: sfFieldRef
topic: partyfinancialassetrela
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.688Z
estimatedTokens: 396
keywords: [PartyFinancialAssetRela, relationship, financial, assets, relates, party, asset, another, grouping, pledged, together, collateral, part, multiple, groups]
---

# PartyFinancialAssetRela

> Represents the relationship between financial assets. The object relates one
         party financial asset to another and is used for grouping assets to be pledged together as
         collateral. For example, an asset can be a part of multiple groups of assets, which each
         group being pledged for a distinct loan.  This object is available in API version 65.0
      and later. Available with Digital Lending permission set.

# PartyFinancialAssetRela

Represents the relationship between financial assets. The object relates one party financial asset to another and is used for grouping assets to be pledged together as collateral. For example, an asset can be a part of multiple groups of assets, which each group being pledged for a distinct loan. This object is available in API version 65.0 and later. Available with Digital Lending permission set.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyFinancialAssetRela in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Party Financial Asset Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PartyFinancialAssetId | Party Financial Asset ID | reference |  | 18 |  |  |
| RelatedPartyFinancialAssetId | Related Party Financial Asset ID | reference |  | 18 |  |  |
| RelationshipType | Relationship Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
