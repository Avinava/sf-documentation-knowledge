---
title: "PartyFinclAssetAddlOwner"
domain: automotive-cloud
topic: partyfinclassetaddlowner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.405Z
estimatedTokens: 721
keywords: [PartyFinclAssetAddlOwner, additional, owner, financial, asset, API, version, 60.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PartyFinclAssetAddlOwner

> Represents an additional owner of a financial asset. This object is
      available in API version 60.0 and later.

# PartyFinclAssetAddlOwner

Represents an additional owner of a financial asset. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Vehicle and Asset Finance must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the additional owner.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the additional owner.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique identifier of the party asset additional owner. |
| OwnershipSharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the asset ownership between the primary and additional owner. |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset associated with the additional owner.This field is a relationship field.Relationship NamePartyFinancialAssetRelationship TypeLookupRefers ToPartyFinancialAsset |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the record in an external system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyFinclAssetAddlOwnerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PartyFinclAssetAddlOwnerFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PartyFinclAssetAddlOwnerHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
