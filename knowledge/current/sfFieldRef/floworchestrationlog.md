---
title: "FlowOrchestrationLog"
domain: sfFieldRef
topic: floworchestrationlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.307Z
estimatedTokens: 462
keywords: [FlowOrchestrationLog, logging, data, FlowOrchestrationInstance, API, version, 54.0, later]
---

# FlowOrchestrationLog

> Represents logging data for a FlowOrchestrationInstance. This object is available in API version 54.0 and later.

# FlowOrchestrationLog

Represents logging data for a FlowOrchestrationInstance. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowOrchestrationLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_floworchestrationlog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Actor | Completed By | string |  | 255 |  |  |
| Assignee | Assigned To | string |  | 255 |  |  |
| AssigneeType | Assignment Type | picklist |  | 255 |  |  |
| Comments | Comments | string |  | 1333 |  |  |
| Context | Context Record | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Duration | Duration (seconds) | long | 18 |  |  |  |
| Id | Orchestration Run Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Kind | Milestone | picklist |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrchestrationInstanceId | Orchestration Run ID | reference |  | 18 |  |  |
| OrchestrationName | Orchestration Name | string |  | 80 |  |  |
| OrchestrationVersion | Orchestration Version | int | 9 |  |  |  |
| StageName | Stage | string |  | 80 |  |  |
| StepName | Step | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Timestamp | Timestamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
