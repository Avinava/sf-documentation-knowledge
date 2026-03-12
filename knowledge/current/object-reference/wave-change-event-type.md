---
title: "Wave Change Event Type"
domain: object-reference
topic: wave-change-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.749Z
estimatedTokens: 1655
keywords: [Wave, Change, Event, events, represent, route, changes, made, CRM, Analytics, user, captured, every, time, opens]
---

# Wave Change Event Type

> Wave Change events represent route or page changes made in the CRM
         Analytics user interface. A Wave Change event type is captured every time the user opens a
         new CRM Analytics asset or tab, switches between tabs, or changes dashboard pages. Wave
         Change events are logged when opening new tabs and switching back to previously opened
         tabs.

# Wave Change Event Type

Wave Change events represent route or page changes made in the CRM Analytics user interface. A Wave Change event type is captured every time the user opens a new CRM Analytics asset or tab, switches between tabs, or changes dashboard pages. Wave Change events are logged when opening new tabs and switching back to previously opened tabs.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ANALYTICS_MODE | TypeStringDescriptionThe location in which the dashboard is displayed. In the Salesforce mobile app, embedded dashboards are logged as embedded first. When a user interacts with the dashboard, a full-screen dashboard is displayed to allow for user interaction, and is logged as mobileNative.Possible values are:studio—Analytics Studiotab—Analytics tabembedded— Embedded in Aura or Lightning.embeddedInCommunities— Embedded in Experience Cloud.mobileNative— CRM Analytics mobile app for iOS/Android or Salesforce mobile app for iOS/Android |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always WaveChange. |
| IS_MOBILE | TypeBooleanDescriptionIf true, the dashboard is displayed in the Tableau CRM mobile app for iOS and Android, in the Salesforce mobile app for iOS and Android, or in a mobile browser. |
| IS_NEW | TypeBooleanDescriptionThe field indicates that this action opens a new tab or goes back to a previously opened tab. If the change routes to a new page, the value of this field is true. If it routes to an existing page, this field is false. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PAGE_CONTEXT | TypeStringDescriptionThe context of the page in which the dashboard is displayed. In the Salesforce mobile app, embedded dashboards are logged as aura first. When a user interacts with the dashboard, a full-screen dashboard is displayed to allow for user interaction, and is logged as iOS or android.Possible values are:aura—Lightning Componentsvf—VisualforceiOS— CRM Analytics or Salesforce mobile app for iOSandroid— CRM Analytics or Salesforce mobile app for Android |
| PAGE_ID | TypeStringDescriptionThe ID of the CRM Analytics dashboard page.This field is only available in v58.0 and higher. |
| RECORD_ID | TypeStringDescriptionThe Salesforce ID of the CRM Analytics object. |
| REOPEN_COUNT | TypeNumberDescriptionIf IS_NEW is false, the number of times that an existing page opens. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SAVED_VIEW_ID | TypeStringDescriptionThe ID of the CRM Analytics dashboard saved view. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TAB_ID | TypeStringDescriptionThe ID of the particular Analytics tab in the user interface.For example: dashboard-0FKB0000000Ec64GDK. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |  |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |  |
| TYPE | TypeStringDescriptionThe CRM Analytics object type. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943. |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| VIEW_MODE | TypeStringDescriptionThe view mode for the CRM Analytics asset. Possible values include view, edit, present, json, or print. |
| WAVE_SESSION_ID | TypeStringDescriptionThe ID of a particular session of CRM Analytics. Use this field to determine which log lines originated from a particular session. |
| WAVE_TIMESTAMP | TypeNumberDescriptionThe time at which this log line was generated. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
