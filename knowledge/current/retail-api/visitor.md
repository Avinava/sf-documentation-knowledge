---
title: "Visitor"
domain: retail-api
topic: visitor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.685Z
estimatedTokens: 467
keywords: [Visitor, sales, reps, performing, visits, API, version, 49.0, later, Calls, Associated, Objects]
---

# Visitor

> Represents the sales reps performing visits. This object is available in
    API version 49.0 and later.

# Visitor

Represents the sales reps performing visits. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLookup to the person assigned as the visitor. This fields references the User, ServiceResource, and Contact objects. |
| IsPrimaryResource | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the visitor is the primary visitor for a visit. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user is a required visitor for the visit. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the visitor. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the Visit record this visitor is associated with. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[VisitorFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- VisitorFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
