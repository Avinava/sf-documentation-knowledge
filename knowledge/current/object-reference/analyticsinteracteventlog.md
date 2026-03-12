---
title: "AnalyticsInteractEventLog"
domain: object-reference
topic: analyticsinteracteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.293Z
estimatedTokens: 1096
keywords: [AnalyticsInteractEventLog, Analytics, Interact, Event, Log, route, changes, made, CRM, Analytic, API, version, 61.0, later, Calls]
---

# AnalyticsInteractEventLog

> Analytics Interact Event Log represents route or page changes made in the CRM
         Analytic UI. This object is available in API version 61.0 and later.

# AnalyticsInteractEventLog

Analytics Interact Event Log represents route or page changes made in the CRM Analytic UI. This object is available in API version 61.0 and later.

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
| AnalyticsTimestamp | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe time when this log line was generated. |
| ClickCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of clicks performed on a page in the CRM Analytics UI. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| ReadTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time a user spent on a particular tab. |
| RecordIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of the CRM Analytics object. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times a user returned to a particular page. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| TabIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the particular Analytics tab in the UI. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| TotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total amount of time (in milliseconds) a tab is open. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe CRM Analytics object type. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| ViewMode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe view mode for the CRM Analytics asset. Possible values include vieweditpresentJSONprint |

## Usage

This event type is captured when a tab is closed. It collates the interaction statistics over the life of the tab, including total open time, read time, and so on. These statistics are aggregated as you go to other tabs and then return, and logged only when the tab is closed.
