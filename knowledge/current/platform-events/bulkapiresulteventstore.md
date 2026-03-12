---
title: "BulkApiResultEventStore"
domain: platform-events
topic: bulkapiresulteventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.386Z
estimatedTokens: 1356
keywords: [BulkApiResultEventStore, Tracks, user, downloads, results, Bulk, API, big, stores, event, data, BulkApiResultEvent, version, 50.0, later]
---

# BulkApiResultEventStore

> Tracks when a user downloads the results of a Bulk API request.
         BulkApiResultEventStore is a big object that stores the event data of BulkApiResultEvent.
         This object is available in API version 50.0 and later.

# BulkApiResultEventStore

Tracks when a user downloads the results of a Bulk API request. BulkApiResultEventStore is a big object that stores the event data of BulkApiResultEvent. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

## Fields

| Field | Details |
| --- | --- |
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| EventDate | TypedateTimePropertiesNillableDescriptionThe time when the anomaly was reported. For example, 2020-01-20T19:12:26.965Z. Milliseconds is the most granular setting. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event. For example, 0a4779b0-0da1-4619-a373-0a36991dff90. |
| LoginHistoryId | TypereferencePropertiesNillableDescriptionTracks a user session so you can correlate user activity with a particular login instance. This field is also available on the LoginHistory, AuthSession, and LoginHistory objects, making it easier to trace events back to a user’s original authentication. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY. This field isn’t populated until all transaction security policies are processed for the real-time event. |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values include:Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient.This field isn’t populated until all transaction security policies are processed for the real-time event. |
| Query | TypestringPropertiesNillableDescriptionThe SOQL query. For example, SELECT Id FROM Account |
| RelatedEventIdentifier | TypestringPropertiesNillableDescriptionRepresents the EventIdentifier of the related event. For example, bd76f3e7-9ee5-4400-9e7f-54de57ecd79c.This field is populated only when the activity that this event monitors requires extra authentication, such as multi-factor authentication. In this case, Salesforce generates more events and sets the RelatedEventIdentifier field of the new events to the value of the EventIdentifier field of the original event. Use this field with the EventIdentifier field to correlate all the related events. If no extra authentication is required, this field is blank. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example, vMASKIU6AxEr+Op5. |
| SessionLevel | TypepicklistPropertiesNillable, Restricted picklistDescriptionSession-level security controls user access to features that support it, such as connected apps and reporting. Possible values are:HIGH_ASSURANCE—A high assurance session was used for resource access. For example, when the user tries to access a resource such as a connected app, report, or dashboard that requires a high-assurance session level.LOW—The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available or used in the Salesforce UI. User sessions through the UI are either standard or high assurance. You can set this level using the API, but users assigned this level experience unpredictable and reduced functionality in their Salesforce org.STANDARD—The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123. |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |

## Standard SOQL Usage

BulkApiResultEventStore allows filtering over two fields: EventDate and EventIdentifier. The only supported SOQL functions on the BulkApiResultEventStore object are WHERE, ORDER BY, and LIMIT. In the WHERE clause, you can only use comparison operators (<, >, <=, and >=). The != operator isn’t supported. In the ORDER BY clause, you can only use EventDate DESC. Ascending order isn’t supported with EventDate, and EventIdentifier sorting isn’t supported.
