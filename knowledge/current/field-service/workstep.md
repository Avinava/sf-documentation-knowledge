---
title: "WorkStep"
domain: field-service
topic: workstep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.911Z
estimatedTokens: 1084
keywords: [WorkStep, Represents, work, step, plan., API, version, 52.0, later., Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# WorkStep

> Represents a work step in a work plan. This object is available in API
    version 52.0 and later.

# WorkStep

Represents a work step in a work plan. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionDefinition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe platform action that the work step executes. The possible values are the names of the flow and quick actions configured in your org. To launch Lightning Web Components from Work Steps, you must use QuickAction on the action definition. |
| ActionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of platform action that the work step is associated with.Possible values are:FlowQuickAction |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the work step. |
| EndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the work step ends. The value must be greater than or equal to StartTime. |
| ExecutionOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which the work step is executed. Only positive integer values or null are supported. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The user-defined name of the work step. |
| PausedFlowInterviewId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe auto-populated ID of the flow interview paused by a user. |
| ProcessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe flow process type launched from the work step.Possible values are:DataCaptureFlow—Data Capture FlowDiscoveryFrameworkFlow—Discovery Framework Data Capture Flow (Beta)FieldServiceMobileFlow—Field Service Mobile FlowThe default value is DataCaptureFlow. |
| StartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time the work step starts. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe customizable status of the work order. Every status must be mapped to a status category, but there can be status categories not mapped to a status.Possible values are:CompletedIn ProgressNewNot ApplicablePaused |
| StatusCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category that each status value belongs to. Each default status category is mapped to the corresponding default status. If you create a custom status, you must indicate which status category it belongs to. To learn which processes reference StatusCategory, see How are Status Categories Used?.Possible values are:CompletedInProgressNewNotApplicablePaused |
| WorkOrderId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the work order. |
| WorkOrderLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the work order line item. |
| WorkPlanExecutionOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the plan execution order. |
| WorkPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the work plan. |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

WorkStepChangeEvent

Change events are available for the object.

WorkStepFeed

Feed tracking is available for the object.

WorkStepHistory

History is available for tracked fields of the object.
