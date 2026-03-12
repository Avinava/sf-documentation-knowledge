---
title: "SessionHijackingEvent"
domain: platform-events
topic: sessionhijackingevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.265Z
estimatedTokens: 3089
keywords: [SessionHijackingEvent, Tracks, unauthorized, users, gain, ownership, Salesforce, user’s, session, stolen, identifier, detect, event, evaluates, how]
---

# SessionHijackingEvent

> Tracks when unauthorized users gain ownership of a Salesforce user’s
			session with a stolen session identifier. To detect such an event, Salesforce evaluates
			how significantly a user’s current browser fingerprint diverges from the previously
			known fingerprint using a probabilistically inferred significance of change. This
		object is available in API version 49.0 and later.

# SessionHijackingEvent

Tracks when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. To detect such an event, Salesforce evaluates how significantly a user’s current browser fingerprint diverges from the previously known fingerprint using a probabilistically inferred significance of change. This object is available in API version 49.0 and later.

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

/event/SessionHijackingEvent

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The Machine Learning (ML) models that power Threat Detection analyze data to ensure accurate identification, which requires a brief processing time. This results in an expected time difference between the Event Detection Date and the Event Creation Date.

## Event Delivery Allocation Enforced

No

## Fields

| Field | Details |
| --- | --- |
| CurrentIp | TypestringPropertiesNillableDescriptionThe IP address of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousIp field for the previous IP address. If the IP address didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousIp field value. For example, 126.7.4.2. |
| CurrentPlatform | TypestringPropertiesNillableDescriptionThe platform of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousPlatform field for the previous platform. If the platform didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousPlatform field value. For example, MacIntel or Win32. |
| CurrentScreen | TypestringPropertiesNillableDescriptionThe screen of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousScreen field for the previous screen. If the screen didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousScreen field value. For example, (900.0,1440.0) or (720,1280). |
| CurrentUserAgent | TypetextareaPropertiesNillableDescriptionThe user agent of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousUserAgent field for the previous user agent. If the user agent didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousUserAgent field value. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36. |
| CurrentWindow | TypestringPropertiesNillableDescriptionThe browser window of the newly observed fingerprint that deviates from the previous fingerprint. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the PreviousWindow field for the previous window. If the window didn’t contribute to the observed fingerprint deviation, the value of this field is the same as the PreviousWindow field value. For example, (1200.0,1920.0). |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the anomaly was detected. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. A relationship field.Relationship NamePolicyRelationship TypeLookupRefers ToTransactionSecurityPolicy |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PreviousIp | TypestringPropertiesNillableDescriptionThe IP address of the previous fingerprint. The IP address of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentIp field for the newly observed IP address. For example, 128.7.5.2. |
| PreviousPlatform | TypestringPropertiesNillableDescriptionThe platform of the previous fingerprint. The platform of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentPlatform field for the newly observed platform. For example, Win32 or iPhone. |
| PreviousScreen | TypestringPropertiesNillableDescriptionThe screen of the previous fingerprint. The screen of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentScreen field for the newly observed screen. For example, (1200.0,1920.0). |
| PreviousUserAgent | TypetextareaPropertiesNillableDescriptionThe user agent of the previous fingerprint. The user agent of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentUserAgent field for the newly observed user agent. For example, Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko). |
| PreviousWindow | TypestringPropertiesNillableDescriptionThe browser window of the previous fingerprint. The window of the newly observed fingerprint deviates from this value. The difference between the current and previous values is one indicator that a session hijacking attack has occurred. See the CurrentWindow field for the newly observed window. For example, (1600.0,1920.0). |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Score | TypedoublePropertiesNillableDescriptionSpecifies how significant the new browser fingerprint deviates from the previous one. The score is a number from 0.0 (lowest amount of deviation) through 1.0 (highest amount of deviation). The event exposes five field pairs (such as CurrentIp and PreviousIp) to view the before and after data for the five most interesting browser features that contributed to this anomaly. See the SecurityEventData field for all contributing features in JSON format.Salesforce detects session hijacking by comparing browser fingerprints in a given user session and evaluating how significantly a newly observed fingerprint deviates from the existing one. A large deviation score (0.8 or more) between two intra-session fingerprints indicates that two different browsers are active in the same session. The presence of two active browsers usually means that session hijacking has occurred. |
| SecurityEventData | TypestringPropertiesNillableDescriptionThe set of browser fingerprint features about the session hijacking that triggered this event. See the Threat Detection documentation for the list of possible features.For example, let’s say that a user’s current browser fingerprint diverges from their previously known fingerprint. If Salesforce concludes their session was hijacked, it fires this event and the contributing features are captured in this field in JSON format. Each feature describes a particular browser fingerprint property, such as the browser user agent, window, or platform. The data includes the current and previous values for each feature.Example[ { "featureName": "userAgent", "featureContribution": "0.45 %",  "previousValue": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142",  "currentValue": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36." }, { "featureName": "ipAddress", "featureContribution": "0.23 %", "previousValue": "201.17.237.77", "currentValue": "182.64.210.144" }, { "featureName": "platform", "featureContribution": "0.23 %", "previousValue": "Win32", "currentValue": "MacIntel" }, { "featureName": "screen", "featureContribution": "0.23 %", "previousValue":"(1050.0,1680.0)", "currentValue": "(864.0,1536.0)" }, { "featureName": "window", "featureContribution": "0.17 %", "previousValue": "1363x1717", "currentValue": "800x1200" } ] |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score.ExampleChanges to (userAgent, platform, ipAddress) were not expected based on this user's profile. These top 3 deviations contributed (1, 1, 0.922) to the total score, respectivelyChanges to (ipAddress, userAgent, platform, languages, color) were not expected based on this user's profile. These top 5 deviations contributed (1, 0.695, 0.695, 0.25, 0.223) to the total score, respectively |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123.A polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

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
