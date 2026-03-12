---
title: "Apex Trigger Event Type"
domain: object-reference
topic: apex-trigger-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.904Z
estimatedTokens: 1799
keywords: [Apex, Trigger, Event, events, contain, triggers, fire, organization]
---

# Apex Trigger Event Type

> Apex Trigger events contain details about triggers that fire in an
         organization.

# Apex Trigger Event Type

Apex Trigger events contain details about triggers that fire in an organization.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BOT_IDENTIFIER | TypeStringDescriptionThe ID of the bot. |
| BOT_SESSION_IDENTIFIER | TypeStringDescriptionThe bot session ID. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that is using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds is used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DB_TOTAL_TIME | TypeNumberDescriptionTime (in milliseconds) spent waiting for database processing in aggregate for all operations in the request. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| ENTITY_NAME | TypeStringDescriptionThe name of the object affected by the trigger. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always ApexTrigger. |
| EXEC_TIME | TypeNumberDescriptionThe end-to-end Apex execution time (in milliseconds). |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIDDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PLANNER_IDENTIFIER | TypeStringDescriptionThe ID of the agent planner. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_STATUS | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RUN_TIME | TypeNumberDescriptionThis field is always null. To view the end-to-end Apex execution time (in milliseconds), refer to the EXEC_TIME field. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. The timezone is GMT. |
| TRIGGER_ID | TypeStringDescriptionThe 15-character ID of the trigger that was fired. |
| TRIGGER_NAME | TypeStringDescriptionFor triggers coming from managed packages, TRIGGER_NAME includes a namespace prefix separated with a . character. If no namespace prefix is present, the trigger is from an unmanaged trigger.Examples:examplePackage.managedExampleTrigger - Managed trigger from the examplePackage namespaceunmanagedExampleTrigger - Unmanaged trigger |
| TRIGGER_TYPE | TypeStringDescriptionThe type of this trigger.Possible ValuesAfterInsertAfterUpdateBeforeInsertBeforeUpdate |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIDDescriptionThe 15-character ID of the user who is using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the user who is using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_TYPE | TypeStringDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)
