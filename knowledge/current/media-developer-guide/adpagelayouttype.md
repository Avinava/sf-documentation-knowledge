---
title: "AdPageLayoutType"
domain: media-developer-guide
topic: adpagelayouttype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:54.549Z
estimatedTokens: 720
keywords: [AdPageLayoutType, layouts, print, magazines, newspapers, screens, websites, applications, API, version, 57.0, later, Calls, Associated, Objects]
---

# AdPageLayoutType

> Represents layouts for print, such as magazines and newspapers, or for screens,
      websites, applications. This object is available in API version 57.0 and later.

# AdPageLayoutType

Represents layouts for print, such as magazines and newspapers, or for screens, websites, applications. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ColumnWidth | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe width per column of the page layout. |
| Gutter | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe space between columns that helps separate content. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Ad Page layout is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MaxColValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of columns for the Ad page layout up to which the Ad creative size can be defined. |
| MaxHeightValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe height of the page upto which Ad creative height can be defined. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad page layout. |
| UnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the unit of measure of the ad page layout.Possible values are:cminches |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdPageLayoutTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdPageLayoutTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdPageLayoutTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
