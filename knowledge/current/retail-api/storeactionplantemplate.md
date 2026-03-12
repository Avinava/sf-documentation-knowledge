---
title: "StoreActionPlanTemplate"
domain: retail-api
topic: storeactionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.792Z
estimatedTokens: 551
keywords: [StoreActionPlanTemplate, Associate, action, plan, template, store, API, version, 48.0, later, Calls, Associated, Objects]
---

# StoreActionPlanTemplate

> Associate an action plan template with a store. This object is available
    in API version 48.0 and later.

# StoreActionPlanTemplate

Associate an action plan template with a store. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of an action plan template item that is associated with a retail store. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinal date of the association between an action plan template and a store. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for this association. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of the association between an action plan template and a store. |
| StoreId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the retail store for which the action plan template is defined. |

## Associated Objects

This object has the following associated objects. Unless noted, they available in the same API version as this object.

[StoreActionPlanTemplateFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[StoreActionPlanTemplateHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- StoreActionPlanTemplateFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- StoreActionPlanTemplateHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
