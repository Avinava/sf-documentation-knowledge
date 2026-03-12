---
title: "MediaChannel"
domain: media-developer-guide
topic: mediachannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.877Z
estimatedTokens: 1221
keywords: [MediaChannel, media, advertisements, served, API, version, 54.0, later, Calls, Associated, Objects]
---

# MediaChannel

> Represents a media property where advertisements are served.
      This object is available in API version 54.0 and later.

# MediaChannel

Represents a media property where advertisements are served. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailableLanguages | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionCaptures the language of the media contents hosted on the Media Channel.Possible values are:EnglishHindiGermanSpanishFrench |
| Circulation | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of copies of a publication distributed during a specified time period. |
| CoreAudience | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA specific group of consumers, most likely to sample the product or service. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the media channel. |
| GeographicalCoverage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the geographic coverage of the media channel.Possible values are:MetroRegional |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the media channel is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the media type.Possible values are:DigitalOtherOutdoorPrintRadioTV |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the media channel. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the media channel.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PeriodicalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of periodical.Possible values are:AdvertorialMagazineNewsPaper |
| PricingCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCategorizes the Media Channel as Premium or Standard from an advertising pricing perspective. 'Premium' is an evaluation based on traffic, Nielsen ratings or Comscore rank.Possible values are:PremiumStandard |
| PublicationFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCaptures the frequency of the Media Channel publicationPossible values are:DailyMonthlyOtherQuarterlyWeekly |
| PublisherId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCaptures the Publisher field of the Media Channel record.This is a relationship field.Relationship NamePublisherId__rRelationship TypeLookupRefers ToAccount |
| PublisherPrimaryContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCaptures the primary contact details of the publisher.This is a relationship field.Relationship NamePublisherPrimaryContactId__rRelationship TypeLookupRefers ToContact |
| Reach | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of unique people or households exposed, at least once, to a medium in a given period. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the media channel. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MediaChannelFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[MediaChannelHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[MediaChannelShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
