---
title: "Asynchronous Report Run Event Type"
domain: object-reference
topic: asynchronous-report-run-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.959Z
estimatedTokens: 2755
keywords: [Asynchronous, Report, Run, Event, events, created, reporting, requests, scheduled, category, includes, dashboard, refreshes, reports, schedule]
---

# Asynchronous Report Run Event Type

> Asynchronous Report Run events are created for reporting requests
         that are scheduled. This category includes dashboard refreshes, asynchronous reports,
         schedule reports, and analytics snapshots.

# Asynchronous Report Run Event Type

Asynchronous Report Run events are created for reporting requests that are scheduled. This category includes dashboard refreshes, asynchronous reports, schedule reports, and analytics snapshots.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AVERAGE_ROW_SIZE | TypeNumberDescriptionThe average row size of all rows in the Asynchronous Report Run event, in bytes. A large average size, coupled with a high ROW_COUNT, can indicate that a user is downloading information for fraudulent purposes. For example, a salesperson who downloads all sales leads before departing for a competitor.Example700 |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DASHBOARD_ID | TypeStringDescriptionThe 15-character ID of the dashboard that was run. |
| DB_TOTAL_TIME | TypeNumberDescriptionThe time in nanoseconds for a database round trip. Includes time spent in the JDBC driver, network to the database, and DB_CPU_TIME. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| DB_BLOCKS | TypeNumberDescriptionIndicates how much activity is occurring in the database. A high value for this field suggests that adding indexes or filters on your queries would benefit performance. |
| DB_CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds to complete the request. Indicates the amount of activity taking place in the database layer during the request. |
| DISPLAY_TYPE | TypeStringDescriptionThe report display type, indicating the run mode of the report.Possible values are:D—DashboardS—Show DetailsH—Hide Details |
| ENTITY_NAME | TypeStringDescriptionThe name of the object affected by the trigger. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always AsynchronousReportRun. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| NUMBER_BUCKETS | TypeNumberDescriptionThe number of buckets that were used in the report. |
| NUMBER_COLUMNS | TypeNumberDescriptionThe number of columns in the report. |
| NUMBER_EXCEPTION_FILTERS | TypeNumberDescriptionThe number of exception filters that are used in the report. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| ORIGIN | TypeStringDescriptionThe context in which the report executed, such as from a UI (Classic, Lightning, Mobile), through an API (synchronous, asynchronous, Apex), or through a dashboard.Possible ValuesReportOpenedFromMobileDashboard: Report executed when a user clicked a dashboard component on a mobile device and drilled down to a report.DashboardComponentUpdated: Report executed when a user refreshed a dashboard component.DashboardComponentPreviewed: Report executed from a Lightning dashboard component preview.ReportRunUsingSynchronousApi: Report executed from a synchronous API.ReportRunUsingAsynchronousApi: Report executed from an asynchronous API.ReportRunUsingApexSynchronousApi: Report executed from the synchronous Apex API.ReportRunUsingApexAsynchronousApi: Report executed from the asynchronous Apex API.ReportExported: Report executed from a printable view or report export that was not asynchronous nor an API export.ReportRunFromClassic: Report executed from the Run Report option of Salesforce Classic.ReportRunFromMobile: Report executed from the Run Report option of the mobile Salesforce app.ReportRunFromLightning: Report executed from the Run option in Lightning Experience from a non-mobile browser.ReportRunFromRestApi: Report executed from the REST API.ReportPreviewed: Report executed when a user got preview results while using the report builder.ReportScheduled: Report was scheduled.ProbeQuery: Report executed from a probe query.ReportRunFromReportingSnapshot: Report executed through Snapshot Analytics.ReportExportedAsynchronously: Report was exported asynchronously.ReportExportedUsingExcelConnector: Report was exported using the Excel connector.ChartRenderedOnVisualforcePage: Report executed from a rendered chart on a VisualForce Page.ChartRenderedInEmbeddedAnalyticsApp: Report executed from a rendered chart in an embedded Analytics app.ReportRunAndNotificationSent: Report executed through the notifications API.ChartRenderedOnHomePage: Report executed from a rendered chart on the home page.ReportResultsAddedToWaveTrending: Report executed when a user trended a report in CRM Analytics.ReportAddedToCampaign: Report was added from an Add to Campaign action.ReportResultsAddedToEinsteinDiscovery: Report executed synchronously from Einstein Discovery.Unknown: Report execution origin is unknown.Test: Report execution resulted from a test. |
| RENDERING_TYPE | TypeStringDescriptionDescribes the format of the report output in Salesforce Classic. If the report was exported in Lightning Experience, this field is blank.Possible ValuesW: Web (HTML)E: EmailP: PrintableX: ExcelC: Comma-separated values (CSV)J: JavaScript Object Notation (JSON)D: Dummy data |
| REPORT_ID | TypeIdDescriptionThe 15-character ID of the report that was run. |
| REPORT_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the report that was run. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_STATUS | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| ROW_COUNT | TypeNumberDescriptionThe number of rows that were processed in the Asynchronous Report Run event. High row counts, coupled with a high AVERAGE_ROW_SIZE, can indicate that a user is downloading information for fraudulent purposes. For example, a salesperson who downloads all sales leads before departing for a competitor.Example150 |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| SORT | TypeStringDescriptionThe sort column and order that was used in the report. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_TYPE | TypeStringDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
