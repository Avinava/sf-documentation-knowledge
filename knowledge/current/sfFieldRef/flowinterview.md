---
title: "FlowInterview"
domain: sfFieldRef
topic: flowinterview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.245Z
estimatedTokens: 413
keywords: [FlowInterview, flow, interview, running, instance, API, version, 32.0, later]
---

# FlowInterview

> Represents a flow interview. A flow interview is a
         running instance of a flow. This object is available in API version 32.0 and
      later.

# FlowInterview

Represents a flow interview. A flow interview is a running instance of a flow. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FlowInterview](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_flowinterview.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentElement | Current Element | string |  | 100 |  |  |
| EngineType | Engine Type | picklist |  | 255 |  |  |
| Error | Error | textarea |  | 1000 |  |  |
| FlowVersionViewId | Flow Version View ID | string |  | 512 |  |  |
| Guid | Flow Interview Guid | string |  | 255 |  |  |
| Id | Flow Interview ID | id |  | 18 |  |  |
| InterviewLabel | Interview Label | string |  | 1000 |  |  |
| InterviewStatus | Interview Status | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PauseLabel | Pause Reason | string |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WasPausedFromScreen | Was Paused From Screen | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
