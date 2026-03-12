---
title: "AdServerAccountContact"
domain: media-developer-guide
topic: adserveraccountcontact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.726Z
estimatedTokens: 831
keywords: [AdServerAccountContact, junction, server, account, contact, API, version, 64.0, later, Calls, Associated, Objects]
---

# AdServerAccountContact

> Represents a junction between an ad server account and a contact. This
      object is available in API version 64.0 and later.

# AdServerAccountContact

Represents a junction between an ad server account and a contact. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdServerAccountExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the ad server account in the external ad server. |
| AdServerAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the ad server account associated with the ad server account contact.This field is a relationship field.Relationship NameAdServerAccountRefers ToAdServerAccount |
| AdServerAccountProperties | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe properties of the ad server account in the external ad server. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the contact associated with the ad server account contact.This field is a relationship field.Relationship NameContactRefers ToContact |
| ContactType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of contact associated with the ad server account contact. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the ad server account contact is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad server account contact. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad server account contact.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdServerAccountContactFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdServerAccountContactHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdServerAccountContactShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
