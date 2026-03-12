---
title: "LoginAnomalyEvent"
domain: platform-events
topic: loginanomalyevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.839Z
estimatedTokens: 952
keywords: [LoginAnomalyEvent, entity, detects, data, access, anomalies, caused, potentially, malicious, login, actions, API, version, 64.0, later]
---

# LoginAnomalyEvent

> This entity detects data access anomalies that are caused by potentially
         malicious login actions. This object is available in API version 64.0 and later.

# LoginAnomalyEvent

This entity detects data access anomalies that are caused by potentially malicious login actions. This object is available in API version 64.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The Machine Learning (ML) models that power Threat Detection analyze data to ensure accurate identification, which requires a brief processing time. This results in an expected time difference between the Event Detection Date and the Event Creation Date.

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
| EvaluationTime | TypedoublePropertiesNillableDescriptionA date value that represents aggregated timeframe of when Login Anomaly Actions occured |
| EventDate | TypedateTimePropertiesNillableDescriptionA date value (no time portion) that represents aggregate timeframe when the login anomaly actions occurred. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Score | TypedoublePropertiesNillableDescriptionA number from 0 through 1 that represents the anomaly score for the report execution or export tracked by this event. The anomaly score shows how the user's current report activity is different from their typical activity. A low score indicates that the user's current report activity is similar to their usual activity, a high score indicates that it's different. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of features about the report activity that triggered this anomaly event. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |
