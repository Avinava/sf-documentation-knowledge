---
title: "BulkApiEventLog"
domain: object-reference
topic: bulkapieventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.719Z
estimatedTokens: 892
keywords: [BulkApiEventLog, Bulk, API, event, logs, contain, requests, version, 61.0, later, Calls, Special, Access, Rules]
---

# BulkApiEventLog

> Bulk API event logs contain details about Bulk API requests. This object
      is available in API version
      61.0
      and later.

# BulkApiEventLog

Bulk API event logs contain details about Bulk API requests. This object is available in API version 61.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| BatchIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the Bulk API batch. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| FailureCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of failures that were returned with the request. |
| IsSuccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the callout request was successful. |
| JobIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the Bulk API job. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| Message | TypestringPropertiesFilter, Nillable, SortDescriptionAny success or error message that’s associated with the request. |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of entity that the Bulk API used. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of Bulk API operation that was performed. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestId. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
