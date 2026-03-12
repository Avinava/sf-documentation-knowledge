---
title: "AdServerAccount"
domain: media-developer-guide
topic: adserveraccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.718Z
estimatedTokens: 518
keywords: [AdServerAccount, junction, account, server, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdServerAccount

> Represents a junction between an account and an ad server. This object is available in API
      version 54.0 and later.

# AdServerAccount

Represents a junction between an account and an ad server. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdServerAdvertiserIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the advertiser of the external ad server. |
| AdServerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad server associated with the ad server account.This is a relationship field.Relationship NameAdServerId__rRelationship TypeLookupRefers ToAdServer |
| AdvertiserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the advertiser's or agency's account associated with the ad server account.This is a relationship field.Relationship NameAdvertiserId__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Ad server account. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the type of account associated with the ad server account.Possible values are:AdvertiserAgency |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdServerAccountFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdServerAccountHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
