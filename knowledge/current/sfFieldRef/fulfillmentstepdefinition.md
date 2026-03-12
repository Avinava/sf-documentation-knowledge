---
title: "FulfillmentStepDefinition"
domain: sfFieldRef
topic: fulfillmentstepdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:58.848Z
estimatedTokens: 505
keywords: [FulfillmentStepDefinition, definition, step, executed, fulfillment, orchestration, API, version, 61.0, later]
---

# FulfillmentStepDefinition

> Represents a definition of a step that must be executed during
         fulfillment orchestration. This object is available in API version 61.0 and
      later.

# FulfillmentStepDefinition

Represents a definition of a step that must be executed during fulfillment orchestration. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillmentStepDefinition in the Dynamic Revenue Orchestrator Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssignedToId | Assigned To ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomFulfillmentScope | Custom Fulfillment Scope | string |  | 255 |  |  |
| ExecuteOnRuleId | Execute On Rule ID | reference |  | 18 |  |  |
| FlowDefinitionName | Flow Definition Name | string |  | 255 |  |  |
| Id | Fulfillment Step Definition ID | id |  | 18 |  |  |
| IntegrationDefinitionNameId | Integration Provider Definition ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSkipBranch | Skip Branch | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Fulfillment Step Definition Name | string |  | 255 |  |  |
| OmniscriptName | Omniscript Name | string |  | 255 |  |  |
| ResumeOnRuleId | Resume On Rule ID | reference |  | 18 |  |  |
| RunAsUserId | User ID | reference |  | 18 |  |  |
| Scope | Scope | picklist |  | 255 |  |  |
| StepDefinitionGroupId | Fulfillment Step Definition Group ID | reference |  | 18 |  |  |
| StepType | Step Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskAllocationType | Step Assignment Method | picklist |  | 255 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
