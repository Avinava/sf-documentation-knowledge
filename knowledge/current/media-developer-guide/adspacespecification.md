---
title: "AdSpaceSpecification"
domain: media-developer-guide
topic: adspacespecification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.809Z
estimatedTokens: 1915
keywords: [AdSpaceSpecification, specific, place, group, places, creative, served, API, version, 54.0, later, Calls, Associated, Objects]
---

# AdSpaceSpecification

> Represents a specific place or a group of places where an ad creative
         is served. This object is available in API version 54.0 and later.

# AdSpaceSpecification

Represents a specific place or a group of places where an ad creative is served. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdPageLayoutTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad page layout type associated with the ad space specification.This field is a relationship field.Relationship NameAdPageLayoutTypeRefers ToAdPageLayoutType |
| AdServerAdSpaceIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the ad space specification on the ad server. |
| AdServerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad server associated with the ad space specification.This is a relationship field.Relationship NameAdServerId__rRelationship TypeLookupRefers ToAdServer |
| AdSpaceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of ad space the ad space specification is a part of.Possible values are:1 Page Standard1/2 Page Horizontal2 Page Spread2/3 Page VerticalBillboardFull banner WF DFPGraphic ImageLeaderboardMid-RollPost-RollPre-RollSkyscraper |
| AudienceSizeRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe audience rating size of the ad space specification. |
| BroadcastDays | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the days of the week when the related ad creative can be served.Possible values are:FridayMondaySaturdaySundayThursdayTuesdayWednesday |
| CreativeFormatType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the media format of the creative that's displayed on the ad space.Possible values are:DisplayVideo or audio |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the end date and time for a scheduled program specification. |
| EndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the end time for a scheduled program specification. |
| EndWeekDay | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the day of the week on which the ad space specification ends.Possible values are:SundayMondayTuesdayWednesdayThursdayFridaySaturday |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the ad space specification is active.The default value is 'false'. |
| IsLiveBroadcast | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a broadcast schedule is a Live Telecast or a Recorded Telecast.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| MediaChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the media channel related to the ad space specification.This is a relationship field.Relationship NameMediaChannelId__rRelationship TypeLookupRefers ToMediaChannel |
| MediaContentTitleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the media content title related to the ad space specification.This is a relationship field.Relationship NameMediaContentTitleId__rRelationship TypeLookupRefers ToMediaContentTitle |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad space specification. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad space specification.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Page | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of page on which the related ad creative is displayed.Possible values are:Back coverFront coverPage 3 |
| Position | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the position of the related ad creative on the page.Possible values are:Above the foldBottom rightTop left |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the ad space specification.This is a relationship field.Relationship NameProduct2Id__rRelationship TypeLookupRefers ToProduct2 |
| ProgramRunType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the schedule type of the ad space specification.Possible values are:PremiereRegularRepeat |
| PublisherDayPart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the day time type for the publisher.Possible values are:Non Prime TimePrime Time |
| Section | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the section where the related ad creative is placed.Possible values are:EntertainmentPoliticsSports |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the start date and time for a scheduled program specification. |
| StartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the start time for a scheduled program specification. |
| StartWeekDay | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the day of the week on which the ad space specification begins.Possible values are:SundayMondayTuesdayWednesdayThursdayFridaySaturday |
| SubSection | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the subsection where the related ad creative is displayed.Possible values are:ArtCricketFootballIndiaMoviesTheatreWorld |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type for ad space specification.Possible values are:Ad SpaceAd Space GroupScheduled Program |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdSpaceSpecificationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdSpaceSpecificationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdSpaceSpecificationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
