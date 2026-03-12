---
title: "AdOrderLineHiatus"
domain: media-developer-guide
topic: adorderlinehiatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.527Z
estimatedTokens: 613
keywords: [AdOrderLineHiatus, hiatus, media, placement, order, line, API, version, 60.0, later, Calls, Associated, Objects]
---

# AdOrderLineHiatus

> Represents the hiatus details of the media placement in a order
         line. This object is available in API version 60.0 and later.

# AdOrderLineHiatus

Represents the hiatus details of the media placement in a order line. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdOrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionAd order line item that’s associated with the hiatus.This field is a relationship field.Relationship NameAdOrderItemRelationship TypeLookupRefers ToAdOrderItem |
| Days | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionDays in the week when the hiatus is in effect.Possible values are:FridayMondaySaturdaySundayThursdayTuesdayWednesday |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd date of the ad hiatus interval. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the record. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStart date of the ad hiatus interval. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of order line hiatus.Possible values are:DaysInterval |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdOrderLineHiatusFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdOrderLineHiatusHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
