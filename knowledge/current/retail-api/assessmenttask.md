---
title: "AssessmentTask"
domain: retail-api
topic: assessmenttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.539Z
estimatedTokens: 1124
keywords: [AssessmentTask, Perform, activities, planogram, check, inventory, promotion, in-store, survey, custom, task, stores, capture, API, version]
---

# AssessmentTask

> Perform activities such as planogram check, inventory check, promotion check,
      in-store survey, or custom task in stores to capture information. This object is
    available in API version 47.0 and later.

# AssessmentTask

Perform activities such as planogram check, inventory check, promotion check, in-store survey, or custom task in stores to capture information. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment task definition that is referenced for the task. This field is available in API version 48.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of task that has to be performed at the store. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the task is completed by a field rep. This field is available in API version 49.0 and later. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether a task must be completed to complete a visit. The default value is False. This field is available in API version 48.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the assessment task record owner. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visit associated with an assessment task.This field is available in API version 48.0 and later. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which the tasks must be performed. This field is available in API version 48.0 and later. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the task is started by a field rep. This field is available in API version 49.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionView the status of a task. This field is available in API version 48.0 and later.Possible values are:CompletedInProgress—In ProgressNotStarted—Not Started |
| TaskDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to related records such as signature task, delivery task, other Component task, flow, and SFDC task.This field is a polymorphic relationship field. This field is available in API version 48.0 and later.Relationship NameTaskDefinitionRefers ToDeliveryTask, OtherComponentTask, RecordAction, SignatureTask, Task |
| TaskType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType of a task that the sales rep can perform during the visit. The task type must match the task type of the assessment task definition.Possible values are:ConductInStoreSurveysInventoryCheckOtherPlaceOrderPlanogramCheckPromotionCheck |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

[AssessmentTaskHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[AssessmentTaskShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[AssessmentTaskFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

## Related Topics

- AssessmentTaskHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- AssessmentTaskShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
- AssessmentTaskFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
