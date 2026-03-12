---
title: "MediaContentTitle"
domain: media-developer-guide
topic: mediacontenttitle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.884Z
estimatedTokens: 708
keywords: [MediaContentTitle, event, show, that's, broadcast, television, radio, API, version, 54.0, later, Calls, Associated, Objects]
---

# MediaContentTitle

> Represents the details of an event or show that's broadcast on
         television or radio. This object is available in API version 54.0 and later.

# MediaContentTitle

Represents the details of an event or show that's broadcast on television or radio. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailableLanguages | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionCaptures the language of the Media content.Possible values are:EnglishHindiGermanFrenchSpanish |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription for the Media Content Title. |
| Genre | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies genre of the Media Content.Possible values are:DocumentarySoap OperaSitcomMovieNewsComedySci-FiThriller |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the media content title. |
| NumberOfEpisodes | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEach of the separate installments into which a serialized story or radio or television program is divided. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the media content title.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MediaContentTitleFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[MediaContentTitleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[MediaContentTitleShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
