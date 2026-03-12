---
title: "Wave Interaction Event Type"
domain: object-reference
topic: wave-interaction-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.770Z
estimatedTokens: 1391
keywords: [Wave, Interaction, Event, events, represent, route, changes, made, CRM, Analytics, user, captured, tab, closed, collates]
---

# Wave Interaction Event Type

> Wave Interaction events represent route or page changes made in the
         CRM Analytics user interface. A Wave Interaction event type is captured when a tab is
         closed. It also collates the interaction statistics over the life of the tab, including
         total open time, read time, and so on. These statistics are aggregated as you go to other
         tabs and return, and logged only once when the tab is closed.

# Wave Interaction Event Type

Wave Interaction events represent route or page changes made in the CRM Analytics user interface. A Wave Interaction event type is captured when a tab is closed. It also collates the interaction statistics over the life of the tab, including total open time, read time, and so on. These statistics are aggregated as you go to other tabs and return, and logged only once when the tab is closed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Because Wave Interaction events are logged only when the tab or browser window is closed, these events might not match Wave Change events exactly if a user allows their Salesforce session to time out before closing.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always WaveInteraction. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| NUM_CLICKS | TypeNumberDescriptionThe number of clicks performed on a page in the CRM Analytics user interface. |
| NUM_SESSIONS | TypeNumberDescriptionThe number of times a user returned to a particular page. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| READ_TIME | TypeNumberDescriptionThe amount of time a user spent on a particular tab. |
| RECORD_ID | TypeStringDescriptionThe Salesforce ID of the CRM Analytics object. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TAB_ID | TypeStringDescriptionThe ID of the particular Analytics tab in the user interface.Exampledashboard-0FKB0000000Ec64GDK |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| TOTAL_TIME | TypeNumberDescriptionThe total amount of time a tab was open in milliseconds. |
| TYPE | TypeStringDescriptionThe CRM Analytics object type. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
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
