---
title: "ReportAnomalyEventStore"
domain: platform-events
topic: reportanomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.180Z
estimatedTokens: 1866
keywords: [ReportAnomalyEventStore, Tracks, anomalies, how, users, run, export, reports, including, unsaved, stores, event, data, ReportAnomalyEvent, API]
---

# ReportAnomalyEventStore

> Tracks anomalies in how users run or export reports, including
			unsaved reports. ReportAnomalyEventStore is an object that stores the event data of
		ReportAnomalyEvent. This object is available in API version 49.0 and later.

# ReportAnomalyEventStore

Tracks anomalies in how users run or export reports, including unsaved reports. ReportAnomalyEventStore is an object that stores the event data of ReportAnomalyEvent. This object is available in API version 49.0 and later.

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
| EvaluationTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionRequired. The time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe result of the transaction policy. Possible values are:Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| Report | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe report ID for the report for which this anomaly event was detected. For example, 00OD0000001leVCMAY.If this anomaly resulted from a user executing an unsaved report, the value of this field is null. |
| ReportAnomalyEventNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number automatically assigned to the event when it's created. You can't change the format or value for this field. |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionA number from 0 through 100 that represents the anomaly score for the report execution or export tracked by this event. The anomaly score shows how the user's current report activity is different from their typical activity. A low score indicates that the user's current report activity is similar to their usual activity, a high score indicates that it's different. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of features about the report activity that triggered this anomaly event.Let’s say, for example, that a user typically downloads 10 accounts but then they deviate from that pattern and download 1,000 accounts. This event is triggered and the contributing features are captured in this field. Potential features include row count, column count, average row size, the day of week, and the browser’s user agent used for the report activity. The data captured in this field also shows how much a particular feature contributed to this anomaly event being triggered, represented as a percentage. The data is in JSON format.ExampleThis example shows that the average row count contributed more than 95% to the anomaly being triggered. Other anomalous attributes, such as the autonomous system, day of the week the report was run, the browser used, and the number of columns, contributed much less.[ { "featureName": "rowCount", "featureValue": "1937568", "featureContribution": “95.00 %" }, { "featureName": "autonomousSystem", "featureValue": "Bigleaf Networks, Inc.", "featureContribution": “1.62 %" }, { "featureName": "dayOfWeek", "featureValue": "Sunday", "featureContribution": “1.42 %" }, { "featureName": "userAgent", "featureValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36}", "featureContribution": “1.21 %" }, { "featureName": "periodOfDay", "featureValue": “Evening”, "featureContribution": “.09 %" }, { "featureName": "averageRowSize", "featureValue": "744", "featureContribution": “0.08 %" }, { "featureName": "screenResolution", "featureValue": "900x1440", "featureContribution": “0.07 %" } ] |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. Session information contained in the fields SessionKey, LoginKey, SessionLevel, and SourceIp isn’t captured in any report resulting from an asynchronous operation. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the report anomaly that caused this event to be created.ExampleReport was exported from an infrequent network (BigLeaf Networks Inc.)Report was generated with an unusually high number of rows (111141) |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Object

This object has the following associated object. It’s available in the same API version as this object.

[ReportAnomalyEventStoreFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

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
