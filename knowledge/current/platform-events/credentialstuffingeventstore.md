---
title: "CredentialStuffingEventStore"
domain: platform-events
topic: credentialstuffingeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.484Z
estimatedTokens: 1495
keywords: [CredentialStuffingEventStore, Tracks, user, successfully, logs, Salesforce, identified, credential, stuffing, attack, refers, large-scale, automated, login, requests]
---

# CredentialStuffingEventStore

> Tracks when a user successfully logs into Salesforce during an
			identified credential stuffing attack. Credential stuffing refers to large-scale
			automated login requests using stolen user credentials.
		CredentialStuffingEventStore is an object that stores the event data of
		CredentialStuffingEvent. This object is available in API version 49.0 and later.

# CredentialStuffingEventStore

Tracks when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials. CredentialStuffingEventStore is an object that stores the event data of CredentialStuffingEvent. This object is available in API version 49.0 and later.

## Supported Calls

```

```

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The Machine Learning (ML) models that power Threat Detection analyze data to ensure accurate identification, which requires a brief processing time. This results in an expected time difference between the Event Detection Date and the Event Creation Date.

## Fields

| Field | Details |
| --- | --- |
| AcceptLanguage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionList of HTTP Headers that specify the natural language, such as English, that the client understands.Examplezh, en-US;q=0.8, en;q=0.6 |
| CredentialStuffingEventNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number automatically assigned to the event when it's created. You can't change the format or value for this field. |
| EvaluationTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionRequired. The time when the hijacking event was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| EventIdentifier | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| LoginType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of login used to access the session. See the LoginType field of LoginHistory in the Object Reference guide for the list of possible values. |
| LoginUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the login page. For example, MyDomainName.my.salesforce.com. |
| PolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe result of the transaction policy. Possible values are:Error - The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction - The policy didn't trigger.Notified - A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates that a user successfully logged into Salesforce during an identified credential stuffing attack. The value of this field is always 1. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP address of the unauthorized user that successfully logged in after the credential stuffing attack. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created.ExampleSuccessful login from Credential Stuffing attack. |
| UserAgent | TypetextareaPropertiesNillableDescriptionThe User-Agent header of the HTTP request of the unauthorized login. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Associated Object

This object has the following associated object. It’s available in the same API version as this object.

[CredentialStuffingEventStoreFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

## Code Examples

```
describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query()
```
