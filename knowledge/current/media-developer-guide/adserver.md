---
title: "AdServer"
domain: media-developer-guide
topic: adserver
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.713Z
estimatedTokens: 739
keywords: [AdServer, external, server, serves, advertising, content, various, platforms, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdServer

> Represents the details of an external ad server that serves advertising content on various platforms. This object is
      available in API version 54.0 and later.

# AdServer

Represents the details of an external ad server that serves advertising content on various platforms. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdServerApplicationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionArbitrary string identifying the publisher's application. |
| AdServerCompany | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company that owns the ad server. |
| AdServerNetworkIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIdentifies the associated publisher's network. |
| AdServerProperties | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe custom properties of an ad server. |
| AllowedAdPriorityTypes | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionStores the available Ad Types for the selected Ad Server.Possible values are:StandardSponsorshipThe picklist is dynamic. More values can be added dynamically. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad server. |
| NamedCredentialReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores names of the credential references, which hold the authentication details associated with the AdServer record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad server.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdServerHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdServerShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
