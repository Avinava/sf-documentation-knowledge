---
title: "FlowRecord"
domain: sfFieldRef
topic: flowrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.366Z
estimatedTokens: 819
namespace: NamespacePrefix
keywords: [FlowRecord, flow, API, version, 58.0, later]
---

# FlowRecord

> Represents the details of a flow. This object is available in API
         version 58.0 and later.

**Namespace:** `NamespacePrefix`

# FlowRecord

Represents the details of a flow. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowRecord](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowrecord.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivationId | Segment Activation ID | reference |  | 18 |  |  |
| ActiveVersionId | Flow Version ID | reference |  | 18 |  |  |
| ApiName | API Name | string |  | 255 |  |  |
| ApiVersion | API Version | int | 9 |  |  |  |
| AreMetricsLoggedToDataCloud | Log Metrics to Data Cloud | boolean |  |  |  |  |
| AssociatedRecordId | Associated Record ID | reference |  | 18 |  |  |
| Builder | Built with | string |  | 255 |  |  |
| CapacityCategory | Capacity Category | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 65535 |  |  |
| ErrorCode | Error Code | picklist |  | 255 |  |  |
| ErrorDetails | Error Details | string |  | 255 |  |  |
| FlowCategory | Category | string |  | 255 |  |  |
| FlowDefinition | Flow Definition | string |  | 15 |  |  |
| FlowLabel | Flow Label | string |  | 255 |  |  |
| FlowSubcategory | Subcategory | string |  | 255 |  |  |
| FlowType | Flow Type | picklist |  | 255 |  |  |
| Id | Flow ID | id |  | 18 |  |  |
| InstalledPackageName | Package Name | string |  | 255 |  |  |
| IsCitizenEnabled | Enabled for Non-Admins | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOverridable | Overridable | boolean |  |  |  |  |
| IsPaused | Paused | boolean |  |  |  |  |
| IsTemplate | Template | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LogsEnabledFlowVersion | Flow Version with Logs Enabled | int | 9 |  |  |  |
| ManageableState | Package State | picklist |  | 255 |  |  |
| Name | Flow Label | string |  | 255 |  |  |
| NamespacePrefix | Flow Namespace | string |  | 40 |  |  |
| OverriddenById | Flow ID | reference |  | 18 |  |  |
| OverriddenFlowId | Flow ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgressStatus | Progress Status | picklist |  | 255 |  |  |
| ScheduledStartDate | Scheduled Start Date | datetime |  |  |  |  |
| SegmentId | Segment ID | reference |  | 18 |  |  |
| SourceTemplateId | Flow ID | reference |  | 18 |  |  |
| StartSource | Start Trigger | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TriggerObjectOrEventLabel | Triggering Object or Platform Event Label | string |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
