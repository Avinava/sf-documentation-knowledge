---
title: "CarePgmEnrolleeWkOrdStep"
domain: life-sciences-dev-guide
topic: carepgmenrolleewkordstep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.277Z
estimatedTokens: 1082
keywords: [CarePgmEnrolleeWkOrdStep, step, work, order, that's, executed, care, program, enrollee, API, version, 58.0, later, Calls, Associated]
---

# CarePgmEnrolleeWkOrdStep

> Represents information about the step in a work order that's executed for the
         care program enrollee. This object is available in API version 58.0 and later.

# CarePgmEnrolleeWkOrdStep

Represents information about the step in a work order that's executed for the care program enrollee. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the action plan template containing the tasks related to each work order step.This field is a relationship field.Relationship NameActionPlanTemplateRelationship TypeLookupRefers ToActionPlanTemplate |
| AreAllTasksCompleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermine whether all the child tasks for the step are completed (true) or not (false).The default value is false. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the end date and time for the execution of the work order step. |
| IsCustodyCompleted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermine whether all the custody chain entries for the step and the related tasks are completed (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRepresents the name of the step associated with the care program enrollee work order record. |
| ParentEnrolleeWorkOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents the parent work order of the care program enrollee that's associated with the step.This field is a relationship field.Relationship NameParentEnrolleeWorkOrderRelationship TypeMaster-DetailRefers ToCarePgmEnrolleeWorkOrder |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the sequence in which the work order step will be executed. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the start date and time for the execution of the work order step. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the execution status of the work order step.Possible values are:CanceledCompletedInProgressNotStarted |
| WorkTypeStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type step for which the work order step of the care program enrollee is created.This field is a polymorphic relationship field.Relationship NameWorkTypeStepRelationship TypeLookupRefers ToWorkTypeStep |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePgmEnrolleeWkOrdStepChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CarePgmEnrolleeWkOrdStepFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- CarePgmEnrolleeWkOrdStepChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CarePgmEnrolleeWkOrdStepFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
