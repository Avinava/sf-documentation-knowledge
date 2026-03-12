---
title: "FlowOrchestrationInstance"
domain: sfFieldRef
topic: floworchestrationinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.294Z
estimatedTokens: 541
keywords: [FlowOrchestrationInstance, run-time, instance, orchestration, API, version, 53.0, later]
---

# FlowOrchestrationInstance

> Represents a run-time instance of an orchestration. This object is
      available in API version 53.0 and later.

# FlowOrchestrationInstance

Represents a run-time instance of an orchestration. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowOrchestrationInstance](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_floworchestrationinstance.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuxiliaryTriggeringRecord | Auxiliary Triggering Record | string |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentStage | Current Stage | string |  | 100 |  |  |
| Duration | Duration | long | 18 |  |  |  |
| FlowDefinitionVersionName | Flow Definition Version Name | picklist |  | 255 |  |  |
| FlowType | Flow Type | picklist |  | 255 |  |  |
| Id | Orchestration Run ID | id |  | 18 |  |  |
| InterviewId | Interview ID | reference |  | 18 |  |  |
| IsDebugRun | Debug Run | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrchestrationDeveloperName | Orchestration Developer Name | string |  | 80 |  |  |
| OrchestrationLabel | Orchestration Name | string |  | 255 |  |  |
| OrchestrationName | Orchestration Developer Name | string |  | 80 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TriggeringRecord | Triggering Record ID | string |  | 40 |  |  |
| TriggeringRecordType | Triggering Record Type | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
