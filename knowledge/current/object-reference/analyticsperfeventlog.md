---
title: "AnalyticsPerfEventLog"
domain: object-reference
topic: analyticsperfeventlog
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:04.314Z
estimatedTokens: 973
keywords: [AnalyticsPerfEventLog, Analytics, Perf, Event, Log, helps, track, trends, performance, API, version, 61.0, later, Calls, Special]
---

# AnalyticsPerfEventLog

> Analytics Perf Event Log helps track trends in your Analytics
         performance. This object is available in API version 61.0 and later.

# AnalyticsPerfEventLog

Analytics Perf Event Log helps track trends in your Analytics performance. This object is available in API version 61.0 and later.

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
| AnalyticsSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of a particular session of CRM Analytics. Use this field to determine which log lines originated from a particular session. |
| AnalyticsTimestamp | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe time when this log line is generated. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| EffectivePageTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe experienced page time in milliseconds. |
| IsInitialLoad | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the event is for the initial load of the Dashboard (true) or not (false).The default value is false. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| QueriedName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe asset title or query string. |
| RecordIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of the CRM Analytics object. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| TabIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the particular Analytics tab in the UI. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| ViewMode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe view mode for the CRM Analytics asset. Possible values include vieweditpresentJSONprint |
