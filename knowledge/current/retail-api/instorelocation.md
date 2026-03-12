---
title: "InStoreLocation"
domain: retail-api
topic: instorelocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.543Z
estimatedTokens: 660
keywords: [InStoreLocation, locations, retail, store’s, layout, aisles, shelves, backrooms, API, version, 47.0, later, Calls, Associated, Objects]
---

# InStoreLocation

> Create locations within a retail store’s layout such as aisles, shelves, or
      backrooms. This object is available in API version 47.0 and later.

# InStoreLocation

Create locations within a retail store’s layout such as aisles, shelves, or backrooms. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCategory of similar in-store location types across a store group.Possible values are:AisleBackroomEndcap |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the in-store location. |
| InStoreLocationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of in-store location. Most retail stores have similar layouts and have common in-store location types.Possible values are:AssetsBackroomBinOtherShelf |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the GPS coordinates of the retail store. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUser-defined name of the in-store location. |
| PlanogramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPlanogram image associated with the in-store location. |
| RetailStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the store associated with the location. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[InStoreLocationFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[InStoreLocationHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- InStoreLocationFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- InStoreLocationHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
