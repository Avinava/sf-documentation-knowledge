---
title: "AdQuoteLineHiatus"
domain: media-developer-guide
topic: adquotelinehiatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.671Z
estimatedTokens: 612
keywords: [AdQuoteLineHiatus, hiatus, period, media, placement, API, version, 60.0, later, Calls, Associated, Objects]
---

# AdQuoteLineHiatus

> Represents the hiatus period details of a media placement. This object
      is available in API version 60.0 and later.

# AdQuoteLineHiatus

Represents the hiatus period details of a media placement. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionAd quote line that’s associated with the hiatus.This field is a relationship field.Relationship NameAdQuoteLineRelationship TypeLookupRefers ToAdQuoteLine |
| Days | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionDay in the week when the quote line hiatus is in effect.Possible values are:SundayMondayTuesdayWednesdayThursdayFridaySaturday |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd date of the ad hiatus interval. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the record. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStart date of the ad hiatus interval. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of quote line hiatus.Possible values are:DaysInterval |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLineHiatusFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLineHiatusHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
