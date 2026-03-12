---
title: "Login As Event Type"
domain: object-reference
topic: login-as-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.422Z
estimatedTokens: 1290
keywords: [Login, Event, events, contain, Salesforce, admin, did, logged, another, user]
---

# Login As Event Type

> Login As events contain details about what a Salesforce admin did
         while logged in as another user.

# Login As Event Type

Login As events contain details about what a Salesforce admin did while logged in as another user.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Login As Event Type is used by EventLogFile (ELF). It isn’t a real-time event. For the LoginAsEvent real-time event, which is part of Real-Time Event Monitoring (RTEM), see [LoginAsEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_loginasevent.htm "HTML (New Window)") in the Platform Events Developer Guide.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Bolster your security posture by receiving alerts and blocking potentially malicious LoginAsEvent activities with a Transaction Security policy.

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DELEGATED_USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or API. In this case, the user who’s doing the impersonation. |
| DELEGATED_USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user who’s using Salesforce services through the UI or API. In this case, the user who’s doing the impersonation. |
| DELEGATED_USER_NAME | TypeStringDescriptionThe username of the user who’s using Salesforce services through the UI or API. In this case, the user who’s doing the impersonation. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always LoginAs. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
