---
title: "AssetTitleParty"
domain: automotive-cloud
topic: assettitleparty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.069Z
estimatedTokens: 736
keywords: [AssetTitleParty, relationship, account, contact, user, asset, title, API, version, 60.0, later, Calls, Associated, Objects]
---

# AssetTitleParty

> Represents the relationship between an account, a contact, or a user and an
         asset title. This object is available in API version 60.0 and later.

# AssetTitleParty

Represents the relationship between an account, a contact, or a user and an asset title. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the party is associated with the asset title. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from when the party is associated with the asset title. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies if the title and party relationship is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe autopopulated name of the Asset Title Party record. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party associated with the asset title. A party can be an account, a user, or a contact.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, Contact, User |
| PartyRole | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the role of the party associated with the asset title.Possible values are:Co-OwnerLien HolderOwner |
| TitleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe asset title related to the asset title party.This field is a relationship field.Relationship NameTitleRelationship TypeLookupRefers ToAssetTitle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssetTitlePartyChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssetTitlePartyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AssetTitlePartyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
