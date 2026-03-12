---
title: "PartyFinancialAssetRela"
domain: financial-services-cloud-object-reference
topic: partyfinancialassetrela
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.181Z
estimatedTokens: 503
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

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe primary financial asset in the relationship. For example, a standalone building that is part of a larger asset group.This field is a relationship field.Relationship NamePartyFinancialAssetRelationship TypeMaster-detailRefers ToPartyFinancialAsset (the master object) |
| RelatedPartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial asset that the primary financial asset is associated with. For example, an asset group that includes the primary asset.This field is a relationship field.Relationship NameRelatedPartyFinancialAssetRefers ToPartyFinancialAsset |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of relationship between the party financial assets.Possible values are:GroupSoldTogether—Sold Together |
