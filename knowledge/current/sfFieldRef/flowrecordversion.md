---
title: "FlowRecordVersion"
domain: sfFieldRef
topic: flowrecordversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.408Z
estimatedTokens: 728
keywords: [FlowRecordVersion, version, flow, API, 58.0, later]
---

# FlowRecordVersion

> Represents the version of a flow. This object is available in API
         version 58.0 and later.

# FlowRecordVersion

Represents the version of a flow. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowRecordVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowrecordversion.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivatedById | User ID | reference |  | 18 |  |  |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| ApiVersion | API Version | double |  |  | 18 | 1 |
| AreMetricsLoggedToDataCloud | Log Metrics to Data Cloud | boolean |  |  |  |  |
| Builder | Built with | string |  | 255 |  |  |
| CapacityCategory | Capacity Category | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataSpaceId | Data Space ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 65535 |  |  |
| Entries | Entries | int | 9 |  |  |  |
| Errors | Errors | int | 9 |  |  |  |
| Exits | Exits | int | 9 |  |  |  |
| FlowRecordId | Flow ID | reference |  | 18 |  |  |
| FlowType | Flow Type | picklist |  | 255 |  |  |
| Id | Flow Version ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOverridable | Overridable | boolean |  |  |  |  |
| IsPaused | Paused | boolean |  |  |  |  |
| IsTemplate | Template | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Flow Version Name | string |  | 255 |  |  |
| OverriddenById | Flow ID | reference |  | 18 |  |  |
| OverriddenFlowId | Flow ID | reference |  | 18 |  |  |
| PausedDate | Paused Date | datetime |  |  |  |  |
| PausingUserId | User ID | reference |  | 18 |  |  |
| ProgressStatus | Progress Status | picklist |  | 255 |  |  |
| ReasonPaused | Reason Paused | textarea |  | 255 |  |  |
| ResumedDate | Resumed Date | datetime |  |  |  |  |
| ResumingUserId | User ID | reference |  | 18 |  |  |
| RunInMode | Run in Mode | picklist |  | 255 |  |  |
| ScheduledStartDate | Scheduled Start Date | datetime |  |  |  |  |
| SourceTemplateId | Flow ID | reference |  | 18 |  |  |
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
