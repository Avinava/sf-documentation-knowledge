---
title: "AssessmentTask"
domain: health-cloud-object-reference
topic: assessmenttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.051Z
estimatedTokens: 1173
keywords: [AssessmentTask, Perform, activities, patient, registration, order, authorization, capture, Special, Access, Rules, Calls, Associated, Objects]
---

# AssessmentTask

> Perform activities such as patient registration or order authorization
      to capture information.

# AssessmentTask

Perform activities such as patient registration or order authorization to capture information.

## Special Access Rules

In Health Cloud, this object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentTaskDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment task definition that is referenced for the task. This field is a relationship field.Relationship NameAssessmentTaskDefinitionRefers ToAssessmentTaskDefinition |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the user that's assigned the task. This field is a polymorphic relationship field.In Health Cloud, this field and is available in API version 58.0 and later.Relationship NameAssignedToRelationship TypeLookupRefers ToUser |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of task that has to be performed at the store. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the assessment task is completed. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether a task must be completed to complete a visit. The default value is False.In Health Cloud, this field is available in API version 48.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this assessment template. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe visit associated with an assessment task. This field is a relationship field.In Health Cloud, this field is available in API version 48.0 and later.Relationship NameParentRefers ToVisit |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record with which the associated task is related. This field is a polymorphic relationship field.In Health Cloud, this field is available in API version 58.0 and later.Relationship NameReferenceRecordRelationship TypeLookupRefers ToCarePgmEnrolleeWkOrdStep, ActionPlan, PrvdEngmtComplianceCycleBased on the availability of objects in your org. |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence in which the tasks must be performed.In Health Cloud, this field is available in API version 48.0 and later. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime when the task was started by a field rep. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionView the status of a task.Possible values are:CompletedInProgress—In ProgressNotStarted—Not StartedSkippedThe default value is Not Started.In Health Cloud, this field is available in API version 48.0 and later. |
| TaskType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType of a task that the sales rep can perform during the visit.Possible values are:ConductInStoreSurveysInventoryCheckOtherPlaceOrderPlanogramCheckPromotionCheck |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

-   [AssessmentTaskShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")
-   [AssessmentTaskFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")
