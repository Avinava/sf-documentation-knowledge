---
title: "WebStorePricebook"
domain: object-reference
topic: webstorepricebook
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.473Z
estimatedTokens: 579
keywords: [WebStorePricebook, store, price, book, Lightning, B2B, Commerce, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# WebStorePricebook

> Represents a store price book used in Lightning B2B Commerce.  This object
    is available in API version 48.0 and later.

# WebStorePricebook

Represents a store price book used in Lightning B2B Commerce. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the WebStorePricebook is active (true) or not (false). Default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the store price book record. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the price book assigned to the store. |
| WebStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the store assigned to the price book. |

## Usage

Use the WebStorePricebook object to assign price books to a store. When you assign a price book to a web store, any buyer who has access to the store can price products from the assigned price books. When a store or buyer has multiple price book assignments, including prices to the same product, the price is determined by the pricing strategy of the store.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WebStorePricebookFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for this object.

## Related Topics

- WebStorePricebookFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
