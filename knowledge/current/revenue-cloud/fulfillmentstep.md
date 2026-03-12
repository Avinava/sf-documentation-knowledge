---
title: "FulfillmentStep"
domain: revenue-cloud
topic: fulfillmentstep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:11.458Z
estimatedTokens: 2892
keywords: [FulfillmentStep, task, that's, perform, certain, action, part, order, fulfillment, manual, automated, API, version, 61.0, later]
---

# FulfillmentStep

> Represents a task that's required to perform a certain action as part
         of order fulfillment. This task can be manual or automated. This object is available
      in API version 61.0 and later.

# FulfillmentStep

Represents a task that's required to perform a certain action as part of order fulfillment. This task can be manual or automated. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualCompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the fulfillment step state changed to Completed or Skipped. |
| ActualStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the fulfillment step state changed to Ready. |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or queue associated with the fulfillment step.This field is a polymorphic relationship field.Relationship NameAssignedToRelationship TypeLookupRefers ToQueue, User |
| CompensatedStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe alternative step that's executed when a particular step in the fulfillment plan is amended or canceled.This field is a relationship field. This field is available in API version 62.0 and later.Relationship NameCompensatedStepRefers ToFulfillmentStep |
| DelayOf | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the delay. This field is available in API version 63.0 and later. |
| DelayUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit for the delay of the fulfillment step. This field is available in API version 63.0 and later.Valid values are:DaysHoursMinutes |
| ExecuteOn | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies when to execute the fulfillment step. This field is available in API version 63.0 and later.Valid values are:PreviousStepExecutionDateSourceLineStartDate |
| ExecuteOnRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the expression set. The fulfillment step is executed only when its corresponding expression set returns the value true.This field is a polymorphic relationship field.Relationship NameExecuteOnRuleRelationship TypeLookupRefers ToExpressionSet |
| ExecutionMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only. |
| FalloutQueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fallout queue that's associated with the fallout task. This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameFalloutQueueRefers ToGroup |
| FlowDefinitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the flow definition that's associated with the AutoTask type of fulfillment step. This field is available in API version 62.0 and later. |
| FlowInterviewId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe flow interview associated with the fulfillment step.This field is a relationship field.Relationship NameFlowInterviewRelationship TypeLookupRefers ToFlowInterview |
| ForcePlanFreezeDuringExecution | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to freeze the plan while the step is in progress. If enabled, specifies how to complete the step before resuming the plan. This field is available in API version 63.0 and later.Valid values are:NeverYesButWaitForStepCompletionThe default value is Never. |
| FulfillmentPlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe fulfillment plan associated with the fulfillment step.This field is a relationship field.Relationship NameFulfillmentPlanRelationship TypeLookupRefers ToFulfillmentPlan |
| FulfillmentStepDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fulfillment step definition associated with the fulfillment step.This field is a relationship field.Relationship NameFulfillmentStepDefinitionRelationship TypeLookupRefers ToFulfillmentStepDefinition |
| IntegrationDefinitionNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameIntegrationDefinitionNameRelationship TypeLookupRefers ToIntegrationProviderDef |
| IsSkipBranch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the remaining steps in the fulfillment step group are skipped from execution when the Execute On Rule condition is set (true) or not (false). This field is available in API version 62.0 and later.The default value is false. |
| JeopardyStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe jeopardy status of the fulfillment step.This field is a calculated field. |
| JeopardyThreshold | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days, hours, minutes, or seconds, counting back from the expected duration, before a fulfillment step is in jeopardy. |
| JeopardyThresholdUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time unit of the jeopardy threshold.Valid values are:DaysHoursMinutesSecondsThe default value is Minutes. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the fulfillment step. |
| NextEarliestRunTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe next available time for the process execution. This field is available in API version 62.0 and later. |
| OmniscriptName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor inyternal use only. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PlannedCompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time Dynamic Revenue Orchestrator estimates that the fulfillment step will complete. |
| PlannedStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the Dynamic Revenue Orchestrator calculates the fulfillment step state change to Ready. |
| PointOfNoReturn | TypemultipicklistPropertiesCreate, Filter, NillableDescriptionThe type of source change applied to the line item. This field is available in API version 62.0 and later.Valid value is:Changes Denied |
| RequestedCompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned completion date and time of the fulfillment step. |
| RequestedStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned start date and time of the fulfillment step. |
| ResumeOnRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rule set or expression set for the fulfillment step. The step is completed only when the corresponding expression set returns the isExecuteStep output as true.This field is a polymorphic relationship field.Relationship NameResumeOnRuleRelationship TypeLookupRefers ToExpressionSet |
| RetryAttempts | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of attempts allowed for retry as set up in the Fallout Qualification Rule table. |
| RunAsUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOverrides user context for an automated step. The default user context is AutomatedProc user.This field is a relationship field.Relationship NameRunAsUserRelationship TypeLookupRefers ToUser |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state of the fulfillment step. For example, In Progress or Completed.Valid values are:CompletedFailedFatallyFailedInProgressPendingReadyScheduledSkipped |
| StepType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe fulfillment step type associated with the fulfillment step.Valid values are:AutoTaskCalloutManualTaskMilestonePauseStagedAssetize—Available in API version 63.0 and later. |
| TaskAllocationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method of assigning the manual step. This field is available in API version 63.0 and later.Valid values are:ContextBasedLeastLoadedRoundRobin |
| TaskId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the task assigned to a user or queue. This field is available in API version 63.0 and later.This field is a relationship field.Relationship NameTaskRefers ToTask |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe details about the business that uses Fulfillment Orchestration. Some examples of UsageBy include Financial Services Cloud and CPQ.Valid values are:FulfillmentInsuranceRuleActionIntegrationOrchestratorOrderFulfillmentStageManagement |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentStepChangeEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FulfillmentStepHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FulfillmentStepShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentStepChangeEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm)
- FulfillmentStepHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- FulfillmentStepShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
