---
title: "AssetContractRelationship"
domain: revenue-cloud
topic: assetcontractrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.772Z
estimatedTokens: 648
keywords: [AssetContractRelationship, relationship, asset, contract, API, version, 60.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# AssetContractRelationship

> Represents a relationship between an asset and a contract. This
      object is available in API version 60.0 and later.

# AssetContractRelationship

Represents a relationship between an asset and a contract. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the asset related to the contract.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the contract related to the asset.This field is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date and time of the relationship between contract and asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. The associated UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user accessed this record or list view (LastReferencedDate) but didn’t view it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number assigned to AssetContractRelationship. (Read Only) |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the relationship between contract and asset. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetContractRelationshipFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssetContractRelationshipHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
