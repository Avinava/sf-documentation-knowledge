---
title: "VoiceCallMetrics"
domain: object-reference
topic: voicecallmetrics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.239Z
estimatedTokens: 1262
keywords: [VoiceCallMetrics, metrics, VoiceCall, lifecycle, event, aggregated, daily, API, version, 56.0, later, Calls]
---

# VoiceCallMetrics

> Represents metrics for a VoiceCall lifecycle event, aggregated daily.
      This object is available in API version 56.0 and later.

# VoiceCallMetrics

Represents metrics for a VoiceCall lifecycle event, aggregated daily. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| AverageSCVCallDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe average call duration, measured in minutes, for a given day. |
| AvgMessagesPerCall | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe average number of transcription messages per call for a given day. |
| InboundCallsAgentsConnected | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of inbound calls where agents connect with callers for a given day. |
| MaxMessagesPerCall | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of transcription messages for the call with the highest number of said messages for a given day. |
| MaxSCVCallDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe longest call duration, measured in minutes, for a given day. |
| MetricsDate | TypedatePropertiesFilter, Group, SortDescriptionThe date and time (in UTC) when the metric was gathered. For example, daily metrics jobs run at 12am local instance time (not UTC). |
| NumACWInitiated | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls where After Conversation Work (ACW) is initiated for a given day. |
| NumCallbackCallsCtrCompleted | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of callback calls where interactive voice response (IVR) data is fully and completely captured from a telephony provider for a given day. |
| NumInboundCallsCtrCompleted | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of inbound calls where interactive voice response (IVR) data is fully and completely captured from a telephony provider for a given day. |
| NumInboundIVRAbandonCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of inbound calls where callers disconnected while waiting in the interactive voice response (IVR) system for a given day. |
| NumInboundQueueAbandonCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of inbound calls where callers disconnected while waiting in the queue for a given day. |
| NumOutboundCallsCtrCompleted | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of outbound calls where interactive voice response (IVR) data is fully and completely captured from a telephony provider for a given day. |
| NumRecordedCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of calls where the conversation between an agent and caller is recorded for a given day. |
| NumSCVCallbackCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of callback calls for a given day. |
| NumSCVInboundCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of inbound calls for a given day. |
| NumSCVOutboundCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of outbound calls for a given day. |
| NumSCVTransferCalls | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of transfer calls for a given day. |
| NumTransferCallsCtrCompleted | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of transfer calls where interactive voice response (IVR) data is fully and completely captured from a telephony provider for a given day. |
| OutboundCallsAgentsConnected | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of outbound calls where an agent is connected with a caller for a given day. |
| TotalACWInboundMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of minutes agents spent in After Conversation Work (ACW) for inbound calls for a given day. |
| TotalACWOutboundMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of minutes agents spent in After Conversation Work (ACW) for outbound calls for a given day. |
| TotalAgentInboundMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of minutes agents spent talking to callers on inbound calls for a given day. |
| TotalHoldDurationMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of minutes callers were put on hold for a given day. |
| TotalIVRInboundMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of minutes callers spent in the IVR system on inbound calls for a given day. |
| TotalMessages | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of transcription messages for a given day. |
| TotalOutboundMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of minutes agents spent talking to callers on outbound calls for a given day. |
| TotalQueueInboundMinutes | TypedoublePropertiesFilter, Nillable, SortDescriptionFor inbound calls, the total number of minutes callers spent in the queue waiting for a given day. |
