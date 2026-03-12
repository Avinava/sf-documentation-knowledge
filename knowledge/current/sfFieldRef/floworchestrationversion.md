---
title: "FlowOrchestrationVersion"
domain: sfFieldRef
topic: floworchestrationversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.339Z
estimatedTokens: 552
keywords: [FlowOrchestrationVersion, version, orchestration, API, 62.0, later]
---

# FlowOrchestrationVersion

> Represents the version of an orchestration.  This object is available
      in API version 62.0 and later.

# FlowOrchestrationVersion

Represents the version of an orchestration. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowOrchestrationVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_floworchestrationversion.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivatedById | User ID | reference |  | 18 |  |  |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| ApiVersion | API Version | double |  |  | 18 | 1 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 65535 |  |  |
| FlowOrchestrationId | Orchestration ID | reference |  | 18 |  |  |
| Id | Orchestration Version ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOverridable | Overridable | boolean |  |  |  |  |
| IsTemplate | Template | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Orchestration Version Name | string |  | 255 |  |  |
| OrchestrationType | Orchestration Type | picklist |  | 255 |  |  |
| OverriddenById | Orchestration ID | reference |  | 18 |  |  |
| OverriddenOrchestrationId | Orchestration ID | reference |  | 18 |  |  |
| RunInMode | Run in Mode | picklist |  | 255 |  |  |
| SourceTemplateId | Orchestration ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TriggerObjectOrEventLabel | Triggering Object or Platform Event Label | string |  | 255 |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
