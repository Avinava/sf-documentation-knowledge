---
title: "ConcurLongRunApexErrEvent"
domain: platform-events
topic: concurlongrunapexerrevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.427Z
estimatedTokens: 1230
keywords: [ConcurLongRunApexErrEvent, Notifies, subscribers, errors, occur, Salesforce, org, exceeds, concurrent, long-running, Apex, limit, high, volume, events]
---

# ConcurLongRunApexErrEvent

> Notifies subscribers of errors that occur when a Salesforce org exceeds
			the concurrent long-running Apex limit. If a high volume of these events occur
			concurrently in an org, we may rate limit the events based on resource availability.
			Event log files, which are the predecessor of Real-time Event Monitoring, provide a list
			of Apex-related events. For more information, see Apex-related EventLogFile events. This
		object is available in API version 49.0 and later.

# ConcurLongRunApexErrEvent

Notifies subscribers of errors that occur when a Salesforce org exceeds the concurrent long-running Apex limit. If a high volume of these events occur concurrently in an org, we may rate limit the events based on resource availability. Event log files, which are the predecessor of Real-time Event Monitoring, provide a list of Apex-related events. For more information, see [Apex-related EventLogFile events](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm). This object is available in API version 49.0 and later.

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

/event/ConcurLongRunApexErrEvent

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| CurrentValue | TypeintPropertiesNillableDescriptionThe current count of concurrent long-running Apex requests in the org. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the Apex request failed to start and generated the error. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object, if any. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LimitValue | TypeintPropertiesNillableDescriptionThe limit value that was exceeded. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. |
|  |  |
| Quiddity | TypestringPropertiesNillableDescriptionThe type of outer execution associated with this event.ExampleA–QueryLocator Batch Apex (Batch Apex jobs run faster when the start method returns a QueryLocator object that doesn't include related records via a subquery. See Best Practices in Using Batch Apex.)B– Bulk API and Bulk API 2.0BA–Batch Apex (for debugger)C–Scheduled ApexE–Inbound Email ServiceF–FutureH–Apex RESTI–Invocable ActionK–Quick ActionL–LightningM–Remote ActionQ–QueuableR–Synchronous uncategorized (default value for transactions not specified elsewhere)S–Serial Batch ApexTA–Tests AsyncTD–Tests DeploymentTS–Tests SynchronousV–VisualforceW–SOAP WebservicesX–Execute Anonymous |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestId | TypestringPropertiesNillableDescriptionThe unique ID of the Apex request that fired the event. |
| RequestUri | TypestringPropertiesNillableDescriptionThe URI of the Apex request that failed to start and generated the error.Example/apex/ApexClassName |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE - A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW - The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD - The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe IP address from which the Apex request originated. |
| UserId | TypereferencePropertiesNillableDescriptionThe unique ID of the user associated with the Apex request. |
| Username | TypestringPropertiesNillableDescriptionThe username of the user associated with the Apex request. |
