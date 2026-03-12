---
title: "AsyncReportRunEventLog"
domain: object-reference
topic: asyncreportruneventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.157Z
estimatedTokens: 1803
keywords: [AsyncReportRunEventLog, Async, Report, Run, Event, Log, reporting, scheduled, requests, category, includes, dashboard, refreshes, asynchronous, reports]
---

# AsyncReportRunEventLog

> Async Report Run Event Log is used for reporting scheduled requests. This
         category includes dashboard refreshes, asynchronous reports, schedule reports, and
         analytics snapshots. This object is available in API version 61.0 and later.

# AsyncReportRunEventLog

Async Report Run Event Log is used for reporting scheduled requests. This category includes dashboard refreshes, asynchronous reports, schedule reports, and analytics snapshots. This object is available in API version 61.0 and later.

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
| AverageRowSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe average row size (in bytes) of all rows in the Asynchronous Report Run event. |
| BucketCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of buckets used in the report. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| ColumnCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of columns in the report. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DashboardIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the dashboard that was run. |
| DatabaseBlocks | TypedoublePropertiesFilter, Nillable, SortDescriptionHow much activity is occurring in the database. |
| DatabaseCpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time (in milliseconds) to complete the request. |
| DatabaseTotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal time spent in OracleJdbc calls, counting the Jdbc driver, Network, and Oracle time for execs, fetches, and get-connection. |
| DisplayType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionPossible values are:D—DashboardS—Show DetailsH—Hide Details |
| ExceptionFilterCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of exception filters used in the report. |
| IsPreview | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThis field is reserved for future use.The default value is false. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| ObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object affected by the trigger. |
| Origin | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWhere the report is being executed, such as from a UI (Classic, Lightning, Mobile), through an API (synchronous, asynchronous, Apex), or through a dashboard. |
| RenderingType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescribes the format of the report output in Salesforce Classic. If the report was exported in Lightning Experience, this field is blank. |
| ReportIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe report’s ID. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RequestStatus | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RowCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of rows that were processed in the Asynchronous Report Run event. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| SortOrder | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe sort column and order that was used in the report. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license. Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portalGuest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
