---
title: "FlowVersionView"
domain: sfFieldRef
topic: flowversionview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.453Z
estimatedTokens: 402
keywords: [FlowVersionView, version, flow, definition, API, 46.0, later]
---

# FlowVersionView

> Represents the version of a flow definition. This object is
		available in API version 46.0 and later.

# FlowVersionView

Represents the version of a flow definition. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowVersionView](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowversionview.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiVersion | API Version | double |  |  | 18 | 0 |
| ApiVersionRuntime | API Version Runtime | double |  |  | 18 | 0 |
| AreMetricsLoggedToDataCloud | Log Metrics to Data Cloud | boolean |  |  |  |  |
| CapabilityType | Capability Type | string |  | 255 |  |  |
| CapacityCategory | Capacity Category | picklist |  | 255 |  |  |
| Description | Version Description | string |  | 255 |  |  |
| DurableId | Durable ID | string |  | 255 |  |  |
| FlowDefinitionViewId | Flow Definition View ID | string |  | 512 |  |  |
| Id | Flow Version View ID | id |  | 18 |  |  |
| IsSwingFlow | Is Swing Flow | boolean |  |  |  |  |
| IsTemplate | Is Template | boolean |  |  |  |  |
| Label | Version Label | string |  | 255 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ProcessType | Process Type | picklist |  | 255 |  |  |
| RunInMode | Run in Mode | picklist |  | 255 |  |  |
| Status | Version Status | picklist |  | 255 |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
