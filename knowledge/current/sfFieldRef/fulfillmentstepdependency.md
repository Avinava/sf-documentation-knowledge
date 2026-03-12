---
title: "FulfillmentStepDependency"
domain: sfFieldRef
topic: fulfillmentstepdependency
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.874Z
estimatedTokens: 297
keywords: [FulfillmentStepDependency, dependency, tasks, defining, order, task, depends, API, version, 61.0, later]
---

# FulfillmentStepDependency

> Represents a dependency between tasks by defining the order between a
         task and one that depends on it. This object is available in API version 61.0 and
      later.

# FulfillmentStepDependency

Represents a dependency between tasks by defining the order between a task and one that depends on it. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillmentStepDependency in the Dynamic Revenue Orchestrator Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DependencyDefinitionId | Fulfillment Step Dependency Def ID | reference |  | 18 |  |  |
| DependentStepId | Fulfillment Step ID | reference |  | 18 |  |  |
| DependsOnStepId | Fulfillment Step ID | reference |  | 18 |  |  |
| Id | Fulfillment Step Dependency ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
