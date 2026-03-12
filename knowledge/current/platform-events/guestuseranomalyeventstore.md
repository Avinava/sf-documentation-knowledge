---
title: "GuestUserAnomalyEventStore"
domain: platform-events
topic: guestuseranomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.667Z
estimatedTokens: 1238
keywords: [GuestUserAnomalyEventStore, Tracks, data, access, anomalies, caused, guest, user, permission, misconfiguration, stores, event, GuestUserAnomalyEvent, API, version]
---

# GuestUserAnomalyEventStore

> Tracks data access anomalies that are caused by guest user permission
         misconfiguration. GuestUserAnomalyEventStore is an object that stores the event data of
         GuestUserAnomalyEvent. This object is available in API version 60.0 and
      later.

# GuestUserAnomalyEventStore

Tracks data access anomalies that are caused by guest user permission misconfiguration. GuestUserAnomalyEventStore is an object that stores the event data of GuestUserAnomalyEvent. This object is available in API version 60.0 and later.

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
| EvaluationTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time it took to evaluate the policy in milliseconds. |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionA date value that represents the aggregate timeframe when the guest user's actions occurred. |
| EventIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe unique ID of the event, which is shared with the corresponding storage object. |
| GuestUserAnomalyEventNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number automatically assigned to the event when it's created. You can't change the format or value for this field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the event was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the event was last viewed. |
| LoginKey | TypestringPropertiesNillableDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY.Relationship NamePolicyRelationship TypeLookupRefers ToTransactionSecurityPolicy |
| PolicyOutcome | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe result of the transaction policy. Possible values include:Error—The policy caused an undefined error when it was executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient. |
| RequestedEntities | TypetextareaPropertiesNillableDescriptionObjects queried by the guest user. For example:[" Topic "]. |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionSpecifies how significantly the guest user behavior deviates from the other guest users. It is formatted as a number between 0 and 1. |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe content data of the security event. This field is reserved for future use. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. |
| SoqlCommands | TypetextareaPropertiesNillableDescriptionSOQL commands run by the guest user. |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score. |
| TotalControllerEvents | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times controllers were triggered. |
| UserAgent | TypestringPropertiesFilter, Nillable, SortDescriptionUser Agent for this event. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. For example, 005000000000123.This field is a polymorphic relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of user of this event. For example, a guest user. |
