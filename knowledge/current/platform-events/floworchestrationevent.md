---
title: "FlowOrchestrationEvent"
domain: platform-events
topic: floworchestrationevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.628Z
estimatedTokens: 569
keywords: [FlowOrchestrationEvent, Notifies, subscribers, paused, instance, orchestration, ready, resumed, API, version, 53.0, later, Calls, Event, Delivery]
---

# FlowOrchestrationEvent

> Notifies subscribers that a paused instance of an orchestration is
         ready to be resumed. This object is available in API version 53.0 and
      later.

# FlowOrchestrationEvent

Notifies subscribers that a paused instance of an orchestration is ready to be resumed. This object is available in API version 53.0 and later.

A FlowOrchestrationEvent is automatically published when an assigned user completes a screen flow associated with an interactive step, when an asynchronous background step is completed, or when a MuleSoft step is completed.

## Supported Calls

create(), describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| EventPayload | TypetextareaPropertiesCreate, NillableDescriptionOutput parameters from the interactive, asynchronous background step, or MuleSoft step that generated the event.Setting the payload for manually published flow orchestration events isn't supported. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| OrchestrationInstanceId | TypestringPropertiesCreateDescriptionThe orchestration instance being tracked. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| StepInstanceId | TypestringPropertiesCreate, NillableDescriptionThe ID of the step instance that generated the event. |
| StepStatus | TypepicklistPropertiesCreate, Nillable, Restricted picklistDescriptionThe resultant status of the step instance that generated the event. If specified, StepInstanceId is required.Possible values are:Canceled—For internal use only.Completed—The step instance completed.Discontinued—For internal use only.Error—The step instance or a screen flow associated with the step encountered an error.InProgress—For internal use only.NotStarted—For internal use only.Suspended—For internal use only.This field is available in API version 55.0 and later. |
