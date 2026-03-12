---
title: "PartyFinancialAsset"
domain: automotive-cloud
topic: partyfinancialasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.399Z
estimatedTokens: 1086
keywords: [PartyFinancialAsset, financial, assets, owned, account, contact, API, version, 60.0, later, Calls, Special, Access, Rules, Associated]
---

# PartyFinancialAsset

> Represents the financial assets owned by an account or a contact. This
      object is available in API version 60.0 and later.

# PartyFinancialAsset

Represents the financial assets owned by an account or a contact. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Vehicle and Asset Finance must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset owned by the party.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| DeclarationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the asset is declared. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the party financial asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the party financial asset record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| OwnershipEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset ends. |
| OwnershipPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe share owned by the party in percentage. |
| OwnershipStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset starts. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party that owns the asset.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, Contact |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescription |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the asset.Possible values are:ActiveInactive |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of asset. |
| ValuationAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe worth of the asset after valuation. |
| ValuationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the asset valuation was done. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyFinancialAssetChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PartyFinancialAssetFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PartyFinancialAssetHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[PartyFinancialAssetOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PartyFinancialAssetShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
