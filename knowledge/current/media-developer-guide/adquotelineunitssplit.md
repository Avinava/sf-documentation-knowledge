---
title: "AdQuoteLineUnitsSplit"
domain: media-developer-guide
topic: adquotelineunitssplit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.706Z
estimatedTokens: 634
keywords: [AdQuoteLineUnitsSplit, split, interval, units, quote, line, API, version, 56.0, later, Calls, Associated, Objects]
---

# AdQuoteLineUnitsSplit

> Represents the split interval of the required units for an ad quote
         line. This object is available in API version 56.0 and later.

# AdQuoteLineUnitsSplit

Represents the split interval of the required units for an ad quote line. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdQuoteLineId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ad quote line for which units are split.This field is a relationship field.Relationship NameAdQuoteLineRelationship TypeMaster-detailRefers ToAdQuoteLine (the master object) |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the end date of the split interval. |
| IsHiatus | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether unit split is of the type hiatus.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad quote line unit split. |
| SplitQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of units that must be split for the specified start and end dates. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the start date of the split interval. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdQuoteLineUnitsSplitFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdQuoteLineUnitsSplitHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
