---
title: "AnalyticsChangeEventLog"
domain: object-reference
topic: analyticschangeeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.245Z
estimatedTokens: 1199
keywords: [AnalyticsChangeEventLog, Analytics, Change, Event, Logs, represent, route, changes, made, CRM, API, version, 61.0, later, Calls]
---

# AnalyticsChangeEventLog

> Analytics Change Event Logs represent route or page changes made in the CRM
         Analytics. This object is available in API version 61.0 and later.

# AnalyticsChangeEventLog

Analytics Change Event Logs represent route or page changes made in the CRM Analytics. This object is available in API version 61.0 and later.

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
| AnalyticsMode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe location where the dashboard is displayed. In the Salesforce mobile app, embedded dashboards are logged as embedded first. |
| AnalyticsSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of a particular session of CRM Analytics. Use this field to determine which log lines originated from a particular session. |
| AnalyticsTimestamp | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time when this log line was generated. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| IsMobile | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the dashboard is displayed in mobile (true) or not (false). |
| IsNew | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe field indicates that this action opens a new tab (true) or goes back to a previously opened tab (false).The default value is false. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| PageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the component hosting the main content of the page. For example: clients:cardsContainer. |
| PageIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CRM Analytics dashboard page. |
| RecordIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Salesforce ID of the CRM Analytics object. |
| ReopenCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIf IsNew is false, the number of times that an existing page opens. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SavedViewIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the CRM Analytics dashboard saved view. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| TabIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the particular Analytics tab in the user interface. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of Apex callout. For example: REST or AJAX. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character Identifier of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| ViewMode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe view mode for the CRM Analytics asset. Possible values include vieweditpresentJSONprint |
