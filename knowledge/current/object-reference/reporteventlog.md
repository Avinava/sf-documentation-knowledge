---
title: "ReportEventLog"
domain: object-reference
topic: reporteventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.231Z
estimatedTokens: 2569
keywords: [ReportEventLog, Report, event, logs, contain, happened, user, ran, includes, activity, that's, Export, additional, reports, exported]
---

# ReportEventLog

> Report event logs contain information about what happened when a user ran a
         report. This event type includes all activity that's in the Report Export event type, and
         additional information. For example, it has user activity for reports exported as both
         Formatted Report and Details Only output. This object is available in API version
      61.0
      and later.

# ReportEventLog

Report event logs contain information about what happened when a user ran a report. This event type includes all activity that's in the Report Export event type, and additional information. For example, it has user activity for reports exported as both Formatted Report and Details Only output. This object is available in API version 61.0 and later.

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
| AverageRowSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe average row size of all rows in the Report event, in bytes. A large average size, coupled with a high RowCount, can indicate that a user is downloading information for fraudulent purposes. For example, a salesperson who downloads all sales leads before departing for a competitor. For example: 700. |
| BucketCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of buckets that were used in the report. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| ColumnCount | TypeintPropertiesFilter, Nillable, SortDescriptionThe number of columns in the report. |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DatabaseBlocks | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates how much activity is occurring in the database. A high value for this field suggests that adding indexes or filters on your queries would benefit performance. |
| DatabaseCpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds to complete the request. Indicates the amount of activity taking place in the database layer during the request. |
| DatabaseTotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in nanoseconds for a database round trip. Includes time spent in the JDBC driver, network to the database, and DatabaseCpuTime. Compare this field to CpuTime to determine whether performance issues are occurring in the database layer or in your own code. |
| DisplayType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe report display type, indicating the run mode of the report.Possible values are:D—DashboardS—Show DetailsH—Hide Details |
| ExceptionFilterCount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe number of exception filters that are used in the report. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| ObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object referenced by the report. |
| Origin | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe context in which the report executed, such as from a UI (Classic, Lightning, Mobile), through an API (synchronous, asynchronous, Apex), or through a dashboard.Possible values are:ReportOpenedFromMobileDashboard: Report executed when a user clicked a dashboard component on a mobile device and drilled down to a report.DashboardComponentUpdated: Report executed when a user refreshed a dashboard component.DashboardComponentPreviewed: Report executed from a Lightning dashboard component preview.ReportRunUsingSynchronousApi: Report executed from a synchronous API.ReportRunUsingAsynchronousApi: Report executed from an asynchronous API.ReportRunUsingApexSynchronousApi: Report executed from the synchronous Apex API.ReportRunUsingApexAsynchronousApi: Report executed from the asynchronous Apex API.ReportExported: Report executed from a printable view or report export that was not asynchronous nor an API export.ReportRunFromClassic: Report executed from the Run Report option of Salesforce Classic.ReportRunFromMobile: Report executed from the Run Report option of the mobile Salesforce app.ReportRunFromLightning: Report executed from the Run option in Lightning Experience from a non-mobile browser.ReportRunFromRestApi: Report executed from REST API.ReportPreviewed: Report executed when a user got preview results while using the report builder.ReportScheduled: Report was scheduled.ProbeQuery: Report executed from a probe query.ReportRunFromReportingSnapshot: Report executed through Snapshot Analytics.ReportExportedAsynchronously: Report was exported asynchronously.ReportExportedUsingExcelConnector: Report was exported using the Excel connector.ChartRenderedOnVisualforcePage: Report executed from a rendered chart on a VisualForce Page.ChartRenderedInEmbeddedAnalyticsApp: Report executed from a rendered chart in an embedded Analytics app.ReportRunAndNotificationSent: Report executed through the notifications API.ChartRenderedOnHomePage: Report executed from a rendered chart on the home page.ReportResultsAddedToWaveTrending: Report executed when a user trended a report in CRM Analytics.ReportAddedToCampaign: Report was added from an Add to Campaign action.ReportResultsAddedToEinsteinDiscovery: Report executed synchronously from Einstein Discovery.Unknown: Report execution origin is unknown.Test: Report execution resulted from a test. |
| RenderingType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescribes the format of the report output in Salesforce Classic. If the report was exported in Lightning Experience, this field is blank.Possible values are:W: Web (HTML)E: EmailP: PrintableX: ExcelC: Comma-separated values (CSV)J: JavaScript Object Notation (JSON)D: Dummy data |
| ReportIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the report that was run. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RequestStatus | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RowCount | TypeintPropertiesFilter, Nillable, SortDescriptionThe number of rows that were processed in the Report event. High row counts, coupled with a highAverageRowSize, can indicate that a user is downloading information for fraudulent purposes. For example, a salesperson who downloads all sales leads before departing for a competitor. For example: 150. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| SortOrder | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe sort column and order that was used in the report. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
