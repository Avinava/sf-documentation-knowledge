---
title: "Dashboard Event Type"
domain: object-reference
topic: dashboard-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.113Z
estimatedTokens: 1195
keywords: [Dashboard, Event, events, contain, report, requests, dashboards, triggered, refreshes, subscriptions, filter, changes]
---

# Dashboard Event Type

> Dashboard events contain details about report requests from
         dashboards. These requests are triggered by dashboard refreshes, subscriptions, and filter
         changes.

# Dashboard Event Type

Dashboard events contain details about report requests from dashboards. These requests are triggered by dashboard refreshes, subscriptions, and filter changes.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DASHBOARD_COMPONENT_ID | TypeIdDescriptionThe 15-character ID of the dashboard component. |
| DASHBOARD_ID | TypeStringDescriptionThe 15-character ID of the dashboard that was run. |
| DASHBOARD_ID_DERIVED | TypeStringDescriptionThe 18-character case insensitive ID of the dashboard that was run. |
| DASHBOARD_TYPE | TypeStringDescriptionThe type of dashboard.Possible ValuesR: Run as running userC: Run as context userS: Run as specific user |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always Dashboard. |
| IS_SCHEDULED | TypeBooleanDescription1 if the dashboard component ran successfully, 0 if it didn’t. |
| IS_SUCCESS | TypeBooleanDescription1 if the dashboard component ran successfully, 0 if it didn’t. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REPORT_ID | TypeIdDescriptionThe 15-character ID of the report that was run. |
| REPORT_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the report that was run. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user the dashboard is running as.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user the dashboard is running as.For example: 00590000000I1SNIA0. |
| VIEWING_USER_ID | TypeIdDescriptionThe ID of the user who’s viewing the dashboard. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
