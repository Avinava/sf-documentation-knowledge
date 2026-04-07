---
title: "ActionPlanStatusPeriod"
domain: life-sciences-dev-guide
topic: actionplanstatusperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:09.328Z
estimatedTokens: 958
keywords: [ActionPlanStatusPeriod, historical, changes, status, action, plan, Calls, Associated, Objects]
---

# ActionPlanStatusPeriod

> Represents the historical changes to the status of an action
      plan.

# ActionPlanStatusPeriod

Represents the historical changes to the status of an action plan.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Action Plan associated with the Action Plan status period.This field is a relationship field.Relationship NameActionPlanRelationship TypeMaster-detailRefers ToActionPlan (the master object) |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe effective end date and time of the Action Plan status. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the action plan status period. |
| Reason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why the action plan was assigned the status. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe effective start date and time of the action plan status. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the action plan.Possible values are:Not StartedIn ProgressCancelledRestartedDraftAssignedThe default value is Not Started. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanStatusPeriodChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ActionPlanStatusPeriodFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionPlanStatusPeriodHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ActionPlanStatusPeriodChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ActionPlanStatusPeriodFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ActionPlanStatusPeriodHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
