---
title: "QueueRoutingConfig"
domain: sfFieldRef
topic: queueroutingconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.014Z
estimatedTokens: 447
keywords: [QueueRoutingConfig, settings, determine, how, work, items, routed, agents, API, version, 32.0, later]
---

# QueueRoutingConfig

> Represents the settings that determine how work items are routed to
   agents. This object is available in API version 32.0 and later.

# QueueRoutingConfig

Represents the settings that determine how work items are routed to agents. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [QueueRoutingConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_queueroutingconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CapacityPercentage | Percentage of Capacity | percent |  |  | 5 | 2 |
| CapacityWeight | Units of Capacity | double |  |  | 10 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DropAdditionalSkillsTimeout | Drop Additional Skills Time-Out (seconds) | int | 9 |  |  |  |
| Id | Routing Configuration ID | id |  | 18 |  |  |
| IsAttributeBased | Use with Skills-Based Routing Rules | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Routing Configuration Name | string |  | 80 |  |  |
| OverflowAssigneeId | OverflowAssignee ID | reference |  | 18 |  |  |
| PushTimeout | Push Time-Out (seconds) | int | 9 |  |  |  |
| RoutingModel | Routing Model | picklist |  | 255 |  |  |
| RoutingPriority | Routing Priority | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
