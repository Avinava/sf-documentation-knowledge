---
title: "Named Credential Event Type"
domain: object-reference
topic: named-credential-event-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.466Z
estimatedTokens: 1253
keywords: [Named, Credential, Event, captures, Apex, callouts, credentials, their, endpoints, audit, installed, managed, packages, don’t, recognize]
---

# Named Credential Event Type

> The Named Credential event type captures information about Apex
         callouts that use named credentials as their endpoints. Use this event type to audit the
         installed managed packages that use named credentials. If you don’t recognize the package
         namespace in the named credential event log file, then you can investigate whether a
         security breach has occurred. This event type is available in the EventLogFile object
      in API version 53.0 and later.

# Named Credential Event Type

The Named Credential event type captures information about Apex callouts that use named credentials as their endpoints. Use this event type to audit the installed managed packages that use named credentials. If you don’t recognize the package namespace in the named credential event log file, then you can investigate whether a security breach has occurred. This event type is available in the EventLogFile object in API version 53.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BOT_IDENTIFIER | TypeStringDescriptionThe ID of the bot. |
| BOT_SESSION_IDENTIFIER | TypeStringDescriptionThe bot session ID. |
| CALLER_PACKAGE_NAMESPACE | TypeStringDescriptionIf an Apex callout using a Named Credential endpoint is initiated from a package, then this field contains the package’s namespace. If the callout isn’t initiated from a package, then this field is empty.ExampleAcme |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always NamedCredential. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| NAMED_CREDENTIAL_NAME | TypeStringDescriptionThe name of the named credential that’s the endpoint of the Apex callout.ExampleMy_Named_Credential |
| ORGANIZATION_ID | TypeIDDescriptionThe 15-character ID of the org.Example00D000000000123 |
| PLANNER_IDENTIFIER | TypeStringDescriptionThe ID of the agent planner. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case-safe ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-safe ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |

#### See Also

-   [*Salesforce Help*: Named Credentials](https://help.salesforce.com/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "
    Salesforce Help: Named Credentials  - HTML (New Window)")

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
