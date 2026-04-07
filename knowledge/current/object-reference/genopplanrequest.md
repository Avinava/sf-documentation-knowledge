---
title: "GenOpPlanRequest"
domain: object-reference
topic: genopplanrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:42.264Z
estimatedTokens: 1036
keywords: [GenOpPlanRequest, generate, service, plan, API, version, 67.0, later, Calls, Special, Access, Rules]
---

# GenOpPlanRequest

> Represents a request to generate a service plan. This object is
			available in API version 67.0 and later.

# GenOpPlanRequest

Represents a request to generate a service plan. This object is available in API version 67.0 and later.

Each request is stored as record data. We support all delete operations at the record or bulk level. For example, you can [use Bulk API 2.0 to delete multiple records in Marketing Cloud Next](https://developer.salesforce.com/docs/marketing/marketing-cloud-growth/guide/mc-manage-objects-delete-bulk.html).

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

To access this object, you must have the Service Planner Access add-on license.

## Fields

| Field Name | Details |
| --- | --- |
| CopilotId | TypereferencePropertiesFilter, Group, Sort, NillableDescription(Optional) The ID of the Einstein Copilot associated with the plan request.This field is a relationship field.Relationship NameCopilotRefers ToGenAiPlannerDefinition |
| CopilotName | TypestringPropertiesFilter, Group, Sort, NillableDescription(Optional) The name of the Einstein Copilot associated with the plan request. |
| ErrorCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescription(Optional) The standard error code when plan generation fails.Possible values are:AgentNotActiveAgentNotFoundCaseGroundingNotEnabled (Service AI Grounding isn’t enabled)InstructionsOrActionsNotFoundInsufficientDataInvalidRecordIdNoEligibilityDefined (No eligibility criteria defined)NotEligibleRagConfigurationErrorStepSummaryEmptyTopicIdNotFoundTopicNotFoundUnknown |
| ErrorMessage | TypestringPropertiesFilter, Group, Sort, NillableDescription(Optional) The error message when plan generation fails. |
| LlmModelName | TypestringPropertiesFilter, Group, Sort, NillableDescription(Optional) The name of the large language model used for plan generation. The maximum length is 80 characters. |
| LlmProviderName | TypestringPropertiesFilter, Group, Sort, NillableDescription(Optional) The name of the LLM provider. The maximum length is 80 characters. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Required) The auto-generated name of the generated operation plan request. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescription(Required) The ID of the service plan parent record.This field is a polymorphic relationship field.Relationship NameParentRelationship TypeMaster-detailRefers ToCase, Incident, MessagingSession, Opportunity (the master object) |
| PromptTemplateDevName | TypestringPropertiesFilter, Group, Sort, NillableDescription(Optional) The developer name of the prompt template used for plan generation. The maximum length is 80 characters. |
| PromptTemplateVersionNo | TypeintPropertiesFilter, Group, Sort, NillableDescription(Optional) The version number of the prompt template. |
| Reason | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescription(Required) The reason why plan generation failed or returned no steps.Possible values are:CannotGeneratePlanNoEligibilityConfig (no eligibility criteria set)None (default)NoPlanGenerated PlanEmptyPlanEmptyInsufficientDataRagConfigurationErrorThresholdError (eligibility not met for unknown reason)ThresholdNotMet |
| RequestSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescription(Optional) The source where the plan request originated.Possible values are:CASEEINSTEIN_LEX (Einstein Chat LEX component)INCIDENT |
| RequestType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescription(Required) The type of service plan request.Possible values are:CloseGenerationSummary (default) |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescription(Required) The status of the plan generation request.Possible values are:ErrorIncompleteInProgress (default)Success |
| Utterance | TypetextareaPropertiesNillableDescription(Optional) The natural language input or prompt used for plan generation. The maximum length is 32,000 characters. |
