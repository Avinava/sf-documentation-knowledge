---
title: "GuestUserAnomalyEvent"
domain: platform-events
topic: guestuseranomalyevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.655Z
estimatedTokens: 1211
keywords: [GuestUserAnomalyEvent, Tracks, data, access, anomalies, caused, guest, user, permission, misconfiguration, API, version, 60.0, later, Calls]
---

# GuestUserAnomalyEvent

> Tracks data access anomalies that are caused by guest user permission
         misconfiguration. This object is available in API version 60.0 and later.

# GuestUserAnomalyEvent

Tracks data access anomalies that are caused by guest user permission misconfiguration. This object is available in API version 60.0 and later.

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
| EvaluationTime | TypedoublePropertiesNillableDescriptionThe amount of time it took to evaluate the policy in milliseconds. |
| EventDate | TypedateTimePropertiesNillableDescriptionA date value that represents the aggregate timeframe when the guest user's actions occurred. |
| EventIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the event, which is shared with the corresponding storage object. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesNillableDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY.Relationship NamePolicyRelationship TypeLookupRefers ToTransactionSecurityPolicy |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values include:Error—The policy caused an undefined error when it was executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestedEntities | TypetextareaPropertiesNillableDescriptionObjects queried by the guest user. For example:[" Topic "]. |
| Score | TypedoublePropertiesNillableDescriptionSpecifies how significantly the guest user behavior deviates from the other guest users. It’s formatted as a number between 0 and 1. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe content data of the security event. This field is reserved for future use. |
| SessionKey | TypestringPropertiesNillableDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. |
| SoqlCommands | TypetextareaPropertiesNillableDescriptionSOQL commands run by the guest user. |
| SourceIp | TypestringPropertiesNillableDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score. |
| TotalControllerEvents | TypeintPropertiesNillableDescriptionThe number of times controllers were triggered. |
| UserAgent | TypestringPropertiesNillableDescriptionUser Agent for this event. |
| UserId | TypereferencePropertiesNillableDescriptionThe origin user’s unique ID. For example, 005000000000123.This field is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesNillableDescriptionThe origin username in the format of user@company.com at the time the event was created. |
| UserType | TypestringPropertiesNillableDescriptionType of user of this event. For example, a guest user. |
