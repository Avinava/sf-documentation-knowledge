---
title: "ChangeSetOperationEventLog"
domain: object-reference
topic: changesetoperationeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.440Z
estimatedTokens: 613
keywords: [ChangeSetOperationEventLog, Change, Operation, events, contain, migrations, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# ChangeSetOperationEventLog

> Change Set Operation events contain information from change set
         migrations. This object is available in API version 65.0 and later.

# ChangeSetOperationEventLog

Change Set Operation events contain information from change set migrations. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ChangeSetName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the change set. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operation that’s being performed. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| TargetOrganizationIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the organization that’s receiving the change set. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp at which the log event was generated. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURI of the page receiving the request. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
