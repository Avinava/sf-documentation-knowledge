---
title: "FlowOrchestrationStepInstance"
domain: sfFieldRef
topic: floworchestrationstepinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.325Z
estimatedTokens: 483
keywords: [FlowOrchestrationStepInstance, run-time, instance, step, stage, orchestration, read-only, API, version, 53.0, later]
---

# FlowOrchestrationStepInstance

> Represents a run-time instance of a step in a run-time instance of a
         stage of a run-time instance of an orchestration. This read-only object is available
      in API version 53.0 and later.

# FlowOrchestrationStepInstance

Represents a run-time instance of a step in a run-time instance of a stage of a run-time instance of an orchestration. This read-only object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowOrchestrationStepInstance](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_floworchestrationstepinstance.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Orchestration Step Run ID | id |  | 18 |  |  |
| InProgressStepOutputs | In-Progress Step Outputs | textarea |  | 100000 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Label | Label | string |  | 80 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrchestrationInstanceId | Orchestration Run ID | reference |  | 18 |  |  |
| OrchestrationName | Orchestration Developer Name | string |  | 80 |  |  |
| OrchestrationStageName | Orchestration Stage Run Name | string |  | 80 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RelatedRecord | Context Record ID | string |  | 40 |  |  |
| StageInstanceId | Orchestration Stage Run ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StepType | Step Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
