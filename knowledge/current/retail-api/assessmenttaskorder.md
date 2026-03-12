---
title: "AssessmentTaskOrder"
domain: retail-api
topic: assessmenttaskorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.559Z
estimatedTokens: 490
keywords: [AssessmentTaskOrder, Define, order, activity, sales, rep, perform, visit, stores, API, version, 47.0, later, Calls, Associated]
---

# AssessmentTaskOrder

> Define an order activity that the sales rep can perform during a visit to the
      stores. This object is available in API version 47.0 and later.

# AssessmentTaskOrder

Define an order activity that the sales rep can perform during a visit to the stores. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the assessment task. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the assessment Indicator definition for the order creation task. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the order |
| RetailStoreId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the retail store. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[AssessmentTaskOrderFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[AssessmentTaskOrderHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- AssessmentTaskOrderFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- AssessmentTaskOrderHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
