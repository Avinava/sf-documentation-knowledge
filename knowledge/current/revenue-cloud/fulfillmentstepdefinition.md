---
title: "FulfillmentStepDefinition"
domain: revenue-cloud
topic: fulfillmentstepdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:11.474Z
estimatedTokens: 1918
keywords: [FulfillmentStepDefinition, definition, step, executed, fulfillment, orchestration, API, version, 61.0, later, Calls]
---

# FulfillmentStepDefinition

> Represents a definition of a step that must be executed during
         fulfillment orchestration. This object is available in API version 61.0 and
      later.

# FulfillmentStepDefinition

Represents a definition of a step that must be executed during fulfillment orchestration. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AmendGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fulfillment step group that's added to the fulfillment plan when the step is amended. This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameAmendGroupRefers ToFulfillmentStepDefinitionGroup |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or queue associated with the fulfillment step definition.This field is a polymorphic relationship field.Relationship NameAssignedToRelationship TypeLookupRefers ToQueue, User |
| CancelledGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fulfillment step group that's added to the fulfillment plan when the step is canceled. This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameCancelledGroupRefers ToFulfillmentStepDefinitionGroup |
| CustomBaseExecutionDate | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context tag containing a custom date that's used to calculate the execution time for a future-dated step. This field is available in API version 65.0 and later. |
| CustomFulfillmentScope | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom scope to use during order fulfillment. This field is available in API version 65.0 and later. |
| DelayOf | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the delay. This field is available in API version 63.0 and later. |
| DelayUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit for the delay of the fulfillment step. This field is available in API version 63.0 and later.Valid values are:DaysHoursMinutes |
| ExecuteOn | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies when to execute the fulfillment step. This field is available in API version 63.0 and later.Valid values are:PreviousStepsStartDateSourceLineStartDate |
| ExecuteOnConditionData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition for executing the fulfillment step. The condition is defined as a rule or a set of rules in JSON format. This field is available in API version 66.0 and later. |
| ExecuteOnRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expression set for the fulfillment step. The step is executed only when the corresponding expression set is true.This field is a polymorphic relationship field.Relationship NameExecuteOnRuleRelationship TypeLookupRefers ToExpressionSet |
| FlowDefinitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the associated flow. |
| ForcePlanFreezeDuringExecution | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to freeze the plan while the step is in progress. If enabled, specifies how to complete the step before resuming the plan. This field is available in API version 63.0 and later.Valid values are:NeverYesButForcefullyCompleteStepThe default value is Never. |
| IntegrationDefinitionNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the integration definition that’s used to set up communication with an external endpoint.This field is a relationship field.Relationship NameIntegrationDefinitionNameRelationship TypeLookupRefers ToIntegrationProviderDef |
| IsSkipBranch | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the remaining steps in the fulfillment step group are skipped from execution when the Execute On Rule condition is set. This field is available in API version 62.0 and later.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the fulfillment step definition. |
| OmniscriptName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only. |
| PointOfNoReturn | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe type of source change applied to the line item. This field is available in API version 62.0 and later.Valid value is:Changes Denied |
| ResumeOnConditionData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition for resuming the paused fulfillment step. The condition is defined as a rule or a set of rules in JSON format. This field is available in API version 66.0 and later. |
| ResumeOnRuleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expression set for the fulfillment step definition. The step is completed when the expression set is true.This field is a polymorphic relationship field.Relationship NameResumeOnRuleRelationship TypeLookupRefers ToExpressionSet |
| RunAsUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user context to run a fulfillment step when the fulfillment operator wants to override the default autoproc user.This field is a relationship field.Relationship NameRunAsUserRelationship TypeLookupRefers ToUser |
| Scope | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe scope of the fulfillment step definition. For example, Bundle or Order.Valid values are:BundleCrossPlanLineItemPlanThe default value is Plan. |
| StepDefinitionGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionFor internal use only.This field is a relationship field.Relationship NameStepDefinitionGroupRelationship TypeMaster-detailRefers ToFulfillmentStepDefinitionGroup (the master object) |
| StepType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFor internal use only.Valid values are:AutoTaskCalloutManualTaskMilestonePauseStagedAssetize |
| TaskAllocationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method of assigning the manual step. This field is available in API version 62.0 and later.Valid value is:RoundRobinLeastLoadedContextBased |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe business vertical that uses fulfillment orchestration. For example, Financial Services Cloud.Valid values are:IntegrationOrchestratorOrderFulfillmentStageManagement |
