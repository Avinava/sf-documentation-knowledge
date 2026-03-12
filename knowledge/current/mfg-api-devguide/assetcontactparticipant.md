---
title: "AssetContactParticipant"
domain: mfg-api-devguide
topic: assetcontactparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.587Z
estimatedTokens: 558
keywords: [AssetContactParticipant, junction, Asset, Contact, objects, describing, association, participating, API, version, 59.0, later, Calls]
---

# AssetContactParticipant

> Represents a junction between the Asset and Contact objects describing the
         association between a participating contact and an asset. This object is available in
      API version 59.0 and later.

# AssetContactParticipant

Represents a junction between the Asset and Contact objects describing the association between a participating contact and an asset. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset associated with the contact.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe contact associated with the asset.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the association between the stakeholder and the asset ended. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the association between the stakeholder and the asset was initiated. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the association between the stakeholder and the asset is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the asset contact participant. |
| StakeholderRole | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the role of the associated contact.Possible values are:Service Manager |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the asset contact participant.Possible values are:Manufacturing |
