---
title: "FulfillmentStep"
domain: sfFieldRef
topic: fulfillmentstep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:58.840Z
estimatedTokens: 764
keywords: [FulfillmentStep, task, that's, perform, certain, action, part, order, fulfillment, manual, automated, API, version, 61.0, later]
---

# FulfillmentStep

> Represents a task that's required to perform a certain action as part
         of order fulfillment. This task can be manual or automated. This object is available
      in API version 61.0 and later.

# FulfillmentStep

Represents a task that's required to perform a certain action as part of order fulfillment. This task can be manual or automated. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillmentStep in the Dynamic Revenue Orchestrator Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualCompletionDate | Actual Completion Time | datetime |  |  |  |  |
| ActualStartDate | Actual Start Time | datetime |  |  |  |  |
| AssignedToId | Assigned To ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExecuteOnRuleId | Execute On Rule ID | reference |  | 18 |  |  |
| ExecutionMessage | Execution Message | string |  | 255 |  |  |
| FalloutQueueId | Group ID | reference |  | 18 |  |  |
| FlowDefinitionName | Flow Definition Name | string |  | 255 |  |  |
| FlowInterviewId | Flow Interview ID | reference |  | 18 |  |  |
| FulfillmentPlanId | Fulfillment Plan ID | reference |  | 18 |  |  |
| FulfillmentStepDefinitionId | Fulfillment Step Definition ID | reference |  | 18 |  |  |
| Id | Fulfillment Step ID | id |  | 18 |  |  |
| IntegrationDefinitionNameId | Integration Provider Definition ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSkipBranch | Skip Branch | boolean |  |  |  |  |
| IsVisibleByExternalUsers | Visible By External Users | boolean |  |  |  |  |
| JeopardyStatus | Jeopardy Status | string |  | 40 |  |  |
| JeopardyThreshold | Jeopardy Threshold | int | 9 |  |  |  |
| JeopardyThresholdUnit | Jeopardy Threshold Unit | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Fulfillment Step Name | string |  | 255 |  |  |
| NextEarliestRunTime | Next Earliest Run Time | datetime |  |  |  |  |
| OmniscriptName | Omniscript Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PlannedCompletionDate | Expected Completion Time | datetime |  |  |  |  |
| PlannedStartDate | Expected Start Time | datetime |  |  |  |  |
| ResumeOnRuleId | Resume On Rule ID | reference |  | 18 |  |  |
| RetryAttempts | Retry Attempts | int | 9 |  |  |  |
| RunAsUserId | User ID | reference |  | 18 |  |  |
| State | State | picklist |  | 255 |  |  |
| StepDefIdentifier | Step Definition Identifier | string |  | 255 |  |  |
| StepType | Step Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskAllocationType | Step Assignment Method | picklist |  | 255 |  |  |
| TaskId | Activity ID | reference |  | 18 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
