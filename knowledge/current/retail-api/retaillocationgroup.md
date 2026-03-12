---
title: "RetailLocationGroup"
domain: retail-api
topic: retaillocationgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.690Z
estimatedTokens: 545
keywords: [RetailLocationGroup, Group, retail, stores, shared, features, size, location, part, chain, API, version, 47.0, later, Calls]
---

# RetailLocationGroup

> Group retail stores based on shared features, such as size, location, part of a
      retail chain. This object is available in API version 47.0 and later.

# RetailLocationGroup

Group retail stores based on shared features, such as size, location, part of a retail chain. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUser-defined description of the store group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUser-defined name of the store group. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the retail store group record owner. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[RetailLocationGroupFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[RetailLocationGroupHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[RetailLocationGroupShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RetailLocationGroupFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- RetailLocationGroupHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- RetailLocationGroupShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
