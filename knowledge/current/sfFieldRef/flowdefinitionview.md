---
title: "FlowDefinitionView"
domain: sfFieldRef
topic: flowdefinitionview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.227Z
estimatedTokens: 689
namespace: NamespacePrefix
keywords: [FlowDefinitionView, flow, definition, API, version, 46.0, later]
---

# FlowDefinitionView

> Represents the description of a flow definition. This object is
      available in API version 46.0 and later.

**Namespace:** `NamespacePrefix`

# FlowDefinitionView

Represents the description of a flow definition. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowDefinitionView](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowdefinitionview.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveVersionId | Active Flow Version API Name or ID | string |  | 255 |  |  |
| ApiName | Flow API Name | string |  | 255 |  |  |
| ApiVersion | API Version | int | 9 |  |  |  |
| AreMetricsLoggedToDataCloud | Log Metrics to Data Cloud | boolean |  |  |  |  |
| Builder | Built with | string |  | 255 |  |  |
| CapacityCategory | Capacity Category | picklist |  | 255 |  |  |
| Description | Flow Description | string |  | 255 |  |  |
| DurableId | Durable ID | string |  | 255 |  |  |
| Environments | Environments | multipicklist |  | 4099 | 0 |  |
| HasAsyncAfterCommitPath | Has Asynchronous After Commit Path | boolean |  |  |  |  |
| Id | Flow Definition View ID | id |  | 18 |  |  |
| InstalledPackageName | Package Name | string |  | 240 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsOutOfDate | Is Using an Older Version | boolean |  |  |  |  |
| IsOverridable | Overridable | boolean |  |  |  |  |
| IsSwingFlow | Is Swing Flow | boolean |  |  |  |  |
| IsTemplate | Template | boolean |  |  |  |  |
| Label | Flow Label | string |  | 255 |  |  |
| LastModifiedBy | Last Modified By | string |  | 255 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LatestVersionId | Latest Flow Version API Name or ID | string |  | 255 |  |  |
| ManageableState | Package State | picklist |  | 255 |  |  |
| NamespacePrefix | Flow Namespace | string |  | 255 |  |  |
| OverriddenById | Flow Definition View ID | string |  | 512 |  |  |
| OverriddenFlowId | Flow Definition View ID | string |  | 512 |  |  |
| ProcessType | Process Type | picklist |  | 255 |  |  |
| RecordTriggerType | Record Trigger Type | picklist |  | 255 |  |  |
| SourceTemplateId | Flow Definition View ID | string |  | 512 |  |  |
| SupportedEnvironments | Supported Environments | string |  | 255 |  |  |
| TriggerObjectOrEventId | Entity Definition ID | string |  | 512 |  |  |
| TriggerObjectOrEventLabel | Triggering Object or Platform Event Label | string |  | 255 |  |  |
| TriggerOrder | Trigger Order | int | 9 |  |  |  |
| TriggerType | Trigger | picklist |  | 255 |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
