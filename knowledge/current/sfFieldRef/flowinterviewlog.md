---
title: "FlowInterviewLog"
domain: sfFieldRef
topic: flowinterviewlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.253Z
estimatedTokens: 458
namespace: FlowNamespace
keywords: [FlowInterviewLog, logs, screen, flow, interview, instance, running, previously, run, flow.This, API, version, 49.0, later]
---

# FlowInterviewLog

> Represents the logs of a screen flow interview. An
            interview is an instance of a running or previously run flow.This
      object is available in API version 49.0 and later.

**Namespace:** `FlowNamespace`

# FlowInterviewLog

Represents the logs of a screen flow interview. An interview is an instance of a running or previously run flow.This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowInterviewLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowinterviewlog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FlowDeveloperName | Flow API Name | string |  | 255 |  |  |
| FlowInterviewGuid | Flow Interview GUID | string |  | 255 |  |  |
| FlowLabel | Flow Label | string |  | 255 |  |  |
| FlowNamespace | Flow Namespace | string |  | 15 |  |  |
| FlowVersionNumber | Flow Version Number | int | 9 |  |  |  |
| Id | Flow Interview Log ID | id |  | 18 |  |  |
| InterviewDurationInMinutes | Interview Duration In Minutes | double |  |  | 18 | 2 |
| InterviewEndTimestamp | Interview End Timestamp | datetime |  |  |  |  |
| InterviewStartTimestamp | Interview Start Timestamp | datetime |  |  |  |  |
| InterviewStatus | Interview Status | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
