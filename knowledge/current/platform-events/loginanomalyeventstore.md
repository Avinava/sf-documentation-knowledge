---
title: "LoginAnomalyEventStore"
domain: platform-events
topic: loginanomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.848Z
estimatedTokens: 895
keywords: [LoginAnomalyEventStore, Stores, records, data, access, anomalies, caused, potentially, malicious, login, actions, API, version, 64.0, later]
---

# LoginAnomalyEventStore

> Stores the records of data access anomalies that are caused by potentially
         malicious login actions. This object is available in API version 64.0 and later.

# LoginAnomalyEventStore

Stores the records of data access anomalies that are caused by potentially malicious login actions. This object is available in API version 64.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query()

## Special Access Rules

Accessing this object requires either the Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

The Machine Learning (ML) models that power Threat Detection analyze data to ensure accurate identification, which requires a brief processing time. This results in an expected time difference between the Event Detection Date and the Event Creation Date.

## Fields

| Field | Details |  |
| --- | --- | --- |
| EvaluationTime | TypedoublePropertiesFilter, Nillable, SortDescriptionA date value that represents aggregated timeframe of when Login Anomaly Actions occured |  |
| EventDate | TypedateTimePropertiesFilter, SortDescriptionA date value (no time portion) that represents aggregate timeframe when the login anomaly actions occurred. |  |
| EventIdentifier | TypestringPropertiesFilter, Group, SortDescriptionThe unique ID of the event, which is shared with the corresponding storage object |  |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the event was last referenced. |  |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the event was last viewed. |  |
| LoginAnomalyEventNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe number of the event. |  |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. |  |
| PolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction policy associated with this event. For example, 0NIB000000000KOOAY.This field is a relationship field.Relationship NamePolicyRefers ToTransactionSecurityPolicy |  |
| PolicyOutcome | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe result of the transaction policy. Picklist type. |  |
| Score | TypedoublePropertiesFilter, Nillable, SortDescriptionSpecifies how significant the new browser fingerprint deviates from the previous one. |  |
| SecurityEventData | TypetextareaPropertiesNillableDescriptionThe content data of the security event. |  |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. Use this value to identify all user events within a session. |  |
| SourceIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe source IP address of the client that logged in. For example, 126.7.4.2. |  |
| Summary | TypetextareaPropertiesNillableDescriptionA text summary of the threat that caused this event to be created. The summary lists the browser fingerprint features that most contributed to the threat detection along with their contribution to the total score. |  |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe origin user’s unique ID. For example, 005000000000123.This field is a polymorphic relationship field.Relationship NameUserRefers ToUser |  |
| Username | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe origin username in the format of user@company.com at the time the event was created. |  |
