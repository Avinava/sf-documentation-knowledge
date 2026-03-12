---
title: "AdServerUser"
domain: media-developer-guide
topic: adserveruser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.735Z
estimatedTokens: 759
keywords: [AdServerUser, junction, user, server, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdServerUser

> Represents a junction between a user and an ad server. This object is available in API
      version 54.0 and later.

# AdServerUser

Represents a junction between a user and an ad server. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdServerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCaptures the ad server to which the user is mapped.This is a relationship field.Relationship NameAdServerId__rRelationship TypeLookupRefers ToAdServer |
| AdServerUserIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionCaptures the publisher's Contact and User Id sent during Order creation. This is equivalent of TraffickerId in GAM. |
| AdServerUserProperties | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe custom properties of the ad server user. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad server user. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad server user.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Specifies the user persona as per the ad server definition. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the user for which the ad server mapping is created.This is a relationship field.Relationship NameUserId__rRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdServerUserFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdServerUserHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdServerUserShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
