---
title: "AssetAccountParticipant"
domain: mfg-api-devguide
topic: assetaccountparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.580Z
estimatedTokens: 615
keywords: [AssetAccountParticipant, junction, Asset, Account, objects, describing, association, participating, API, version, 59.0, later, Calls]
---

# AssetAccountParticipant

> Represents a junction between the Asset and Account objects describing the
         association between a participating account and an asset. This object is available in
      API version 59.0 and later.

# AssetAccountParticipant

Represents a junction between the Asset and Account objects describing the association between a participating account and an asset. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe stakeholder account associated with the asset.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset associated with the account.This field is a relationship field.Relationship NameAssetRelationship TypeMaster-detailRefers ToAsset (the master object) |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the association between the stakeholder and the asset ended. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the association between the stakeholder and the asset was initiated. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the association between the stakeholder and the asset is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the asset account participant. |
| StakeholderRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the associated account.Possible values are:Customer |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the asset account participant.Possible values are:Manufacturing |
