---
title: "FlowDebugRefreshEvent"
domain: platform-events
topic: flowdebugrefreshevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.610Z
estimatedTokens: 348
keywords: [FlowDebugRefreshEvent, Notifies, subscribers, flow, debug, run, pauses, completes, output, panel, Builder, refreshed, API, version, 65.0]
---

# FlowDebugRefreshEvent

> Notifies subscribers when a flow debug run pauses or completes and
         its debug output panel in Flow Builder can be refreshed. This object is available in
      API version 65.0 and later.

# FlowDebugRefreshEvent

Notifies subscribers when a flow debug run pauses or completes and its debug output panel in Flow Builder can be refreshed. This object is available in API version 65.0 and later.

A FlowDebugRefreshEvent is automatically published when a debug run for a flow is paused, encounters an error, or is completed.

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
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| FlowVersion | TypestringPropertiesCreate, NillableDescriptionThe version of the flow being debugged. |
| InterviewGuid | TypestringPropertiesCreateDescriptionThe global universal ID of the flow interview that generated the event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
