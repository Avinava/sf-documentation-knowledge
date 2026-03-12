---
title: "FlowOrchestrationStageInstance"
domain: sfFieldRef
topic: floworchestrationstageinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.313Z
estimatedTokens: 385
keywords: [FlowOrchestrationStageInstance, run-time, instance, stage, orchestration, read-only, API, version, 53.0, later]
---

# FlowOrchestrationStageInstance

> Represents a run-time instance of a stage in a run-time instance of an
         orchestration. This read-only object is available in API version 53.0 and later.

# FlowOrchestrationStageInstance

Represents a run-time instance of a stage in a run-time instance of an orchestration. This read-only object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowOrchestrationStageInstance](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_floworchestrationstageinstance.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Orchestration Stage Run ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Label | Label | string |  | 80 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrchestrationInstanceId | Orchestration Run ID | reference |  | 18 |  |  |
| OrchestrationName | Orchestration Developer Name | string |  | 80 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Position | Position | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
