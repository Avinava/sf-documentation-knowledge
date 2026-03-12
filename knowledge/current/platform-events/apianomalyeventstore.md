---
title: "ApiAnomalyEventStore"
domain: platform-events
topic: apianomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.232Z
estimatedTokens: 1930
keywords: [ApiAnomalyEventStore, Tracks, anomalies, how, users, API, calls, stores, event, data, ApiAnomalyEvent, version, 50.0, later, Special]
---

# ApiAnomalyEventStore

> Tracks anomalies in how users make API calls. ApiAnomalyEventStore is
         an object that stores the event data of ApiAnomalyEvent. This object is available in API
         version 50.0 and later.

# ApiAnomalyEventStore

Tracks anomalies in how users make API calls. ApiAnomalyEventStore is an object that stores the event data of ApiAnomalyEvent. This object is available in API version 50.0 and later.

## Supported Calls

describeLayout()describeSObjects(), getDeleted(), getUpdated(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The Machine Learning (ML) models that power Threat Detection analyze data to ensure accurate identification, which requires a brief processing time. This results in an expected time difference between the Event Detection Date and the Event Creation Date.

## Fields

| Field | Details |
| --- | --- |
| ApiAnomalyEventNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number automatically assigned to the event when it's created. You can't change the format or value for this field. |
| EvaluationTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionRequired. The time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds is the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| Operation | TypestringPropertiesNillableDescriptionThe API call that generated the event. For example, Query. |
| PolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe result of the transaction policy. Possible values include:Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| QueriedEntities | TypestringPropertiesNillableDescriptionThe type of entities associated with the event. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. For example, 3nWgxWbDKWWDIk0FKfF5D. |
| RowsProcessed | TypedoublePropertiesNillableDescriptionTotal row count for the current operation. For example, 2500. |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionA number from 0 through 1 that represents the anomaly score for the API execution or export tracked by this event. The anomaly score shows how the user's current API activity is different from their typical activity. A low score indicates that the user's current API activity is similar to their usual activity, a high score indicates that it's different. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of features about the API activity that triggered this anomaly event.Let’s say, for example, that a user typically downloads 10 accounts but then they deviate from that pattern and download 1,000 accounts. This event is triggered and the contributing features are captured in this field. Potential features include row count, column count, average row size, the day of week, and the browser’s user agent used for the report activity. The data captured in this field also shows how much a particular feature contributed to this anomaly event being triggered, represented as a percentage. The data is in JSON format.ExampleThis example shows that the average row count contributed more than 95% to the anomaly being triggered. Other anomalous attributes, such as the autonomous system, day of the week the report was run, the browser used, and the number of columns, contributed much less.[ { "featureName": "rowCount", "featureValue": "1937568", "featureContribution": “95.00 %" }, { "featureName": "autonomousSystem", "featureValue": "Bigleaf Networks, Inc.", "featureContribution": “1.62 %" }, { "featureName": "dayOfWeek", "featureValue": "Sunday", "featureContribution": “1.42 %" }, { "featureName": "userAgent", "featureValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36}", "featureContribution": “1.21 %" }, { "featureName": "periodOfDay", "featureValue": “Evening”, "featureContribution": “.09 %" }, { "featureName": "averageRowSize", "featureValue": "744", "featureContribution": “0.08 %" }, { "featureName": "screenResolution", "featureValue": "900x1440", "featureContribution": “0.07 %" } ] |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the report anomaly that caused this event to be created.ExampleReport was exported from an infrequent network (BigLeaf Networks Inc.)Report was generated with an unusually high number of rows (111141) |
| Uri | TypestringPropertiesNillableDescriptionThe URI of the page that’s receiving the request. |
| UserAgent | TypestringPropertiesNillableDescriptionUserAgent used in HTTP request, post-processed by the server. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Object

This object has the following associated object. It’s available in the same API version as this object.

[ApiAnomalyEventStoreFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

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
