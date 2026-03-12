---
title: "StoreAssortment"
domain: retail-api
topic: storeassortment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.783Z
estimatedTokens: 673
keywords: [StoreAssortment, Associate, assortment, either, store, group, account, API, version, 47.0, later, Calls, Associated, Objects]
---

# StoreAssortment

> Associate an assortment to either a store, a store group, or an account.
    This object is available in API version 47.0 and later.

# StoreAssortment

Associate an assortment to either a store, a store group, or an account. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the account which the retail store is part of. |
| AssortmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the assortment with which the store is associated. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate when the assortment stops being applicable to the store. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier of the association. |
| RetailLocationGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the store group. |
| RetailStoreId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the store with which the assortment is associated. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of applicability of the assortment to a store, store group, or an account. |
| cgcloud_Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the store assortment record.This field is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud_dev__RECORD_LINK, "_top") |

## Associated Objects

This object has the following associated objects. Unless noted, they available in the same API version as this object.

[StoreAssortmentFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[StoreAssortmentHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- StoreAssortmentFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- StoreAssortmentHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
