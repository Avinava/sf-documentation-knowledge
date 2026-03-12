---
title: "AssessmentTaskDefinition"
domain: retail-api
topic: assessmenttaskdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.549Z
estimatedTokens: 617
keywords: [AssessmentTaskDefinition, Associate, assessment, task, indicator, definition, API, version, 48.0, later, Calls, Associated, Objects]
---

# AssessmentTaskDefinition

> Associate an assessment task with an assessment indicator definition. This
    object is available in API version 48.0 and later.

# AssessmentTaskDefinition

Associate an assessment task with an assessment indicator definition. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the assessment task definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the assessment Indicator definition record owner. |
| TaskType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of a task that the sales rep can perform during the visit.Possible values are:ConductInStoreSurveysInventoryCheckOtherPlaceOrderPlanogramCheckPromotionCheck |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AssessmentTaskDefinitionHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[AssessmentTaskDefinitionShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[AssessmentTaskDefinitionFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

## Related Topics

- AssessmentTaskDefinitionHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- AssessmentTaskDefinitionShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
- AssessmentTaskDefinitionFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
