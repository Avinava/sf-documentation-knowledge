---
title: "FulfillmentStepDependencyDef"
domain: sfFieldRef
topic: fulfillmentstepdependencydef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.879Z
estimatedTokens: 299
keywords: [FulfillmentStepDependencyDef, dependency, created, two, fulfillment, step, records, API, version, 62.0, later]
---

# FulfillmentStepDependencyDef

> Represents a dependency that must be created between two fulfillment
         step records. This object is available in API version 62.0 and later.

# FulfillmentStepDependencyDef

Represents a dependency that must be created between two fulfillment step records. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillmentStepDependencyDef in the Dynamic Revenue Orchestrator Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DependencyScope | Dependency Scope | picklist |  | 255 |  |  |
| DependsOnStepDefinitionId | Fulfillment Step Definition ID | reference |  | 18 |  |  |
| FulfillmentStepDefinitionId | Fulfillment Step Definition ID | reference |  | 18 |  |  |
| Id | Fulfillment Step Dependency Def ID | id |  | 18 |  |  |
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
