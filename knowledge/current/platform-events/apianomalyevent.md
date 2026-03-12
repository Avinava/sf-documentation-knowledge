---
title: "ApiAnomalyEvent"
domain: platform-events
topic: apianomalyevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.218Z
estimatedTokens: 1829
keywords: [ApiAnomalyEvent, Track, anomalies, how, users, API, calls, version, 50.0, later, Special, Access, Rules, Subscribers, Event]
---

# ApiAnomalyEvent

> Track anomalies in how users make API calls. This object is
      available in API version 50.0 and later.

# ApiAnomalyEvent

Track anomalies in how users make API calls. This object is available in API version 50.0 and later.

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
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds is the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| Operation | TypestringPropertiesNillableDescriptionThe API call that generated the event. For example, Query. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values include:Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe type of entities associated with the event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. For example, 3nWgxWbDKWWDIk0FKfF5D. |
| RowsProcessed | TypedoublePropertiesNillableDescriptionTotal row count for the current operation. For example, 2500. |
| Score | TypedoublePropertiesNillableDescriptionA number from 0 through 1 that represents the anomaly score for the API execution or export tracked by this event. The anomaly score shows how the user's current API activity is different from their typical activity. A low score indicates that the user's current API activity is similar to their usual activity. A high score indicates that it's different. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of features about the API activity that triggered this anomaly event.Let’s say, for example, that a user typically downloads 10 accounts but then they deviate from that pattern and download 1,000 accounts. This event is triggered and the contributing features are captured in this field. Potential features include row count, column count, average row size, the day of week, and the browser’s user agent used for the report activity. The data captured in this field also shows how much a particular feature contributed to this anomaly event being triggered, represented as a percentage. The data is in JSON format.ExampleThis example shows that the average row count contributed more than 95% to the anomaly being triggered. Other anomalous features, such as the autonomous system, day of the week the report was run, the browser used, and the number of columns, contributed much less.[ { "featureName": "rowCount", "featureValue": "1937568", "featureContribution": “95.00 %" }, { "featureName": "autonomousSystem", "featureValue": "Bigleaf Networks, Inc.", "featureContribution": “1.62 %" }, { "featureName": "dayOfWeek", "featureValue": "Sunday", "featureContribution": “1.42 %" }, { "featureName": "userAgent", "featureValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36}", "featureContribution": “1.21 %" }, { "featureName": "periodOfDay", "featureValue": “Evening”, "featureContribution": “.09 %" }, { "featureName": "averageRowSize", "featureValue": "744", "featureContribution": “0.08 %" }, { "featureName": "screenResolution", "featureValue": "900x1440", "featureContribution": “0.07 %" } ] |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the API anomaly that caused this event to be created.ExampleAPI was exported from an infrequent network (BigLeaf Networks Inc.)API was generated with an unusually high number of rows (111141) |
| Uri | TypestringPropertiesNillableDescriptionThe URI of the page that’s receiving the request. |
| UserAgent | TypestringPropertiesNillableDescriptionUserAgent used in HTTP request, post-processed by the server. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Code Examples

```
[
{
"featureName": "rowCount",
"featureValue": "1937568",
"featureContribution": “95.00 %"
},
{
"featureName": "autonomousSystem",
"featureValue": "Bigleaf Networks, Inc.",
"featureContribution": “1.62 %"
},
{
"featureName": "dayOfWeek",
"featureValue": "Sunday",
"featureContribution": “1.42 %"
},
{
"featureName": "userAgent",
"featureValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36}",
"featureContribution": “1.21 %"
},
{
"featureName": "periodOfDay",
"featureValue": “Evening”,
"featureContribution": “.09 %"
},
{
"featureName": "averageRowSize",
"featureValue": "744",
"featureContribution": “0.08 %"
},
{
"featureName": "screenResolution",
"featureValue": "900x1440",
"featureContribution": “0.07 %"
}
]
```
