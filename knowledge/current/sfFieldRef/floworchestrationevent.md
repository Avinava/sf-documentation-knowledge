---
title: "FlowOrchestrationEvent"
domain: sfFieldRef
topic: floworchestrationevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.284Z
estimatedTokens: 240
keywords: [FlowOrchestrationEvent, Notifies, subscribers, paused, instance, orchestration, ready, resumed, API, version, 53.0, later]
---

# FlowOrchestrationEvent

> Notifies subscribers that a paused instance of an orchestration is
         ready to be resumed. This object is available in API version 53.0 and
      later.

# FlowOrchestrationEvent

Notifies subscribers that a paused instance of an orchestration is ready to be resumed. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FlowOrchestrationEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventPayload | Event Payload | textarea |  | 32768 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| OrchestrationInstanceId | Orchestration Run ID | string |  | 18 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| StepInstanceId | Orchestration Step Run ID | string |  | 18 |  |  |
| StepStatus | Step Status | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
