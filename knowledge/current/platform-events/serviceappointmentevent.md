---
title: "ServiceAppointmentEvent"
domain: platform-events
topic: serviceappointmentevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.249Z
estimatedTokens: 388
keywords: [ServiceAppointmentEvent, Notifies, subscribers, service, appointment, generated, event, platform, API, version, 59.0, later, Calls, Subscription, Channel]
---

# ServiceAppointmentEvent

> Notifies subscribers of the service appointment details that are
			generated from the event platform. This object is available in API version 59.0 and
		later.

# ServiceAppointmentEvent

Notifies subscribers of the service appointment details that are generated from the event platform. This object is available in API version 59.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/ServiceAppointmentEvent

## Special Access Rules

This object is available when Salesforce Scheduler is enabled.

## Fields

| Field | Details |
| --- | --- |
| AsgnRsrcApptSchdDtlEvent | TypeAsgnRsrcApptSchdEvent[]PropertiesNillableDescriptionOne or multiple assigned resource records related to the scheduler appointment event. |
| ChangeType | TypestringPropertiesNillableDescriptionThe operation that caused the change. For example: CREATE, UPDATE, DELETE. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| ServiceApptSchduleEvent | TypeSvcApptSchdEvent[]PropertiesNillableDescriptionThe service appointment related to the scheduler appointment event. |

## Related Topics

- AsgnRsrcApptSchdEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_asgnrsrcapptschdevent.htm)
- SvcApptSchdEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_svcapptschdevent.htm)
