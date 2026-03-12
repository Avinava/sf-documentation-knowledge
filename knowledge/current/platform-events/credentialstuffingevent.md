---
title: "CredentialStuffingEvent"
domain: platform-events
topic: credentialstuffingevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.474Z
estimatedTokens: 1392
keywords: [CredentialStuffingEvent, Tracks, user, successfully, logs, Salesforce, identified, credential, stuffing, attack, refers, large-scale, automated, login, requests]
---

# CredentialStuffingEvent

> Tracks when a user successfully logs into Salesforce during an
			identified credential stuffing attack. Credential stuffing refers to large-scale
			automated login requests using stolen user credentials. This object is available in
		API version 49.0 and later.

# CredentialStuffingEvent

Tracks when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials. This object is available in API version 49.0 and later.

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

/event/CredentialStuffingEvent

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
| AcceptLanguage | TypestringPropertiesNillableDescriptionList of HTTP Headers that specify the natural language, such as English, that the client understands.Examplezh, en-US;q=0.8, en;q=0.6 |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the hijacking event was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. Use this field to correlate the event with its storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| LoginType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of login used to access the session. See the LoginType field of LoginHistory in the Object Reference guide for the list of possible values. |
| LoginUrl | TypestringPropertiesNillableDescriptionThe URL of the login page. For example, MyDomainName.my.salesforce.com. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values are:Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| Score | TypedoublePropertiesNillableDescriptionIndicates that a user successfully logged into Salesforce during an identified credential stuffing attack. The value of this field is always 1. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the unauthorized user that successfully logged in after the credential stuffing attack. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created.ExampleSuccessful login from Credential Stuffing attack. |
| UserAgent | TypetextareaPropertiesNillableDescriptionThe User-Agent header of the HTTP request of the unauthorized login. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |
