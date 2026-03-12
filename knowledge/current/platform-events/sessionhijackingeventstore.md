---
title: "SessionHijackingEventStore"
domain: platform-events
topic: sessionhijackingeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.282Z
estimatedTokens: 3210
keywords: [SessionHijackingEventStore, Tracks, unauthorized, users, gain, ownership, Salesforce, user’s, session, stolen, identifier, detect, event, evaluates, how]
---

# SessionHijackingEventStore

> Tracks when unauthorized users gain ownership of a Salesforce user’s
			session with a stolen session identifier. To detect such an event, Salesforce evaluates
			how significantly a user’s current browser fingerprint diverges from the previously
			known fingerprint using a probabilistically inferred significance of change.
		SessionHijackingEventStore is an object that stores the event data of SessionHijackingEvent.
		This object is available in API version 49.0 and later.

# SessionHijackingEventStore

Tracks when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. To detect such an event, Salesforce evaluates how significantly a user’s current browser fingerprint diverges from the previously known fingerprint using a probabilistically inferred significance of change. SessionHijackingEventStore is an object that stores the event data of SessionHijackingEvent. This object is available in API version 49.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The Machine Learning (ML) models that power Threat Detection analyze data to ensure accurate identification, which requires a brief processing time. This results in an expected time difference between the Event Detection Date and the Event Creation Date.

## Fields

| Field | Details |
| --- | --- |
| CurrentIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousIp field for the previous IP address. If the IP address didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousIpfield value. For example, 126.7.4.2. |
| CurrentPlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe platform of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousPlatform field for the previous platform. If the platform didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousPlatform field value. For example, MacIntel or Win32. |
| CurrentScreen | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe screen of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousScreen field for the previous screen. If the screen didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousScreen field value. For example, (900.0,1440.0) or (720,1280). |
| CurrentUserAgent | TypetextareaPropertiesNillableDescriptionThe user agent of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousUserAgent field for the previous user agent. If the user agent didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousUserAgent field value. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36. |
| CurrentWindow | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe browser window of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousWindow field for the previous window. If the window didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousWindow field value. For example, (1200.0,1920.0). |
| EvaluationTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionRequired. The time when the anomaly was detected. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe result of the transaction policy. Possible values are:Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PreviousIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the previous fingerprint. The IP address of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentIp field for the newly observed IP address. For example, 128.7.5.2. |
| PreviousPlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe platform of the previous fingerprint. The platform of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentPlatform field for the newly observed platform. For example, Win32 or iPhone. |
| PreviousScreen | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe screen of the previous fingerprint. The screen of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentScreen field for the newly observed screen. For example, (1200.0,1920.0). |
| PreviousUserAgent | TypetextareaPropertiesNillableDescriptionThe user agent of the previous fingerprint. The user agent of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentUserAgent field for the newly observed user agent. For example, Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko). |
| PreviousWindow | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe browser window of the previous fingerprint. The window of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentWindow field for the newly observed window. For example, (1600.0,1920.0). |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionSpecifies how significant the new browser fingerprint deviates from the previous one. The score is a number from 0.0 (lowest amount of deviation) through 1.0 (highest amount of deviation). The event exposes five field pairs (such as CurrentIp and PreviousIp) to view the before and after data for the five most interesting browser features that contributed to this anomaly. See the SecurityEventData field for all contributing features in JSON format.Salesforce detects session hijacking by comparing browser fingerprints in a given user session and evaluating how significantly a newly observed fingerprint deviates from the existing one. A large deviation score (0.8 or more) between two intra-session fingerprints indicates that two different browsers are active in the same session. The presence of two active browsers usually means that session hijacking has occurred. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe set of browser fingerprint features about the session hijacking that triggered this event. See the Threat Detection documentation for the list of possible features.For example, let’s say that a user’s current browser fingerprint diverges from their previously known fingerprint. If Salesforce concludes their session was hijacked, it fires this event and the contributing features are captured in this field in JSON format. Each feature describes a particular browser fingerprint property, such as the browser user agent, window, or platform. The data includes the current and previous values for each feature.Example[ { "featureName": "userAgent", "featureContribution": "0.45 %",  "previousValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142",  "currentValue": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36." }, { "featureName": "ipAddress", "featureContribution": "0.23 %", "previousValue": "201.17.237.77", "currentValue": "182.64.210.144" }, { "featureName": "platform", "featureContribution": "0.23 %", "previousValue": "Win32", "currentValue": "MacIntel" }, { "featureName": "screen", "featureContribution": "0.23 %", "previousValue":"(1050.0,1680.0)", "currentValue": "(864.0,1536.0)" }, { "featureName": "window", "featureContribution": "0.17 %", "previousValue": "1363x1717", "currentValue": "800x1200" } ] |
| SessionHijackingEventNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number assigned by the system after the event is received in Salesforce. This ID is different than the replayID field on the streaming event SessionHijackingEvent. You can't change the format or value for this field. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score.ExampleChanges to (userAgent, platform, ipAddress) were not expected based on this user's profile. These top 3 deviations contributed (1, 1, 0.922) to the total score, respectivelyChanges to (ipAddress, userAgent, platform, languages, color) were not expected based on this user's profile. These top 5 deviations contributed (1, 0.695, 0.695, 0.25, 0.223) to the total score, respectively |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Object

This object has the following associated object. It’s available in the same API version as this object.

[SessionHijackingEventStoreFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

## Code Examples

```
[
{
"featureName": "userAgent",
"featureContribution": "0.45 %", 
"previousValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142", 
"currentValue": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36."
},
{
"featureName": "ipAddress",
"featureContribution": "0.23 %",
"previousValue": "201.17.237.77",
"currentValue": "182.64.210.144"
},
{
"featureName": "platform",
"featureContribution": "0.23 %",
"previousValue": "Win32",
"currentValue": "MacIntel"
},
{
"featureName": "screen",
"featureContribution": "0.23 %",
"previousValue":"(1050.0,1680.0)",
"currentValue": "(864.0,1536.0)"
},
{
"featureName": "window",
"featureContribution": "0.17 %",
"previousValue": "1363x1717",
"currentValue": "800x1200"
}
]
```
