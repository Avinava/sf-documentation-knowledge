---
title: "FlowOrchestration"
domain: sfFieldRef
topic: floworchestration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.280Z
estimatedTokens: 647
namespace: NamespacePrefix
keywords: [FlowOrchestration, orchestration, definition, API, version, 62.0, later]
---

# FlowOrchestration

> Represents the details of an orchestration definition. This object is
      available in API version 62.0 and later.

**Namespace:** `NamespacePrefix`

# FlowOrchestration

Represents the details of an orchestration definition. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowOrchestration](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_floworchestration.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveVersionId | Orchestration Version ID | reference |  | 18 |  |  |
| ApiName | API Name | string |  | 255 |  |  |
| ApiVersion | API Version | int | 9 |  |  |  |
| AverageRunTime | Average Run Time | int | 9 |  |  |  |
| CompletionRate | Completion Rate | percent |  |  | 3 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 65535 |  |  |
| FailedRunCount | Failed Run Count | int | 9 |  |  |  |
| Id | Orchestration ID | id |  | 18 |  |  |
| InstalledPackageName | Package Name | string |  | 255 |  |  |
| IsCitizenEnabled | Citizen Enabled | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOverridable | Overridable | boolean |  |  |  |  |
| IsTemplate | Template | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ManageableState | Package State | picklist |  | 255 |  |  |
| Name | Orchestration Label | string |  | 255 |  |  |
| NamespacePrefix | Orchestration Namespace | string |  | 40 |  |  |
| OrchestrationDefinition | Orchestration Definition | string |  | 15 |  |  |
| OrchestrationLabel | Orchestration Label | string |  | 255 |  |  |
| OrchestrationType | Orchestration Type | picklist |  | 255 |  |  |
| OverriddenById | Orchestration ID | reference |  | 18 |  |  |
| OverriddenOrchestrationId | Orchestration ID | reference |  | 18 |  |  |
| RunCount | Run Count | int | 9 |  |  |  |
| SourceTemplateId | Orchestration ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TriggerType | Trigger Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
