---
title: "FlowExecutionErrorEvent"
domain: sfFieldRef
topic: flowexecutionerrorevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.238Z
estimatedTokens: 581
namespace: FlowNamespace
keywords: [FlowExecutionErrorEvent, Notifies, subscribers, errors, screen, flow, executions, API, version, 47.0, later]
---

# FlowExecutionErrorEvent

> Notifies subscribers of errors related to screen flow executions.
		This object is available in API version 47.0 and later.

**Namespace:** `FlowNamespace`

# FlowExecutionErrorEvent

Notifies subscribers of errors related to screen flow executions. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FlowExecutionErrorEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContextObject | Context Object | string |  | 255 |  |  |
| ContextRecordId | Context Record ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ElementApiName | Flow Element API Name | string |  | 80 |  |  |
| ElementType | Flow Element Type | string |  | 50 |  |  |
| ErrorId | Flow Error ID | string |  | 50 |  |  |
| ErrorMessage | Flow Error Message | string |  | 1000 |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventType | Flow Event Type | string |  | 40 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| ExtendedErrorCode | Extended Error Code | string |  | 255 |  |  |
| FlowApiName | Flow API Name | string |  | 255 |  |  |
| FlowExecutionEndDate | Flow Execution End Date | datetime |  |  |  |  |
| FlowExecutionStartDate | Flow Execution Start Date | datetime |  |  |  |  |
| FlowNamespace | Flow Namespace | string |  | 15 |  |  |
| FlowVersionId | Flow Version ID | string |  | 255 |  |  |
| FlowVersionNumber | Flow Version Number | int | 9 |  |  |  |
| InterviewBatchId | Flow Interview Batch ID | string |  | 40 |  |  |
| InterviewGuid | Flow Interview Guid | string |  | 255 |  |  |
| InterviewRequestId | Flow Interview Request ID | string |  | 18 |  |  |
| InterviewStartDate | Flow Interview Start Date | datetime |  |  |  |  |
| InterviewStartedById | Flow Interview Started By ID | reference |  | 18 |  |  |
| ProcessType | Process Type | string |  | 40 |  |  |
| RelatedRecordId | Related Record ID | string |  | 18 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| StageQualifiedApiName | Flow Stage Qualified API Name | string |  | 360 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
